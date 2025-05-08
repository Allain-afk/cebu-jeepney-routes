import React, { useCallback } from 'react';
import { RouteResult } from '../interfaces/types';

interface RouteResultsProps {
  results: RouteResult[];
  onSelectRoute?: (route: RouteResult) => void;
  selectedRouteId?: string;
}

const RouteResults: React.FC<RouteResultsProps> = ({ 
  results, 
  onSelectRoute,
  selectedRouteId 
}) => {
  // Memoize the click handler for each route card - must be before any conditional returns
  const handleRouteClick = useCallback((result: RouteResult) => {
    if (onSelectRoute) {
      onSelectRoute(result);
    }
  }, [onSelectRoute]);
  
  // Return null if there are no results
  if (results.length === 0) {
    return null;
  }

  return (
    <div className="route-results">
      <h2>Available Routes</h2>
      
      {results.length === 0 ? (
        <p>No routes found between these locations. Try different locations.</p>
      ) : (
        <div className="results-container">
          {results.map((result, index) => {
            const isSelected = result.primaryRoute?.id === selectedRouteId;
            
            return (
              <div 
                key={index} 
                className={`route-card ${isSelected ? 'route-card-selected' : ''}`}
                onClick={() => handleRouteClick(result)}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
              >
                <div className="route-header">
                  <h3>Route Option {index + 1}</h3>
                  <div className="route-summary">
                    <span className="time">{result.estimatedTime} min</span>
                    <span className="distance">{result.totalDistance.toFixed(1)} km</span>
                    <span className="fare">₱{result.totalFare.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="route-details">
                  {/* Primary Route */}
                  {result.primaryRoute && (
                    <div className="route-segment">
                      <div 
                        className="route-line" 
                        style={{ backgroundColor: result.primaryRoute.color }}
                      ></div>
                      <div className="route-info">
                        <span className="route-code">{result.primaryRoute.code}</span>
                        <span className="route-name">{result.primaryRoute.name}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Show transfer instructions if there are transfers */}
                  {result.transfers.length > 0 && (
                    <>
                      <div className="transfer-point">
                        <span className="transfer-icon">↓</span>
                        <span>Transfer point</span>
                      </div>
                      
                      {/* Transfer Routes */}
                      {result.transfers.map((transferRoute, idx) => (
                        <div key={idx} className="route-segment">
                          <div 
                            className="route-line" 
                            style={{ backgroundColor: transferRoute.color }}
                          ></div>
                          <div className="route-info">
                            <span className="route-code">{transferRoute.code}</span>
                            <span className="route-name">{transferRoute.name}</span>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(RouteResults); 