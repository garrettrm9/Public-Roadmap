INSERT INTO users (first_name, last_name, middle_initial, email, password, features_written, features_voted) VALUES
  ('user1', 'testLAST', 'one', 'one', 'one', 'one', 'one'),
  ('user2', 'testLAST', 'two', 'two', 'two', 'two', 'two'),
  ('user3', 'testLAST', 'three', 'three', 'three', 'three', 'three');


INSERT INTO features (name, author, purpose, user_story, acceptance_criteria, business_value, wireframes, attachments, votes) VALUES
  ('feature1', 'user1', 'one', 'one', 'one', 'one', 'one', 'one', 6),
  ('feature2', 'user2', 'two', 'two', 'two', 'two', 'two', 'two', 5),
  ('feature3', 'user3', 'three', 'three', 'three', 'three', 'three', 'three', 4),
  ('feature4', 'user1', 'four', 'four', 'four', 'four', 'four', 'four', 3),
  ('feature5', 'user2', 'five', 'five', 'five', 'five', 'five', 'five', 2),
  ('feature6', 'user3', 'six', 'six', 'six', 'six', 'six', 'six', 1);

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
