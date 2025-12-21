-- Create separate schemas for each microservice
CREATE SCHEMA IF NOT EXISTS auth;
CREATE SCHEMA IF NOT EXISTS schools;
CREATE SCHEMA IF NOT EXISTS users;
CREATE SCHEMA IF NOT EXISTS academic;
CREATE SCHEMA IF NOT EXISTS attendance;
CREATE SCHEMA IF NOT EXISTS communication;
CREATE SCHEMA IF NOT EXISTS events;
CREATE SCHEMA IF NOT EXISTS finance;
CREATE SCHEMA IF NOT EXISTS resources;
CREATE SCHEMA IF NOT EXISTS applications;
CREATE SCHEMA IF NOT EXISTS support;
CREATE SCHEMA IF NOT EXISTS platform;

-- Grant permissions
GRANT ALL PRIVILEGES ON SCHEMA auth TO school_user;
GRANT ALL PRIVILEGES ON SCHEMA schools TO school_user;
GRANT ALL PRIVILEGES ON SCHEMA users TO school_user;
GRANT ALL PRIVILEGES ON SCHEMA academic TO school_user;
GRANT ALL PRIVILEGES ON SCHEMA attendance TO school_user;
GRANT ALL PRIVILEGES ON SCHEMA communication TO school_user;
GRANT ALL PRIVILEGES ON SCHEMA events TO school_user;
GRANT ALL PRIVILEGES ON SCHEMA finance TO school_user;
GRANT ALL PRIVILEGES ON SCHEMA resources TO school_user;
GRANT ALL PRIVILEGES ON SCHEMA applications TO school_user;
GRANT ALL PRIVILEGES ON SCHEMA support TO school_user;
GRANT ALL PRIVILEGES ON SCHEMA platform TO school_user;

-- Grant usage on schemas
GRANT USAGE ON SCHEMA auth TO school_user;
GRANT USAGE ON SCHEMA schools TO school_user;
GRANT USAGE ON SCHEMA users TO school_user;
GRANT USAGE ON SCHEMA academic TO school_user;
GRANT USAGE ON SCHEMA attendance TO school_user;
GRANT USAGE ON SCHEMA communication TO school_user;
GRANT USAGE ON SCHEMA events TO school_user;
GRANT USAGE ON SCHEMA finance TO school_user;
GRANT USAGE ON SCHEMA resources TO school_user;
GRANT USAGE ON SCHEMA applications TO school_user;
GRANT USAGE ON SCHEMA support TO school_user;
GRANT USAGE ON SCHEMA platform TO school_user;

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
