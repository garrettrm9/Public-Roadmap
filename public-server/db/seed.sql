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

INSERT INTO features (name, purpose, date_last_updated, product_name, user_email) VALUES
  ('Higher quality chocolate', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-10-10', 'Kit Kat', 'new'),
  ('More Kisses per bag', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-10-13', 'Hershey Kiss', 'test'),
  ('Itunes UI overhaul', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-10-29', 'Iphone', 'new'),
  ('Open source software', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-10-30', 'Apple Watch', 'test'),
  ('Improved AI song suggestion', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-10-01', 'Radio station', 'new'),
  ('Less battery drain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2018-10-09', 'Mobile Spotify app', 'test');

INSERT INTO activities (type, feature_id, user_email) VALUES
  ('vote', 1, 'new'),
  ('vote', 1, 'test'),
  ('vote', 1, 'user1'),
  ('vote', 1, 'user2'),
  ('vote', 1, 'user3'),
  ('vote', 1, 'user4'),
  ('vote', 2, 'new'),
  ('vote', 2, 'test'),
  ('vote', 2, 'user1'),
  ('vote', 2, 'user2'),
  ('vote', 2, 'user3'),
  ('vote', 3, 'new'),
  ('vote', 3, 'test'),
  ('vote', 3, 'user1'),
  ('vote', 3, 'user2'),
  ('vote', 4, 'new'),
  ('vote', 4, 'test'),
  ('vote', 4, 'user1'),
  ('vote', 5, 'new'),
  ('vote', 5, 'test'),
  ('vote', 6, 'new'),
  ('follow', 1, 'new'),
  ('follow', 2, 'new'),
  ('follow', 3, 'new'),
  ('follow', 4, 'test'),
  ('follow', 5, 'test'),
  ('follow', 6, 'test');


-- INSERT INTO follows (feature_id, user_id) VALUES
--   (1, 1),
--   (2, 1),
--   (3, 1),
--   (4, 1),
--   (1, 2),
--   (5, 2),
--   (6, 2);