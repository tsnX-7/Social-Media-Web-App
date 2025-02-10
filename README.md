# Social-Media-Web-App

## Overview

The Social Media Web App is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. This project replicates core features of Twitter, including user authentication, posting tweets, following users, and liking posts. It also integrates with Cloudinary for image uploads and uses React Query for efficient data fetching and state management.

## Features

- **User Authentication**: Sign up, log in, and log out functionalities with JWT-based authentication.
- **User Profiles**: View and edit user profiles, including profile pictures.
- **Posting Tweets**: Create, edit, and delete tweets with text and image support.
- **Following Users**: Follow and unfollow other users to see their tweets in your feed.
- **Liking Posts**: Like and unlike tweets.
- **Notifications**: Receive notifications for likes and follows.
- **Responsive Design**: Mobile-friendly design using Tailwind CSS and DaisyUI.
- **Real-time Updates**: Real-time updates using React Query for efficient data fetching and caching.

## Technologies Used

- **Frontend**:

  - React
  - React Router DOM
  - React Query
  - Tailwind CSS
  - DaisyUI
  - Vite

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT (JSON Web Tokens)
  - Cloudinary (for image uploads)
  - Nodemon (for development)

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Cloudinary account (for image uploads)

### Clone the Repository

```sh
git clone https://github.com/your-username/twitter-clone.git
cd twitter-clone
```

### Setup

1. Install all frontend and backend dependencies:

   ```sh
   npm run build
   ```

2. Start both servers after step 3:

   ```sh
   npm run start
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   NODE_ENV=development
   PORT=5000
   ```

## Project Structure

### Backend

- **Controllers**: Contains the logic for handling requests and responses.
- **Models**: Defines the MongoDB schemas and models.
- **Routes**: Defines the API endpoints and routes.
- **Middleware**: Contains middleware functions for authentication and other purposes.
- **Utils**: Utility functions and helpers.

### Frontend

- **Components**: Reusable React components.
- **Pages**: React components representing different pages of the application.
- **Hooks**: Custom React hooks for data fetching and state management.
- **Styles**: CSS and Tailwind CSS styles.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
