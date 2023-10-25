BEGIN TRANSACTION;

DROP TABLE IF EXISTS movies CASCADE;

-- Create the movie table
CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    title_img TEXT,
    bg_img TEXT,
    preview_img TEXT,
    video TEXT,
    title TEXT,
    year INTEGER,
    date DATE,
    age TEXT,
    length TEXT,
    category TEXT,
    description TEXT,
    active BOOLEAN
);

-- Grant Access
GRANT SELECT ON TABLE movies TO PUBLIC;

-- Insert data into the movie table
INSERT INTO movies (movie_id, title_img, bg_img, preview_img, video, title, year, date, age, length, category, description, active)
VALUES
    (1, '../assets/movies/transformers-title.png', '../assets/movies/bg-transformers.jpeg', '../assets/movies/transformers.jpeg', 'https://www.youtube.com/embed/v6vVHkP0L70', 'Transformers: Rise of the Machines', '2023', '2023-08-17', '12+', '2h 15min', 'Action', 'In a world filled with technology and machines, a group of heroes embarks on a journey to save humanity from the brink of destruction. Join them in this epic adventure as they battle the forces of evil and uncover the secrets of the Transformers.', true),
    (2, '../assets/movies/meg-2-title.png', '../assets/movies/bg-meg-2.jpeg', '../assets/movies/meg-2.jpg', 'https://www.youtube.com/embed/dG91B3hHyY4', 'Meg 2', '2023', '2023-08-04', '16+', '1h 56min', 'Thriller', 'The Megalodon, a prehistoric giant shark, returns to terrorize the seas once again. A team of researchers and adventurers must confront their deepest fears as they battle the monstrous creature in this thrilling sequel.', false),
    (3, '../assets/movies/fast-x-title.png', '../assets/movies/bg-fast-x.jpeg', '../assets/movies/fast-x.jpeg', 'https://www.youtube.com/embed/32RAq6JzY-w', 'Fast X', '2023', '2023-05-19', '12+', '2h 21min', 'Action', 'Get ready for the fastest and most furious installment yet! Dom and his crew face their biggest challenge yet as they go up against a formidable new enemy. Buckle up for high-speed action and adrenaline-pumping stunts!', false),
    (4, '../assets/movies/jailer-title.png', '../assets/movies/bg-jailer.jpeg', '../assets/movies/jailer.jpg', 'https://www.youtube.com/embed/lshAqOT7BB8', 'Jailer', '2023', '2023-08-09', '15+', '2h 48min', 'Action', 'Prepare for an action-packed thriller that will keep you on the edge of your seat! An ex-cop must rescue hostages from a high-security prison run by ruthless criminals. Explosive battles and heart-pounding suspense await you!', false),
    (5, '../assets/movies/beautiful-disaster-title.png', '../assets/movies/bg-beautiful-disaster.jpeg', '../assets/movies/beautiful-disaster.jpeg', 'https://www.youtube.com/embed/nvaenzyXl4o', 'Beautiful Disaster', '2023', '2023-04-12', '12+', '1h 45min', 'Romance', 'Experience a heartwarming love story like no other! Two strangers from different worlds cross paths and embark on a journey of self-discovery and love. Get ready for a beautiful and emotional cinematic experience.', false),
    (6, '../assets/movies/ape-title.png', '../assets/movies/bg-ape.jpeg', '../assets/movies/ape.jpg', 'https://www.youtube.com/embed/dtyPh5yCoWg', 'Ape vs. Mecha Ape', '2023', '2023-03-24', '14+', '2h 45min', 'Thriller', 'Witness an epic battle of giant apes! In a world where technology and nature collide, two titanic forces clash in an ultimate showdown. Prepare for jaw-dropping action and suspense!', false),
    (7, '../assets/movies/assassin-title.png', '../assets/movies/bg-assassin.jpg', '../assets/movies/assassin.jpg', 'https://www.youtube.com/embed/qiUATuIhUw8', 'Assassin', '2023', '2023-03-31', '16+', '1h 28min', 'Thriller', 'Enter the deadly world of espionage and assassins! A skilled assassin faces a life-threatening mission that pushes her to her limits. Uncover the secrets, suspense, and action in this thrilling film.', false),
	(8, '../assets/movies/no-hard-feelings-title.png', '../assets/movies/bg-no-hard-feelings.jpeg', '../assets/movies/no-hard-feelings.jpeg', 'https://www.youtube.com/embed/7psP7xBEa28', 'No Hard Feelings', '2023', '2023-06-23', '14+', '1h 43min', 'Romance', 'Prepare for a heartfelt journey of love and forgiveness! Two souls find solace in each other''s company as they navigate the complexities of life and relationships. A story of love with no hard feelings.', false),
	(9, '../assets/movies/peter-pan-and-wendy-title.png', '../assets/movies/bg-peter-pan-and-wendy.jpeg', '../assets/movies/peter-pan-and-wendy.jpg', 'https://www.youtube.com/embed/9Ji5U2sTlLU', 'Peter Pan & Wendy', '2023', '2023-04-28', '12+', '1h 49min', 'Adventure', 'Fly to Neverland once again in this enchanting adventure! Join Peter Pan, Wendy, and their friends on a magical journey to defeat Captain Hook and rediscover the wonder of childhood.', false),
    (10, '../assets/movies/heart-of-stone-title.png', '../assets/movies/bg-heart-of-stone.jpeg', '../assets/movies/heart-of-stone.jpg', 'https://www.youtube.com/embed/XuDwndGaCFo', 'Heart of Stone', '2023', '2023-08-11', '14+', '2h 02min', 'Adventure', 'Embark on a daring adventure to uncover the legendary Heart of Stone! Join a fearless explorer on a quest filled with danger, mystery, and ancient secrets. Prepare for an epic journey like no other.', false),
    (11, '../assets/movies/the-little-mermaid-title.png', '../assets/movies/bg-little-mermaid.jpg', '../assets/movies/the-little-mermaid.jpeg', 'https://www.youtube.com/embed/kpGo2_d3oYE', 'The Little Mermaid', '2023', '2023-05-26', '12+', '2h 14min', 'Romance', 'Dive into a magical underwater world where love knows no bounds! Follow the enchanting tale of a young mermaid who dreams of a life on land and a prince she falls in love with. A timeless romance awaits!', false),
    (12, '../assets/movies/the-65-title.png', '../assets/movies/bg-65.jpeg', '../assets/movies/65.jpg', 'https://www.youtube.com/embed/bHXejJq5vr0', 'Sixty Five', '2023', '2023-03-10', '15+', '1h 33min', 'Action', 'Join the elite team of secret agents in a race against time! When a deadly threat emerges, the fate of the world hangs in the balance. Get ready for non-stop action and suspense in Sixty Five.', false),
    (13, '../assets/movies/the-black-demon-title.png', '../assets/movies/bg-the-black-demon.jpeg', '../assets/movies/the-black-demon.jpg', 'https://www.youtube.com/embed/z1xJAyVKAPY', 'The Black Demon', '2023', '2023-04-28', '16+', '1h 40min', 'Thriller', 'Unleash your inner demon in this spine-tingling thriller! When an ancient evil awakens, a group of unlikely heroes must confront their darkest fears. Prepare for a chilling and suspenseful ride.', false),
    (14, '../assets/movies/the-tank-title.png', '../assets/movies/bg-the-tank.jpeg', '../assets/movies/the-tank.jpeg', 'https://www.youtube.com/embed/23GmhsmrCIo', 'The Tank', '2023', '2023-04-21', '17+', '1h 40min', 'Horror', 'Descend into the depths of terror in The Tank! A group of friends faces unimaginable horror when they explore an abandoned military facility. Brace yourself for a chilling and intense experience.', false),
    (15, '../assets/movies/the-covenant-title.png', '../assets/movies/bg-the-covenant.jpeg', '../assets/movies/the-covenant.jpg', 'https://www.youtube.com/embed/02PPMPArNEQ', 'The Covenant', '2023', '2023-04-21', '12+', '2h 03min', 'Action', 'Experience a world of ancient powers and dark secrets! A group of students at a supernatural academy must harness their extraordinary abilities to save the world from a malevolent force.', false);


COMMIT;