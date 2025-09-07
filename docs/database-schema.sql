-- eBay Price Manager Database Schema
-- Run this in your Supabase SQL Editor

-- Users table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- eBay credentials (encrypted)
CREATE TABLE ebay_credentials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  app_id VARCHAR(255),
  cert_id VARCHAR(255), 
  dev_id VARCHAR(255),
  token TEXT,
  token_expires TIMESTAMP WITH TIME ZONE,
  refresh_token TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Price reduction rules
CREATE TABLE price_rules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  target_type VARCHAR(50), -- 'all', 'category', 'keyword', 'specific'
  target_value TEXT,
  reduction_type VARCHAR(20), -- 'fixed', 'percentage'  
  reduction_amount DECIMAL(10,2),
  frequency VARCHAR(20), -- 'daily', 'weekly', 'monthly'
  min_price DECIMAL(10,2),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Synchronized listings
CREATE TABLE listings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  ebay_item_id VARCHAR(255) NOT NULL,
  title TEXT,
  current_price DECIMAL(10,2),
  min_price DECIMAL(10,2),
  inventory_count INTEGER,
  is_paused BOOLEAN DEFAULT false,
  last_synced TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Price change history  
CREATE TABLE price_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  listing_id UUID REFERENCES listings(id) ON DELETE CASCADE,
  rule_id UUID REFERENCES price_rules(id),
  old_price DECIMAL(10,2),
  new_price DECIMAL(10,2),
  changed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sales events
CREATE TABLE sales_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  listing_id UUID REFERENCES listings(id) ON DELETE CASCADE,
  inventory_change INTEGER,
  detected_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Audit logs
CREATE TABLE audit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  action VARCHAR(255),
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_ebay_credentials_user_id ON ebay_credentials(user_id);
CREATE INDEX idx_price_rules_user_id ON price_rules(user_id);
CREATE INDEX idx_listings_user_id ON listings(user_id);
CREATE INDEX idx_listings_ebay_item_id ON listings(ebay_item_id);
CREATE INDEX idx_price_history_listing_id ON price_history(listing_id);
CREATE INDEX idx_sales_events_listing_id ON sales_events(listing_id);
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);