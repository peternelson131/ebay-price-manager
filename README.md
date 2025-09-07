# eBay Price Manager

A web application that connects to eBay seller accounts to automatically manage listing prices based on configurable rules and schedules.

## Project Structure

```
ebay-price-manager/
├── frontend/          # Next.js React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Next.js pages
│   │   ├── services/     # API client services
│   │   ├── hooks/        # Custom React hooks
│   │   ├── store/        # State management (Zustand)
│   │   ├── utils/        # Utility functions
│   │   └── constants/    # Application constants
│   └── public/           # Static assets
├── backend/           # Node.js Express API server
│   ├── src/
│   │   ├── config/       # Configuration files
│   │   ├── database/     # Database connections and migrations
│   │   ├── jobs/         # Background job processing
│   │   ├── middleware/   # Express middleware
│   │   ├── models/       # Data models
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   └── utils/        # Backend utilities
│   └── tests/            # Test files
└── docs/              # Project documentation
```

## Quick Start

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Features

- User authentication with eBay Developer Portal integration
- Configurable price reduction rules
- Sales detection with automatic pause functionality
- Bulk rule application
- Analytics dashboard
- Real-time price monitoring

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, JavaScript
- **Database**: Supabase (PostgreSQL)
- **APIs**: eBay Trading API, Finding API, Inventory API

## Development

See individual package.json files in frontend/ and backend/ directories for available scripts.