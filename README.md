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
  - `auth.controller.js`: Handles user authentication (login, signup, logout).
  - `post.controller.js`: Manages post-related operations (create, delete, like, unlike).
  - `user.controller.js`: Manages user-related operations (profile, follow, unfollow).
  - `notification.controller.js`: Handles notifications (fetch, mark as read).
  - `comment.controller.js`: Manages comment-related operations (add, delete).

- **Models**: Defines the MongoDB schemas and models.
  - `user.model.js`: Defines the user schema.
  - `post.model.js`: Defines the post schema.
  - `notification.model.js`: Defines the notification schema.

- **Routes**: Defines the API endpoints and routes.
  - `auth.route.js`: Routes for authentication.
  - `post.route.js`: Routes for posts.
  - `user.route.js`: Routes for user operations.
  - `notification.route.js`: Routes for notifications.

- **Middleware**: Contains middleware functions for authentication and other purposes.
  - `auth.middleware.js`: Middleware for verifying JWT tokens.
  - `error.middleware.js`: Middleware for handling errors.

- **Utils**: Utility functions and helpers.
  - `generateToken.js`: Utility for generating JWT tokens.
  - `cloudinary.js`: Utility for handling Cloudinary operations.
  - `email.js`: Utility for sending emails.

### Frontend

- **Components**: Reusable React components.
  - `Post.jsx`: Component for displaying a post.
  - `Sidebar.jsx`: Component for the sidebar navigation.
  - `Navbar.jsx`: Component for the top navigation bar.
  - `ProfileCard.jsx`: Component for displaying user profile information.
  - `NotificationList.jsx`: Component for displaying notifications.
  - `Comment.jsx`: Component for displaying a comment.
  - `FollowButton.jsx`: Component for follow/unfollow functionality.
  - `LikeButton.jsx`: Component for like/unlike functionality.
  - `PostForm.jsx`: Component for creating a new post.
  - `UserList.jsx`: Component for displaying a list of users.

- **Pages**: React components representing different pages of the application.
  - `HomePage.jsx`: Home page component.
  - `ProfilePage.jsx`: Profile page component.
  - `LoginPage.jsx`: Login page component.
  - `SignupPage.jsx`: Signup page component.
  - `NotificationsPage.jsx`: Notifications page component.

- **Hooks**: Custom React hooks for data fetching and state management.
  - `useAuth.js`: Hook for authentication.
  - `useFollow.js`: Hook for following users.
  - `usePosts.js`: Hook for fetching posts.

- **Styles**: CSS and Tailwind CSS styles.
  - `index.css`: Global styles.
  - `tailwind.css`: Tailwind CSS configuration.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
