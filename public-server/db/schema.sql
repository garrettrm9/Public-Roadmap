-- CREATE DATABASE publicroadmap;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id BIGSERIAL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  middle_initial VARCHAR(255),
  email VARCHAR(255) PRIMARY KEY,
  password VARCHAR(255)
);

DROP TABLE IF EXISTS companies CASCADE;

CREATE TABLE companies (
  id BIGSERIAL,
  name VARCHAR(255) PRIMARY KEY
);

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id BIGSERIAL,
  name VARCHAR(255) PRIMARY KEY,
  company_name VARCHAR(255),
  FOREIGN KEY (company_name) REFERENCES companies(name)
);

DROP TABLE IF EXISTS features CASCADE;

CREATE TABLE features (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  -- author VARCHAR(255),
  purpose VARCHAR(8000),
  user_story VARCHAR(8000),
  acceptance_criteria VARCHAR(8000),
  business_value VARCHAR(255),
  wireframes VARCHAR(255),
  attachments VARCHAR(255),
  -- votes INTEGER,
  date_last_updated DATE,
  product_name VARCHAR(255),
  FOREIGN KEY (product_name) REFERENCES products(name),
  user_email VARCHAR(255),
  FOREIGN KEY (user_email) REFERENCES users(email)
);

DROP TABLE IF EXISTS activities CASCADE;

CREATE TABLE activities (
  id BIGSERIAL PRIMARY KEY,
  type VARCHAR(255),
  feature_id INTEGER,
  FOREIGN KEY (feature_id) REFERENCES features(id),
  user_email VARCHAR(255),
  FOREIGN KEY (user_email) REFERENCES users(email)
)

-- DROP TABLE IF EXISTS votes;

-- CREATE TABLE votes (
--   id BIGSERIAL PRIMARY KEY,
--   feature_id INTEGER,
--   FOREIGN KEY (feature_id) REFERENCES features(id),
--   user_email VARCHAR(255),
--   FOREIGN KEY (user_email) REFERENCES users(email)
-- );

-- DROP TABLE IF EXISTS follows;

-- CREATE TABLE follows (
--   id BIGSERIAL PRIMARY KEY,
--   feature_id INTEGER,
--   FOREIGN KEY(feature_id) REFERENCES features(id),
--   user_email VARCHAR(255),
--   FOREIGN KEY (user_email) REFERENCES users(email)
-- );
