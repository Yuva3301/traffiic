import axios from 'axios';
import { useState, useEffect } from 'react';

function ReportList() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:5000/reports');
        if (response.data) {
          setReports(response.data);  // Ensure 'data' exists before using it
        } else {
          throw new Error('No data found');
        }
      } catch (error) {
        setError(error.message || 'Error fetching reports');
        console.error(error);  // Log the exact error to the console
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) return <p>Loading reports...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {reports.map((report, index) => (
        <div key={index}>
          <h3>{report.type}</h3>
          <p>Location: {report.location.lat}, {report.location.lng}</p>
          <p>Severity: {report.severity}</p>
        </div>
      ))}
    </div>
  );
}

export default ReportList;

