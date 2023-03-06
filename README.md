# Random Restaurant Generator

To run the application, you will need to run the Restaurant Generator backend 
### Frontend
**To run the website**
1. Clone client folder 
2. Run npm install
3. npm start

By default, the application will be available at http://localhost:3000.


### Backend

**Installation**
1. Clone the server folder 
2. Install dependencies by running 'npm install'
3. Start the server by running 'node server.js'

The backend provides RESTful APIs for the Random Restaurant Generator frontend. It connects to a MongoDB database and provides APIs for submiting and retrieving random restaurant from the list of submitted restaurants.

**API Endpoints**

The following endpoints are available:

GET /api/restaurants/:team - Retrieves a list of all restaurants for a particular team

GET /api/restaurants/:team/random - Retrieves a random restaurant from the list of restaurants for the team

POST /api/restaurants - Submits a new restaurant for the particular team

DELETE /api/restaurants/:team/reset - Resets the list of restaurants for the inputted team




### Technologies

React

Nodes.js

Express

MongoDB
