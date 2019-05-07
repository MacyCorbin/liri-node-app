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
var actionTopic =  process.argv.slice(3).join(" ");

var divider = "\n🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹 🔹\n";


    switch(action){

        case 'concert-this': //Terminal input: node liri.js concert-this "insert artist"
        bandsInTown(actionTopic);
        break;

        case 'spotify-this-song': //Terminal input: node liri.js spotify-this-song "song name and/or artist"
        spotifySong(actionTopic);
        break;

        case 'movie-this': //Terminal input: node liri.js movie-this "movie title"
        movieData(actionTopic);
        break;

        case 'do-what-it-says': //Terminal input: node liri.js do-what-it-says
        randomText();
        break;

        default:
        console.log("Input was invalid, please re-enter.")
    }


function bandsInTown(actionTopic){

    axios.get("https://rest.bandsintown.com/artists/"
    + actionTopic
    + "/events?app_id=codingbootcamp")
    .then(function(response) {
        for (var i = 0; i< response.data.length; i++){

            var bandResults = 
            divider
            + "\nVenue Name: " + response.data[i].venue.name
            + "\nVenue Location: " + response.data[i].venue.city
            + "\nEvent date: " + moment(response.data[i].datetime).format('LL');
            console.log(bandResults);
        }})
        .catch(function (error) {
            console.log(error);
        });
    
}

function spotifySong(actionTopic){
    if(!actionTopic){
        actionTopic = "The Sign Ace of Base";
    }
    spotify
    .search({ type: 'track', query: actionTopic })
    .then(function(response) {
        for (var i = 0; i < 5; i++) {
            var spotifyResults = 
                divider
                + "\nArtist(s): " + response.tracks.items[i].artists[0].name
                + "\nSong Title: " + response.tracks.items[i].name
                + "\nAlbum Title: " + response.tracks.items[i].album.name
                + "\nPreview Link: " + response.tracks.items[i].preview_url;
                    
            console.log(spotifyResults);
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}
    




// function movieData(){}

// function do-what-it-says(){}







