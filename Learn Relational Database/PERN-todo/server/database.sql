CREATE DATABASE perntodo;

CREATE TABLE todo (
    -- todo_id BIGSERIAL NOT NULL PRIMARY KEY,
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
