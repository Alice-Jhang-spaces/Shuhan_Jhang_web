const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Import routes

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
//'mongodb://127.0.0.1:27017' specifies that MongoDB is running on localhost (127.0.0.1) on port 27017.
//user_management is the name of the database you are connecting to. MongoDB.
mongoose.connect('mongodb://127.0.0.1:27017/user_management', { useNewUrlParser: true, useUnifiedTopology: true })
   
//Logs a success message if the connection is successful.    
    .then(() => console.log("Connected to MongoDB"))

//Logs an error if the connection fails.
    .catch((error) => console.error("Could not connect to MongoDB:", error));

// Root route
//visits the root URL, it sends a response with the message "Welcome(get  GET requests to the root URL "/")
app.get('/', (req, res) => {
    res.send("Welcome to the User Management API");
});

// Use user routes
//Tells Express to use the routes defined in userRoutes.js for any route that begins with /user.
app.use('/user', userRoutes); // Mount routes

// Start server
const PORT = 3000;//Defines the port number as 3000.
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
    //Outputs a message to the console to confirm the server is running and listening on the specified port.
});
