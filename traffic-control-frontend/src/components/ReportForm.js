import React, { useState } from 'react';
import axios from 'axios';

const ReportForm = () => {
    const [type, setType] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [severity, setSeverity] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reportData = {
            type,
            location: { lat: parseFloat(lat), lng: parseFloat(lng) },
            severity
        };

        try {
            await axios.post('http://localhost:5000/report', reportData);
            setMessage('Report submitted successfully!');
            setType('');
            setLat('');
            setLng('');
            setSeverity('');
        } catch (error) {
            setMessage('Error submitting report: ' + error.response.data.error);
        }
    };

    return (
        <div>
            <h2>Submit a Report</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Type:</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
                </div>
                <div>
                    <label>Latitude:</label>
                    <input type="number" value={lat} onChange={(e) => setLat(e.target.value)} required />
                </div>
                <div>
                    <label>Longitude:</label>
                    <input type="number" value={lng} onChange={(e) => setLng(e.target.value)} required />
                </div>
                <div>
                    <label>Severity:</label>
                    <input type="text" value={severity} onChange={(e) => setSeverity(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ReportForm;
