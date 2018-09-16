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

DROP TABLE IF EXISTS features;

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
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS companies;

CREATE TABLE companies (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  features VARCHAR(8000)
)