const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');  // Add this to create a HTTP server
const socketIo = require('socket.io');  // Require Socket.IO
const reportRoutes = require('./routes/reportRoutes');

const app = express();
const server = http.createServer(app);  // Create HTTP server

const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',  // Frontend URL
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
app.use(express.json());
app.use('/reports', reportRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/traffic-control', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Real-time Socket.IO events
io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
