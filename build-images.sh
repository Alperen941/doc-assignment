#!/bin/bash

set -e

# ------------------------------------------
# OPTIONAL: Start PostgreSQL container manually
# Uncomment the line below if you want to run PostgreSQL as container
# docker run --name postgres-db -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=mydatabase -p 5433:5432 -d postgres
# ------------------------------------------

# --- JAVA BACKEND ---
echo "Building Java backend JAR..."
cd java-backend
./mvnw clean package

echo "🐳 Building Docker image for Java backend..."
docker build -t alperen941/java-backend .

cd ..

# --- REACT FRONTEND ---
echo "Building Vite frontend..."
cd my-react-app
npm install
npm run build

echo "Building Docker image for Vite frontend..."
docker build -t alperen941/my-react-app .

cd ..

echo "All images built successfully:"
docker images | grep -E 'java-backend|vite-frontend'


//