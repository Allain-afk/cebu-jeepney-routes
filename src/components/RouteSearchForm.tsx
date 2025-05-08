import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { jeepneyRoutes, findClosestLocation } from '../data/jeepneyRoutes';
import { Location, LocationSuggestion } from '../interfaces/types';

interface RouteSearchFormProps {
  onSearch: (startPoint: string, destination: string) => void;
  isLoading: boolean;
}

const RouteSearchForm: React.FC<RouteSearchFormProps> = ({ onSearch, isLoading }) => {
  // Input values
  const [startInput, setStartInput] = useState<string>('');
  const [destInput, setDestInput] = useState<string>('');
  
  // Selected locations
  const [startLocation, setStartLocation] = useState<Location | null>(null);
  const [destLocation, setDestLocation] = useState<Location | null>(null);
  
  // Suggestions
  const [startSuggestions, setStartSuggestions] = useState<LocationSuggestion[]>([]);
  const [destSuggestions, setDestSuggestions] = useState<LocationSuggestion[]>([]);
  
  // UI states
  const [showStartSuggestions, setShowStartSuggestions] = useState<boolean>(false);
  const [showDestSuggestions, setShowDestSuggestions] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Get all locations from routes
  const allLocations = useMemo(() => {
    const locationsMap = new Map<string, Location>();
    
    jeepneyRoutes.forEach(route => {
      route.stops.forEach(stop => {
        if (!locationsMap.has(stop.id)) {
          locationsMap.set(stop.id, stop);
        }
      });
    });
    
    return Array.from(locationsMap.values());
  }, []);
  
  // Find location suggestions based on input
  const findSuggestions = useCallback((input: string): LocationSuggestion[] => {
    if (!input || input.trim() === '') return [];
    
    // Find suggestions with similarity
    const suggestions: LocationSuggestion[] = [];
    
    for (const location of allLocations) {
      // Check exact name match or alias match
      const exactNameMatch = location.name.toLowerCase() === input.toLowerCase();
      const exactAliasMatch = location.aliases?.some(alias => 
        alias.toLowerCase() === input.toLowerCase()
      );
      
      if (exactNameMatch || exactAliasMatch) {
        suggestions.push({ 
          location, 
          similarity: 1.0 
        });
        continue;
      }
      
      // Check partial matches
      const nameContains = location.name.toLowerCase().includes(input.toLowerCase());
      const aliasContains = location.aliases?.some(alias => 
        alias.toLowerCase().includes(input.toLowerCase())
      );
      
      if (nameContains || aliasContains) {
        suggestions.push({ 
          location, 
          similarity: 0.8 
        });
        continue;
      }
      
      // Check if input contains location name or alias
      const inputContainsName = input.toLowerCase().includes(location.name.toLowerCase());
      const inputContainsAlias = location.aliases?.some(alias => 
        input.toLowerCase().includes(alias.toLowerCase())
      );
      
      if (inputContainsName || inputContainsAlias) {
        suggestions.push({ 
          location, 
          similarity: 0.6 
        });
      }
    }
    
    // Sort by similarity
    suggestions.sort((a, b) => b.similarity - a.similarity);
    
    // Limit to top 5
    return suggestions.slice(0, 5);
  }, [allLocations]);
  
  // Update suggestions when input changes
  useEffect(() => {
    if (startInput) {
      const suggestions = findSuggestions(startInput);
      setStartSuggestions(suggestions);
      
      // If we have an exact match, select it
      const exactMatch = suggestions.find(s => s.similarity === 1.0);
      if (exactMatch) {
        setStartLocation(exactMatch.location);
      } else {
        setStartLocation(null);
      }
    } else {
      setStartSuggestions([]);
      setStartLocation(null);
    }
  }, [startInput, findSuggestions]);
  
  useEffect(() => {
    if (destInput) {
      const suggestions = findSuggestions(destInput);
      setDestSuggestions(suggestions);
      
      // If we have an exact match, select it
      const exactMatch = suggestions.find(s => s.similarity === 1.0);
      if (exactMatch) {
        setDestLocation(exactMatch.location);
      } else {
        setDestLocation(null);
      }
    } else {
      setDestSuggestions([]);
      setDestLocation(null);
    }
  }, [destInput, findSuggestions]);
  
  // Handle form submission
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    // Get closest match for start location if not already selected
    let finalStartLocation = startLocation;
    if (!finalStartLocation && startInput) {
      const closestLocation = findClosestLocation(startInput);
      finalStartLocation = closestLocation;
    }
    
    // Get closest match for destination if not already selected
    let finalDestLocation = destLocation;
    if (!finalDestLocation && destInput) {
      const closestLocation = findClosestLocation(destInput);
      finalDestLocation = closestLocation;
    }
    
    // Validate inputs
    if (!finalStartLocation) {
      setError("We couldn't find your starting point. Please try entering a known location in Cebu.");
      return;
    }
    
    if (!finalDestLocation) {
      setError("We couldn't find your destination. Please try entering a known location in Cebu.");
      return;
    }
    
    if (finalStartLocation.id === finalDestLocation.id) {
      setError("Starting point and destination cannot be the same.");
      return;
    }
    
    // Call onSearch with location IDs
    onSearch(finalStartLocation.id, finalDestLocation.id);
    
  }, [startLocation, destLocation, startInput, destInput, onSearch]);
  
  // Input change handlers
  const handleStartInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStartInput(e.target.value);
    setShowStartSuggestions(true);
  }, []);
  
  const handleDestInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDestInput(e.target.value);
    setShowDestSuggestions(true);
  }, []);
  
  // Select suggestion
  const selectStartSuggestion = useCallback((suggestion: LocationSuggestion) => {
    setStartLocation(suggestion.location);
    setStartInput(suggestion.location.name);
    setShowStartSuggestions(false);
  }, []);
  
  const selectDestSuggestion = useCallback((suggestion: LocationSuggestion) => {
    setDestLocation(suggestion.location);
    setDestInput(suggestion.location.name);
    setShowDestSuggestions(false);
  }, []);
  
  // Close suggestions on blur
  const handleStartBlur = useCallback(() => {
    // Delay to allow clicking on suggestions
    setTimeout(() => setShowStartSuggestions(false), 200);
  }, []);
  
  const handleDestBlur = useCallback(() => {
    // Delay to allow clicking on suggestions
    setTimeout(() => setShowDestSuggestions(false), 200);
  }, []);
  
  return (
    <div className="search-form-container">
      <h2>Find Jeepney Routes in Cebu</h2>
      <form onSubmit={handleSubmit}>
        <div className="location-selection">
          <div className="location-container">
            <span className="location-label">From</span>
            <div className="form-group">
              <div className="input-with-suggestions">
                <input 
                  id="startInput" 
                  type="text"
                  value={startInput} 
                  onChange={handleStartInputChange}
                  onFocus={() => setShowStartSuggestions(true)}
                  onBlur={handleStartBlur}
                  placeholder="Select a location"
                  required
                />
                
                {showStartSuggestions && startSuggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {startSuggestions.map((suggestion, index) => (
                      <li 
                        key={index} 
                        onClick={() => selectStartSuggestion(suggestion)}
                      >
                        {suggestion.location.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {startInput && !startLocation && !showStartSuggestions && startSuggestions.length > 0 && (
                <div className="suggestion-hint">
                  Did you mean: <button 
                    type="button" 
                    className="suggestion-button"
                    onClick={() => selectStartSuggestion(startSuggestions[0])}
                  >
                    {startSuggestions[0].location.name}
                  </button>?
                </div>
              )}
            </div>
          </div>

          <div className="location-container">
            <span className="location-label">To</span>
            <div className="form-group">
              <div className="input-with-suggestions">
                <input 
                  id="destInput" 
                  type="text"
                  value={destInput} 
                  onChange={handleDestInputChange}
                  onFocus={() => setShowDestSuggestions(true)}
                  onBlur={handleDestBlur}
                  placeholder="Select a location"
                  required
                />
                
                {showDestSuggestions && destSuggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {destSuggestions.map((suggestion, index) => (
                      <li 
                        key={index} 
                        onClick={() => selectDestSuggestion(suggestion)}
                      >
                        {suggestion.location.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {destInput && !destLocation && !showDestSuggestions && destSuggestions.length > 0 && (
                <div className="suggestion-hint">
                  Did you mean: <button 
                    type="button" 
                    className="suggestion-button"
                    onClick={() => selectDestSuggestion(destSuggestions[0])}
                  >
                    {destSuggestions[0].location.name}
                  </button>?
                </div>
              )}
            </div>
          </div>
        </div>

        {error && (
          <div className="error-container">
            <div className="error-message">{error}</div>
          </div>
        )}

        <button 
          type="submit" 
          className="find-route-btn"
          disabled={isLoading}
        >
          {isLoading ? 'Finding Routes...' : 'Find Route'}
        </button>
      </form>
    </div>
  );
};

export default React.memo(RouteSearchForm); 