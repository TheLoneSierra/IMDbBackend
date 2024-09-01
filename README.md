# IMDb Backend Project

This is the backend part of the IMDb project, built with Node.js, Express and MongoDB. It provides RESTful API services for managing user authentication, movies, genres and other functionalities required by the frontend.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Data Models](#data-models)
- [Middleware](#middleware)
- [DEPLOYMENT LINK](#deployment-link)
- [Contributing](#contributing)

## Technologies Used
- Node.js: JavaScript runtime environment for building server-side applications.
- Express.js: A minimal and flexible Node.js web application framework.
- MongoDB: A NoSQL database for storing data in a flexible, JSON-like format.
- Mongoose: A library for MongoDB and Node.js.
- Joi: Validation library for request validation.
- bcrypt: Library for hashing passwords securely.
- CORS: Middleware for handling Cross-Origin Resource Sharing.

## Features
- User Authentication: Registration and login with secure password hashing using bcrypt.
- Data Validation: Request validation using Joi for input data integrity.
- API Endpoints: Provides RESTful API endpoints for handling users, movies, genres and more.
- Data Management: Export and import data from JSON files to MongoDB.
- Models and Schemas: Defined Mongoose models and schemas for structured data representation.

## API Endpoints
Here are some of the key API endpoints:

- User Authentication
POST /auth/signup: Register a new user.
POST /auth/login: Login and obtain a token.

- API Management
GET /api/born-today: Get a list of celebrities born today.
GET /api/exploring: Get a list of movies and tv shows to explore.
GET /api/top-ten: Get top 10 on IMDb.
GET /api/popular-genres: Get popular genres.

## Data Models
- User Model (userModel.js): Schema for user registration and login, including fields for name, email and password.
- Celebrity Model (celebrityModel.js): Schema for storing celebrity data.
- Genre Model (genreModel.js): Schema for storing genre information.
- Exploring Model: Schema for exploring tv shows and movies information.
- Top Ten: Schema for displaying the top 10 on IMDB.

## Middleware
Validation Middleware (validation.js): Uses Joi to validate incoming requests.

## Deployment Link
- https://imdb-backend-two.vercel.app/

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.
  
