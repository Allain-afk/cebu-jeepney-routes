export interface Location {
  id: string;
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  aliases?: string[]; // Alternative names or common ways to refer to this location
}

export interface Waypoint {
  coordinates: [number, number]; // [latitude, longitude]
  description?: string; // Optional description of this waypoint (e.g., "Turn right at Gaisano")
}

export interface RouteSegment {
  from: Location;
  to: Location;
  waypoints: Waypoint[]; // Additional points between stops for accurate route display
}

export interface JeepneyRoute {
  id: string;
  code: string;
  name: string;
  color: string;
  stops: Location[];
  fare: number;
  pathSegments?: RouteSegment[]; // Detailed path segments between stops
}

export interface RouteSearchParams {
  startPoint: string;
  destination: string;
}

export interface RouteResult {
  primaryRoute?: JeepneyRoute;
  transfers: JeepneyRoute[];
  totalDistance: number;
  estimatedTime: number;
  totalFare: number;
  startPointIdx?: number; // Index of the starting point in the route
  endPointIdx?: number; // Index of the destination in the route
  transferPointIdx?: number; // Index of the transfer point in the primary route
}

export interface LocationSuggestion {
  location: Location;
  similarity: number;
} 