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

var input = process.argv;
var action = input[2];

var name = "";

for (var i =3; i< input.length; i++){
    if (i> 3 && i < input[i]){
        name = name + "+" + input[i];
    }else{
        name += input[i];
    }
}

function switchCase(){

    switch(action){

        case 'concert-this':
        bandsInTown(name);
        break;

        case 'spotify-this-song':
        spotifySong(name);
        break;

        case 'movie-this':
        movieData(name);
        break;

        case 'do-what-it-says':
        randomText();
        break;

        default:
        console.log("Input was invalid, please re-enter.")
    }
}

// function bandsInTown(){}

// function spotifySong(){}

// function movieData(){}

// function randomText(){}



