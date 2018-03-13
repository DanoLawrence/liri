require("dotenv").config();


var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');
var keys = require('./keys.js');
var twitterKeys = keys.twitterKeys;

//* Not confident in how to go about this assignment, will review the past lessons 


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);