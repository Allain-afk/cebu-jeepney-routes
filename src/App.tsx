import React, { useState, useCallback, useMemo } from 'react';
import RouteSearchForm from './components/RouteSearchForm';
import RouteResults from './components/RouteResults';
import RouteMap from './components/RouteMap';
import { useRouteSearch } from './hooks/useRouteSearch';
import { RouteResult } from './interfaces/types';
import './App.css';

const App: React.FC = () => {
  const { searchRoutes, results, isLoading, error } = useRouteSearch();
  const [selectedRoute, setSelectedRoute] = useState<RouteResult | null>(null);
  
  // Memoize the search handler to prevent unnecessary re-renders
  const handleSearch = useCallback((startPoint: string, destination: string) => {
    searchRoutes(startPoint, destination);
    setSelectedRoute(null);
  }, [searchRoutes]);
  
  // Memoize the route selection handler
  const handleSelectRoute = useCallback((route: RouteResult) => {
    setSelectedRoute(route);
  }, []);
  
  // Memoize the selectedRoute value for the map
  const mapSelectedRoute = useMemo(() => {
    return selectedRoute || (results.length > 0 ? results[0] : null);
  }, [selectedRoute, results]);
  
  // Current year for footer copyright
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  
  return (
    <div className="app">
      <header>
        <h1>Cebu Jeepney Routes</h1>
      </header>
      
      <main>
        <div className="container">
          <div className="search-section">
            <RouteSearchForm onSearch={handleSearch} isLoading={isLoading} />
            
            {error && (
              <div className="error-container">
                <p>{error}</p>
              </div>
            )}
          </div>
          
          <div className="results-section">
            <div className="results-list">
              <RouteResults 
                results={results} 
                onSelectRoute={handleSelectRoute}
                selectedRouteId={selectedRoute?.primaryRoute?.id}
              />
            </div>
            
            <div className="map-section">
              <RouteMap selectedRoute={mapSelectedRoute} />
            </div>
          </div>
        </div>
      </main>
      
      <footer>
        <p>&copy; {currentYear} Cebu Jeepney Routes Finder</p>
      </footer>
    </div>
  );
};

export default React.memo(App); 