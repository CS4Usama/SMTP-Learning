CREATE DATABASE mitproject;

-- \c mitproject;

-- CREATE TABLE users (
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(email)
);


INSERT INTO users (name, email, password) VALUES ('Abdullah', 'abdullah@gmail.com', 'abdullah123');

SELECT * FROM users;
