const mongoose = require('mongoose');

// Define the schema for the report
const reportSchema = new mongoose.Schema({
    type: { type: String, required: true }, // Type of report (e.g., traffic, pothole)
    location: {
        lat: { type: Number, required: true }, // Latitude
        lng: { type: Number, required: true }, // Longitude
    },
    severity: { type: String, required: true }, // Severity of the issue
    createdAt: { type: Date, default: Date.now }, // Timestamp when the report is created
});

// Create the model from the schema
const Report = mongoose.model('Report', reportSchema);

// Export the model for use in other parts of the application
module.exports = Report;
