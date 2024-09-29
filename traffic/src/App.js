import React from 'react';
import './App.css'; // Import the CSS file
import ReportForm from './components/ReportForm';
import ReportList from './components/ReportList';

const App = () => {
    return (
        <div>
            <h1>Crowd-Sourced Traffic Control</h1>
            <ReportForm />
            <ReportList />
        </div>
    );
};

export default App;
