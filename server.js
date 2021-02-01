// requiring depencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//PORT
const PORT = process.env.PORT || 3000;

//Defining app as express
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connecting with MongoDB via mongoose using the application database running locally on default port 27017
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


//require(apiRoute)(app);
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}!`);
});