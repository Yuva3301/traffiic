import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MapComponent from './components/MapComponent'; // Importing the Map Component
import ReportList from './components/ReportList'; // Importing Report List Component (if you have a separate list view)
import ReportForm from './components/ReportForm'; // Component for adding new reports (like potholes or traffic issues)

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          {/* Define different routes for your app */}
          <Route path="/" element={<MapComponent />} />
          <Route path="/reports" element={<ReportList />} />
          <Route path="/add-report" element={<ReportForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
