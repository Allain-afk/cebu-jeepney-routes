import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { RouteResult, Location, Waypoint, RouteSegment } from '../interfaces/types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
// Only run this code once on module import
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

interface RouteMapProps {
  selectedRoute: RouteResult | null;
}

// Component to fit map bounds to route
const FitBoundsToRoute: React.FC<{ coordinates: [number, number][] }> = ({ coordinates }) => {
  const map = useMap();
  
  React.useEffect(() => {
    if (coordinates.length > 0) {
      const bounds = L.latLngBounds(coordinates.map(coord => L.latLng(coord[0], coord[1])));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [coordinates, map]);
  
  return null;
};

// Function to generate a path between two locations using their waypoints if available
const generatePathBetweenStops = (
  route: RouteResult["primaryRoute"], 
  fromIdx: number,
  toIdx: number
): [number, number][] => {
  if (!route || fromIdx === -1 || toIdx === -1 || fromIdx === toIdx) {
    return [];
  }
  
  // Get the locations
  const fromLocation = route.stops[fromIdx];
  const toLocation = route.stops[toIdx];
  
  // If we have path segments defined, use them
  if (route.pathSegments) {
    // Find the segment that matches our from/to locations
    const segment = route.pathSegments.find(seg => 
      seg.from.id === fromLocation.id && seg.to.id === toLocation.id
    );
    
    if (segment) {
      // Return full path with waypoints
      return [
        fromLocation.coordinates,
        ...segment.waypoints.map(wp => wp.coordinates),
        toLocation.coordinates
      ];
    }
    
    // If exact segment not found, look for connecting segments
    if (Math.abs(fromIdx - toIdx) > 1) {
      // Build a path through intermediate stops
      const path: [number, number][] = [fromLocation.coordinates];
      
      // Determine direction (forward or backward in the route)
      const step = fromIdx < toIdx ? 1 : -1;
      
      // Go through each intermediate stop
      for (let i = fromIdx + step; i !== toIdx; i += step) {
        const currentStop = route.stops[i];
        path.push(currentStop.coordinates);
      }
      
      path.push(toLocation.coordinates);
      return path;
    }
  }
  
  // Default to direct line if no path segments available
  return [fromLocation.coordinates, toLocation.coordinates];
};

const RouteMap: React.FC<RouteMapProps> = ({ selectedRoute }) => {
  // Default center coordinates for Cebu City
  const defaultCenter: [number, number] = [10.3157, 123.8854];
  
  // Memoize the route calculations to improve performance
  const mapData = useMemo(() => {
    if (!selectedRoute || !selectedRoute.primaryRoute) {
      return { 
        center: defaultCenter, 
        primaryRoutePath: [], 
        transferRoutePaths: [],
        allCoordinates: [],
        startPoint: null,
        endPoint: null,
        transferPoint: null
      };
    }
    
    const primaryRoute = selectedRoute.primaryRoute;
    const startIdx = selectedRoute.startPointIdx ?? 0;
    const endIdx = selectedRoute.endPointIdx ?? (primaryRoute.stops.length - 1);
    let transferIdx = selectedRoute.transferPointIdx;
    
    // Generate the primary route path
    let primaryRoutePath: [number, number][] = [];
    
    if (selectedRoute.transfers.length === 0) {
      // Direct route - generate path from start to end
      primaryRoutePath = generatePathBetweenStops(primaryRoute, startIdx, endIdx);
    } else {
      // Route with transfer - generate path from start to transfer point
      if (transferIdx === undefined) {
        // Find a common stop between the routes if transferIdx not provided
        const transferStopIds = primaryRoute.stops
          .map(stop => stop.id)
          .filter(stopId => 
            selectedRoute.transfers[0].stops.some(transferStop => transferStop.id === stopId)
          );
        
        if (transferStopIds.length > 0) {
          transferIdx = primaryRoute.stops.findIndex(stop => stop.id === transferStopIds[0]);
        } else {
          transferIdx = Math.floor((startIdx + endIdx) / 2); // Fallback
        }
      }
      
      primaryRoutePath = generatePathBetweenStops(primaryRoute, startIdx, transferIdx);
    }
    
    // Generate transfer route paths
    const transferRoutePaths = selectedRoute.transfers.map(transferRoute => {
      const transferStartIdx = transferRoute.stops.findIndex(stop => 
        primaryRoute.stops.some(primaryStop => primaryStop.id === stop.id)
      );
      
      const transferEndIdx = transferRoute.stops.findIndex(stop => stop.id === primaryRoute.stops[endIdx]?.id);
      
      return generatePathBetweenStops(
        transferRoute, 
        transferStartIdx !== -1 ? transferStartIdx : 0,
        transferEndIdx !== -1 ? transferEndIdx : transferRoute.stops.length - 1
      );
    });
    
    // Collect all coordinates for centering the map
    const allCoordinates = [
      ...primaryRoutePath,
      ...transferRoutePaths.flat()
    ];
    
    // Extract key points
    const startPoint = primaryRoute.stops[startIdx]?.coordinates;
    const endPoint = selectedRoute.transfers.length === 0 
      ? primaryRoute.stops[endIdx]?.coordinates
      : selectedRoute.transfers[0].stops[selectedRoute.transfers[0].stops.length - 1]?.coordinates;
    const transferPoint = transferIdx !== undefined ? primaryRoute.stops[transferIdx]?.coordinates : null;
    
    // Calculate center
    const center = allCoordinates.length > 0 
      ? [
          allCoordinates.reduce((sum, coord) => sum + coord[0], 0) / allCoordinates.length,
          allCoordinates.reduce((sum, coord) => sum + coord[1], 0) / allCoordinates.length
        ] as [number, number]
      : defaultCenter;
      
    return { 
      center, 
      primaryRoutePath, 
      transferRoutePaths,
      allCoordinates,
      startPoint,
      endPoint,
      transferPoint,
      primaryRoute,  // Include the primaryRoute in the returned data
      startIdx,
      endIdx,
      transferIdx
    };
  }, [selectedRoute, defaultCenter]);
  
  if (!selectedRoute || !selectedRoute.primaryRoute) {
    return (
      <div className="map-container">
        <MapContainer 
          center={defaultCenter} 
          zoom={13} 
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    );
  }

  // At this point, TypeScript should know selectedRoute and primaryRoute are defined
  // But we'll use a non-null assertion to be extra clear
  const route = selectedRoute!;
  const primaryRoute = route.primaryRoute!;

  return (
    <div className="map-container">
      <MapContainer 
        center={mapData.center} 
        zoom={13} 
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Fit map to route bounds */}
        <FitBoundsToRoute coordinates={mapData.allCoordinates} />
        
        {/* Primary Route Line */}
        {mapData.primaryRoutePath.length > 0 && (
          <Polyline 
            positions={mapData.primaryRoutePath}
            color={primaryRoute.color}
            weight={5}
          />
        )}
        
        {/* Transfer Route Lines */}
        {mapData.transferRoutePaths.map((path, index) => (
          path.length > 0 && (
            <Polyline 
              key={index}
              positions={path}
              color={route.transfers[index]?.color || '#999'}
              weight={5}
              dashArray="5, 10"
            />
          )
        ))}
        
        {/* Starting Point */}
        {mapData.startPoint && (
          <Marker 
            position={mapData.startPoint}
            icon={new L.Icon({
              iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
              shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })}
          >
            <Popup>
              <strong>Starting Point</strong><br />
              {primaryRoute.stops[route.startPointIdx || 0]?.name}
            </Popup>
          </Marker>
        )}
        
        {/* Ending Point */}
        {mapData.endPoint && (
          <Marker 
            position={mapData.endPoint}
            icon={new L.Icon({
              iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
              shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })}
          >
            <Popup>
              <strong>Destination</strong><br />
              {route.transfers.length === 0 
                ? primaryRoute.stops[route.endPointIdx || (primaryRoute.stops.length - 1)]?.name
                : route.transfers[0].stops[route.transfers[0].stops.length - 1]?.name}
            </Popup>
          </Marker>
        )}
        
        {/* Transfer Point */}
        {mapData.transferPoint && route.transfers.length > 0 && (
          <Marker 
            position={mapData.transferPoint}
            icon={new L.Icon({
              iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
              shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })}
          >
            <Popup>
              <strong>Transfer Point</strong><br />
              {primaryRoute.stops[route.transferPointIdx || 0]?.name}<br />
              Switch from {primaryRoute.code} to {route.transfers[0].code}
            </Popup>
          </Marker>
        )}
        
        {/* Other Stop Markers */}
        {primaryRoute.stops
          .filter((stop, idx) => {
            // Skip start, end, and transfer points as they have special markers
            const isStart = idx === (route.startPointIdx || 0);
            const endPointIdx = route.endPointIdx ?? (primaryRoute.stops.length - 1);
            const isEnd = route.transfers.length === 0 && idx === endPointIdx;
            const isTransfer = route.transfers.length > 0 && idx === route.transferPointIdx;
            return !isStart && !isEnd && !isTransfer;
          })
          .map((stop, index) => (
            <Marker 
              key={`primary-${index}`} 
              position={stop.coordinates}
              icon={new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              })}
            >
              <Popup>
                <strong>{stop.name}</strong><br />
                Route: {primaryRoute.code}
              </Popup>
            </Marker>
          ))
        }
      </MapContainer>
    </div>
  );
};

export default React.memo(RouteMap); 