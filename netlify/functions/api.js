const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const serverless = require('serverless-http');

// Import route handlers
const authRoutes = require('../../backend/src/routes/auth');
const ebayRoutes = require('../../backend/src/routes/ebay');
const listingsRoutes = require('../../backend/src/routes/listings');
const rulesRoutes = require('../../backend/src/routes/rules');
const dashboardRoutes = require('../../backend/src/routes/dashboard');

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-netlify-domain.netlify.app']
    : ['http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'eBay Price Manager API is running on Netlify',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/ebay', ebayRoutes);
app.use('/api/listings', listingsRoutes);
app.use('/api/rules', rulesRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: {
      message: 'Route not found',
      path: req.originalUrl
    }
  });
});

module.exports.handler = serverless(app);