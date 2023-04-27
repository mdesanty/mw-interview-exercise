DROP DATABASE IF EXISTS jobs_db;
CREATE DATABASE jobs_db;

\c jobs_db

DROP TABLE IF EXISTS jobs;
CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  salary_amount NUMERIC(10, 2),
  salary_rate VARCHAR(255) -- The salary_rate field can have the following values: 'per hour', 'per week', 'per year'
);