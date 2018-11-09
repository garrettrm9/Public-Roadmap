-- INSERT INTO users (first_name, last_name, middle_initial, email, password, features_written, features_voted) VALUES
--   ('user1', 'testLAST', 'one', 'one', 'one', 'one', 'one'),
--   ('user2', 'testLAST', 'two', 'two', 'two', 'two', 'two'),
--   ('user3', 'testLAST', 'three', 'three', 'three', 'three', 'three');
INSERT INTO products (name) VALUES
  ('Hershey'),
  ('Apple'),
  ('Compaq');


INSERT INTO features (name, author, votes, date_last_updated, product_id) VALUES
  ('Itunes UI overhaul', 'user1', 6, '2018-10-29', 2),
  ('Modern desktops', 'user2', 5, '2018-10-01', 3),
  ('Higher quality chocolate', 'user3', 4, '2018-10-10', 1),
  ('Crunch bars everyqher', 'user1', 3, '2018-10-13', 1),
  ('Open source software', 'user2', 2, '2018-10-30', 2),
  ('Figure out what Compaq is', 'user3', 1, '2018-10-09', 3);

INSERT INTO votes (feature_id) VALUES
  (1),
  (1),
  (1),
  (1),
  (1),
  (1),
  (2),
  (2),
  (2),
  (2),
  (2),
  (3),
  (3),
  (3),
  (3),
  (4),
  (4),
  (4),
  (5),
  (5),
  (6);
