# Cebu Jeepney Routes Finder

A React TypeScript application that helps users find jeepney routes in Cebu City, Philippines. This app allows users to select their starting point and destination, then provides the best jeepney routes to get there, including direct routes and routes that require transfers.

## Features

- Easy-to-use interface with a clean, modern design
- Search for jeepney routes between any two locations in Cebu
- Intelligent location suggestion system while typing
- View direct routes and routes that require transfers
- See estimated travel time, distance, and fare for each route option
- Interactive map that displays only after routes are found
- Detailed route information including transfer points
- Mobile-responsive design for use on any device

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
- Leaflet & React-Leaflet for interactive maps
- CSS for styling (no external UI libraries)

## Project Structure

```
src/
├── components/      # React components
│   ├── RouteSearchForm.tsx  # Search form with location inputs
│   ├── RouteResults.tsx     # Display route options
│   ├── RouteMap.tsx         # Interactive map component
│   └── ErrorBoundary.tsx    # Error handling
├── data/            # Jeepney route data
├── hooks/           # Custom React hooks
│   └── useRouteSearch.ts    # Logic for finding routes
├── interfaces/      # TypeScript interfaces
├── App.tsx          # Main App component
├── App.css          # Global styles
└── index.tsx        # Entry point
```

## How to Use

1. Enter your starting point in the "From" field
   - The app will suggest locations as you type
2. Enter your destination in the "To" field
   - The app will suggest locations as you type
3. Click "Find Route" to see available options
4. Review the route details that appear below
   - The map will automatically display the selected route
5. Click on different route options to see them on the map

## User Interface

The application features a clean, intuitive interface inspired by modern transit apps:

- Floating labels on input fields for better usability
- Intelligent autocomplete suggestions for locations
- Conditional rendering to show only relevant information
- Clear visual distinction between different route options
- Responsive design that works on mobile and desktop devices

## Data Source

The jeepney route data in this application is sample data for demonstration purposes. In a production environment, this would be replaced with accurate and up-to-date route information from official sources.

## Future Enhancements

- Add more complete and accurate jeepney route data
- Implement geolocation to automatically detect user's current location
- Add more detailed fare calculation based on distance and jeepney type
- Include route schedules and estimated wait times
- Add user accounts to save frequent routes
- Implement dark mode theme option
- Add multi-language support (Cebuano, Tagalog, English)

## Inspiration

## License

MIT 