import { useState, useCallback, useMemo } from 'react';
import { findRoutes, findTransferRoutes } from '../data/jeepneyRoutes';
import { JeepneyRoute, RouteResult } from '../interfaces/types';

// Move the helper functions outside the hook to prevent recreation on each render
const calculateRouteDistance = (route: JeepneyRoute, startStopId: string, endStopId: string): number => {
  const stops = route.stops;
  const startIndex = stops.findIndex(stop => stop.id === startStopId);
  const endIndex = stops.findIndex(stop => stop.id === endStopId);
  
  if (startIndex === -1 || endIndex === -1) {
    return 0;
  }
  
  // Use a simple distance calculation for now
  // In a real app, you would use actual distances between stops
  return Math.abs(endIndex - startIndex) * 2; // 2 km between stops as a rough estimate
};

const calculateEstimatedTime = (route: JeepneyRoute, startStopId: string, endStopId: string): number => {
  // Assume average speed of 15 km/h in Cebu traffic
  const distance = calculateRouteDistance(route, startStopId, endStopId);
  return Math.round(distance / 15 * 60); // Convert to minutes
};

export const useRouteSearch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<RouteResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState<{ start: string; dest: string } | null>(null);
  
  // Memoized function to process route results
  const processRouteResults = useCallback((
    directRoutes: JeepneyRoute[], 
    transferOptions: { primaryRoute: JeepneyRoute, transferRoute: JeepneyRoute, transferPoint: any }[],
    start: string,
    dest: string
  ): RouteResult[] => {
    const routeResults: RouteResult[] = [];
      
    // Add direct routes to results
    directRoutes.forEach(route => {
      routeResults.push({
        primaryRoute: route,
        transfers: [],
        totalDistance: calculateRouteDistance(route, start, dest),
        estimatedTime: calculateEstimatedTime(route, start, dest),
        totalFare: route.fare
      });
    });
    
    // Add transfer routes to results
    transferOptions.forEach(option => {
      routeResults.push({
        primaryRoute: option.primaryRoute,
        transfers: [option.transferRoute],
        totalDistance: 
          calculateRouteDistance(option.primaryRoute, start, option.transferPoint.id) + 
          calculateRouteDistance(option.transferRoute, option.transferPoint.id, dest),
        estimatedTime: 
          calculateEstimatedTime(option.primaryRoute, start, option.transferPoint.id) + 
          calculateEstimatedTime(option.transferRoute, option.transferPoint.id, dest) + 
          5, // Additional 5 minutes for transfer
        totalFare: option.primaryRoute.fare + option.transferRoute.fare
      });
    });
    
    // Sort results by estimated time (fastest first)
    return routeResults.sort((a, b) => a.estimatedTime - b.estimatedTime);
  }, []);

  const searchRoutes = useCallback((startPoint: string, destination: string) => {
    setIsLoading(true);
    setError(null);
    setSearchParams({ start: startPoint, dest: destination });
    
    try {
      // First, find direct routes (no transfers needed)
      const directRoutes = findRoutes(startPoint, destination);
      
      // Then, find routes that require transfers
      const transferOptions = findTransferRoutes(startPoint, destination);
      
      const routeResults = processRouteResults(
        directRoutes, 
        transferOptions, 
        startPoint, 
        destination
      );
      
      setResults(routeResults);
    } catch (err) {
      setError('Error finding routes. Please try different locations.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [processRouteResults]);
  
  // Memoize the return value to prevent unnecessary re-renders
  const returnValue = useMemo(() => ({
    searchRoutes,
    results,
    isLoading,
    error,
    searchParams
  }), [searchRoutes, results, isLoading, error, searchParams]);
  
  return returnValue;
}; 