# Cebu Jeepney Routes Finder

A React TypeScript application that helps users find jeepney routes in Cebu City, Philippines. This app allows users to select their starting point and destination, then provides the best jeepney routes to get there, including direct routes and routes that require transfers.

## Features

- Search for jeepney routes between any two points in Cebu
- View direct routes and routes that require transfers
- See estimated travel time, distance, and fare
- Interactive map displaying the route
- Mobile-responsive design

## Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser

## Tech Stack

- React 18
- TypeScript
- Leaflet & React-Leaflet for maps
- CSS for styling

## Project Structure

```
src/
├── components/      # React components
├── data/            # Jeepney route data
├── hooks/           # Custom React hooks
├── interfaces/      # TypeScript interfaces
├── App.tsx          # Main App component
├── App.css          # Global styles
└── index.tsx        # Entry point
```

## How to Use

1. Select your starting point from the dropdown
2. Select your destination from the dropdown
3. Click "Find Routes" to see available options
4. View the route details and map

## Data Source

The jeepney route data in this application is sample data for demonstration purposes. In a production environment, this would be replaced with accurate and up-to-date route information from official sources.

## Future Enhancements

- Add more complete and accurate jeepney route data
- Implement geolocation to automatically detect user's current location
- Add fare calculation based on distance
- Include route schedules and estimated wait times
- Add user accounts to save frequent routes
