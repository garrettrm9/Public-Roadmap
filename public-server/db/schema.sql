-- CREATE DATABASE publicroadmap;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  middle_initial VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  features_written VARCHAR(8000),
  features_voted VARCHAR(8000)
);

DROP TABLE IF EXISTS features CASCADE;

CREATE TABLE features (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  author VARCHAR(255),
  purpose VARCHAR(8000),
  user_story VARCHAR(8000),
  acceptance_criteria VARCHAR(8000),
  business_value VARCHAR(255),
  wireframes VARCHAR(255),
  attachments VARCHAR(255),
  votes INTEGER,
  date_created DATE
);

DROP TABLE IF EXISTS votes;

CREATE TABLE votes (
  id BIGSERIAL PRIMARY KEY,
  feature_id INTEGER,
  FOREIGN KEY(feature_id) REFERENCES features(id)
);

DROP TABLE IF EXISTS follows;

CREATE TABLE follows (
  id BIGSERIAL PRIMARY KEY,
  user_id INTEGER,
  feature_id INTEGER
);

DROP TABLE IF EXISTS companies;

CREATE TABLE companies (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  features VARCHAR(8000)
);