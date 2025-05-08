# Cebu Jeepney Routes Finder

A React TypeScript application that helps users find jeepney routes in Cebu City, Philippines. This app allows users to select their starting point and destination, then provides the best jeepney routes to get there, including direct routes and routes that require transfers.

![Cebu Jeepney Routes Finder](https://github.com/username/cebu-jeepney-routes/public/Preview.png)

## Features

- Easy-to-use interface with a clean, modern design
- Search for jeepney routes between any two locations in Cebu
- Intelligent location suggestion system while typing
- View direct routes and routes that require transfers
- See estimated travel time, distance, and fare for each route option
- Interactive map that displays only after routes are found
- Detailed route information including transfer points
- Mobile-responsive design for use on any device

## Demo

Visit the live demo: [Cebu Jeepney Routes Finder](https://cebu-jeepney-routes.vercel.app)

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/username/cebu-jeepney-routes.git
   cd cebu-jeepney-routes
   ```

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

## Performance Optimizations

- Efficient route-finding algorithm to quickly calculate optimal routes
- Memoized components to prevent unnecessary re-renders
- Lazy loading of map component only when needed
- Optimized location suggestions with debounced input

## Future Enhancements

- Add more complete and accurate jeepney route data
- Implement geolocation to automatically detect user's current location
- Add more detailed fare calculation based on distance and jeepney type
- Include route schedules and estimated wait times
- Add user accounts to save frequent routes
- Implement dark mode theme option
- Add multi-language support (Cebuano, Tagalog, English)

## Inspiration

This project was inspired by [enroute-cebu](https://enroute-cebu.vercel.app/), adapting their clean interface design while building our own implementation. The goal was to create a user-friendly application that makes navigating Cebu's complex jeepney system easier for both locals and tourists.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 