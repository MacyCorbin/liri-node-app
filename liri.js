// Navigate to the root of your project and run `npm init -y` &mdash; this will initialize a `package.json` file for your project. 
// The `package.json` file is required for installing third party npm packages and saving their version numbers.
// If you fail to initialize a `package.json` file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.

// liri.js can take the following commands:
// 1.  `concert-this`
// 2.  `spotify-this-song`
// 3.  `movie-this`
// 4.  `do-what-it-says`



require("dotenv").config();

//imports the keys.js file and store it in a variable
var keys = require("./keys.js");

//---FIND SONG---//
//access spotify key information
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


//---FIND BAND AND FIND MOVIE---//
// Include the axios npm package
// remember to "npm install axios"
var axios = require("axios");

// Core node package for reading and writing files
var fs = require("fs")

// Date and times
var moment = require("moment")

var action = process.argv[2];
var searchTopic = process.argv[3]
