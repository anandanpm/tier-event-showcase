-- Create tier enum
CREATE TYPE tier_type AS ENUM ('free', 'silver', 'gold', 'platinum');

-- Create events table
CREATE TABLE events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    image_url TEXT,
    tier tier_type NOT NULL DEFAULT 'free',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS policies
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Policy for authenticated users to read events based on their tier
CREATE POLICY "Users can view events based on their tier" ON events
    FOR SELECT USING (
        CASE 
            WHEN auth.jwt() ->> 'user_metadata' ->> 'tier' = 'platinum' THEN tier IN ('free', 'silver', 'gold', 'platinum')
            WHEN auth.jwt() ->> 'user_metadata' ->> 'tier' = 'gold' THEN tier IN ('free', 'silver', 'gold')
            WHEN auth.jwt() ->> 'user_metadata' ->> 'tier' = 'silver' THEN tier IN ('free', 'silver')
            ELSE tier = 'free'
        END
    );

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_events_updated_at 
    BEFORE UPDATE ON events 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();