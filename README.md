# React Blog

The React Blog App is a MERN stack applicaton which uses React and React hooks on Client side and Node / Express on server side. The web application allow users to register their info (email,username,password) into database and to login and authenticate using that data stored in the database (MongoDb). The site uses REST api to allow Authenticated users to Create new blog, Update and Delete their particular blog and Read blog from other Users.

## Getting Started

To run the site on you local machine

-   Fork or Clone this repository in your local machine
-   Cd into the both server and client(inside server) directories and run `npm install` to download all the required packages
-   Create a `.env` file in the server directory and store the following:
    -   MONGO_URL=Insert the correct connection URL for your MongoDB database (You can get this URL in connect after creating a cluster on MongoDB Atlas)
-   Open two terminal
-   In 1st Terminal inside server directory run `npm start` (To start the Server)
-   In 2nd Terminal Cd inside Client directory run `npm start` (To start the Client)

## Info

-   The React Blog App is a MERN stack applicaton which uses React and React hooks on Client side and Node / Express on server side.
-   The site is Bootstraped using create-react-app.
-   MongoDB is used in backend to store Data.
-   The site uses REST api to create,update and delete users and blog post.
-   In order to write a new blog post, the user has to register and login.

## Potential Improvements

-   A UX refactor.
-   Dashboard implementation for all registered users.
-   A system to 'like' or upvote potentially useful post.

## Technologies Used

Some of the technologies used in the development of this web application are as follow:

-   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): It provides a free cloud service to store MongoDB collections.
-   [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [Node.js](https://nodejs.org/en/): A runtime environment to help build fast server applications using JS.
-   [Express.js](https://expressjs.com/): A popular Node.js framework to build scalable server-side for web applications.
-   [Mongoose](https://mongoosejs.com/): An ODM(Object Data Modelling)library for MongoDB and Node.js