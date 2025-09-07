# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

eBay Price Manager is a full-stack web application that connects to eBay seller accounts via the eBay Developer API to automatically manage listing prices based on configurable rules and schedules.

## Development Commands

### Frontend (Next.js + TypeScript)
```bash
cd frontend
npm install
npm run dev        # Start development server on localhost:3000
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Lint code
npm run type-check # TypeScript type checking
```

### Backend (Node.js + Express)
```bash
cd backend
npm install
npm run dev        # Start development server with nodemon on localhost:3001
npm run start      # Start production server
npm run test       # Run tests with Jest
npm run lint       # Lint code
```

## Architecture

### Frontend Structure (`frontend/src/`)
- **`app/`** - Next.js 13+ app directory with pages and layouts
- **`components/`** - Reusable UI components
- **`services/`** - API client services and external integrations
- **`hooks/`** - Custom React hooks
- **`store/`** - State management (Zustand)
- **`utils/`** - Utility functions and helpers
- **`constants/`** - Application constants and configuration

### Backend Structure (`backend/src/`)
- **`config/`** - Application configuration and environment setup
- **`database/`** - Database connections, migrations, and schemas
- **`routes/`** - Express.js API route definitions
- **`services/`** - Business logic and external API integrations
- **`middleware/`** - Express middleware for auth, validation, etc.
- **`models/`** - Data models and database schemas
- **`jobs/`** - Background job processing and cron tasks
- **`utils/`** - Backend utility functions

## Key Technologies

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS, Zustand
- **Backend**: Node.js, Express.js, JavaScript
- **Database**: Supabase (PostgreSQL)
- **APIs**: eBay Trading API, eBay Finding API, eBay Inventory API
- **Authentication**: JWT + eBay OAuth 2.0

## Environment Setup

1. Copy `.env.example` to `.env` and configure:
   - Supabase credentials
   - eBay Developer API keys
   - JWT secret
   - Email service configuration

2. Set up eBay Developer Account:
   - Create application at developer.ebay.com
   - Configure OAuth redirect URLs
   - Note Client ID, Client Secret, Developer ID

## API Integration Points

### eBay APIs Used
- **Trading API**: Listing management and price updates (ReviseFixedPriceItem)
- **Finding API**: Listing search and metadata retrieval
- **Inventory API**: Modern inventory management
- **OAuth API**: Authentication and token management

### Database Schema (Supabase)
- `users` - User accounts and profiles
- `ebay_credentials` - Encrypted eBay API tokens
- `price_rules` - User-defined pricing rules
- `listings` - Synchronized eBay listings
- `price_history` - Price change audit trail
- `sales_events` - Detected sales for pause logic

## Development Notes

- Backend API runs on port 3001, frontend on port 3000
- API routes are proxied through Next.js rewrites
- All sensitive credentials should be encrypted at rest
- Price updates respect eBay's rate limits and best practices
- Sales detection pauses price reductions when inventory decreases
- Follow eBay's automation policies and cooling-off periods

## Testing

- Backend uses Jest for unit and integration tests
- API contract testing for eBay integration
- Frontend component testing with React Testing Library
- End-to-end testing with Playwright (planned)

## Security Considerations

- API credentials encrypted with AES-256
- JWT tokens for session management
- HTTPS required for all communications
- Rate limiting on API endpoints
- Input validation and sanitization
- CORS configured for frontend domain only