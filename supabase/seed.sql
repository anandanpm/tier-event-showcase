-- Insert sample events (2 per tier)
INSERT INTO events (title, description, event_date, image_url, tier) VALUES
-- Free tier events
('Community Meetup', 'Join our monthly community gathering for networking and updates.', '2025-08-15 18:00:00+00', 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500', 'free'),
('Open Workshop', 'Free introductory workshop covering basic concepts and fundamentals.', '2025-08-20 14:00:00+00', 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500', 'free'),

-- Silver tier events
('Silver Exclusive Webinar', 'Advanced techniques and strategies for silver members only.', '2025-08-25 16:00:00+00', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500', 'silver'),
('Premium Q&A Session', 'Interactive session with industry experts for silver and above.', '2025-08-30 19:00:00+00', 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500', 'silver'),

-- Gold tier events  
('Gold Masterclass', 'Intensive masterclass featuring cutting-edge industry insights.', '2025-09-05 15:00:00+00', 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500', 'gold'),
('VIP Networking Event', 'Exclusive networking opportunity with industry leaders and peers.', '2025-09-10 18:30:00+00', 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500', 'gold'),

-- Platinum tier events
('Platinum Summit', 'Ultimate annual summit with keynote speakers and exclusive content.', '2025-09-15 09:00:00+00', 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500', 'platinum'),
('Executive Roundtable', 'Private roundtable discussion with C-level executives and thought leaders.', '2025-09-20 17:00:00+00', 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500', 'platinum');