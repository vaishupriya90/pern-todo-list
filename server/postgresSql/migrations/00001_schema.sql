SET search_path TO todo_app_schema;

-- DROP TABLE IF EXISTS todos;

CREATE TABLE IF NOT EXISTS todos (
  id serial PRIMARY KEY,
  user_email VARCHAR(255),
  title VARCHAR(255),
  progress INT,
  date VARCHAR(255),
);

CREATE TABLE IF NOT EXISTS users (
  user_email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);
