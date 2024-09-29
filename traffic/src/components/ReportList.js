import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportList = () => {
    const [reports, setReports] = useState([]);
    const [error, setError] = useState('');

    const fetchReports = async () => {
        try {
            const response = await axios.get('http://localhost:5000/reports');
            setReports(response.data);
        } catch (error) {
            setError('Error fetching reports: ' + error.response.data.error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/report/${id}`);
            fetchReports(); // Refresh the report list
        } catch (error) {
            setError('Error deleting report: ' + error.response.data.error);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    return (
        <div>
            <h2>Reports</h2>
            {error && <p>{error}</p>}
            <ul>
                {reports.map((report) => (
                    <li key={report._id}>
                        {report.type} - Severity: {report.severity} - Location: ({report.location.lat}, {report.location.lng}) - Reported at: {new Date(report.createdAt).toLocaleString()}
                        <button onClick={() => handleDelete(report._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReportList;
