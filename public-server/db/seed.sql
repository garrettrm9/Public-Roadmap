INSERT INTO users (first_name, last_name, middle_initial, email, password) VALUES
  ('first1', 'last1', 'one', 'user1', 'one'),
  ('first2', 'last2', 'two', 'user2', 'two'),
  ('first3', 'last3', 'three', 'user3', 'three'),
  ('first4', 'last4', 'four', 'user4', 'four');

INSERT INTO companies (name) VALUES
  ('Hershey'),
  ('Apple'),
  ('Spotify');

INSERT INTO products (name, company_name) VALUES
  ('Kit Kat', 'Hershey'),
  ('Hershey Kiss', 'Hershey'),
  ('Iphone', 'Apple'),
  ('Apple Watch', 'Apple'),
  ('Radio station', 'Spotify'),
  ('Mobile Spotify app', 'Spotify');

INSERT INTO features (name, votes, date_last_updated, product_name, user_email) VALUES
  ('Higher quality chocolate', 4, '2018-10-10', 'Kit Kat', 'new'),
  ('More Kisses per bag', 3, '2018-10-13', 'Hershey Kiss', 'test'),
  ('Itunes UI overhaul', 6, '2018-10-29', 'Iphone', 'new'),
  ('Open source software', 2, '2018-10-30', 'Apple Watch', 'test'),
  ('Improved AI song suggestion', 5, '2018-10-01', 'Radio station', 'new'),
  ('Less battery drain', 1, '2018-10-09', 'Mobile Spotify app', 'test');

INSERT INTO votes (feature_id, user_email) VALUES
  (1, 'new'),
  (1, 'test'),
  (1, 'user1'),
  (1, 'user2'),
  (1, 'user3'),
  (1, 'user4'),
  (2, 'new'),
  (2, 'test'),
  (2, 'user1'),
  (2, 'user2'),
  (2, 'user3'),
  (3, 'new'),
  (3, 'test'),
  (3, 'user1'),
  (3, 'user2'),
  (4, 'new'),
  (4, 'test'),
  (4, 'user1'),
  (5, 'new'),
  (5, 'test'),
  (6, 'new');

-- INSERT INTO follows (feature_id, user_id) VALUES
--   (1, 1),
--   (2, 1),
--   (3, 1),
--   (4, 1),
--   (1, 2),
--   (5, 2),
--   (6, 2);