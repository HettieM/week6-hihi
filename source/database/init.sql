BEGIN;

-- Comment when in deployed
DROP TABLE IF EXISTS user_input, users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  passw VARCHAR(255)
);

CREATE TABLE user_input (
  id SERIAL PRIMARY KEY, 
  author_id INTEGER,       -- unique identification
  category TEXT NOT NULL,       -- WORK, ENTERTAINMENT, SOCIAL, HEALTH, NEWS
  tool_name VARCHAR(50),        -- name of thing
  tool_description VARCHAR(280),-- what it is
  tool_link VARCHAR(75),        -- link to thing
  added_by VARCHAR(50),         -- username
  love INTEGER                  -- how much people love it
);

INSERT INTO users (username, passw) VALUES 
('Ivo', 'Has a very bad password'),
('Ina', 'doesnt either'),
('Hannah', 'however, has an excellent password'),
('Hettie', 'is a mystery');


INSERT INTO user_input (author_id, category, tool_name, tool_description, tool_link, added_by, love) VALUES
('1', 'Entertainment', 'Netflix', 'Stream shows and movies', 'netflix.com', 'ilovenetflix', 3),
('2', 'Work', 'Jitsi', 'Video conferencing with cool features like custom room links', 'jitsi.org/', 'jitsijack', 0),
('3', 'Health','Downward Dog App','Select your time, level, focus, voice, and music, and Down Dog creates a unique, personalized yoga practice every time.','downdogapp.com/','yogafan',18),
('4','News','Worldometer','Worldometer is a reference website that provides counters and real-time statistics for diverse topics.','worldometers.info/coronavirus/','scaredofviruses',5),
('1', 'Work','Miro','A shareable whiteboard.','miro.com','lovewhiteboards',13),
('2', 'Health','Headspace','Stress relief, breath and relax with us','headspace.com/','mindmelt', 9),
('3', 'Social','WhatsApp','Speak to friends and family online','whatsapp.com','helloareyouthere12', 100),
('4', 'Work','Zoom','Video conferencing with team','zoom.com','joblover60', 2),
('1', 'Entertainment', 'Steam', 'Buy and play multiplayer games line overcooked', 'steam.com', 'game-master994', 22)
;

COMMIT;
