//This will be used to execute shell commands on the system
var Promise = require('bluebird');
var exec = require('child_process').execFile;
//const { exec } = require("child_process");
//This is the library that allows node to read and write to other files
const fs = require("fs")
//Defining Functions
//This is an async function will prevent the lines below the called function being executed before/during the function
//This can prevent errors as this function installs libraries and the lines beneath needs those libraries 
async function checkSetup(){
    await exec(`npm install`);
}
//Checking to see if this bot's setup files have been created
checkSetup()
//Importing Libraries
//This is the library that communicates with the Discord API
const discord = require("discord.js")

//This is the library which we will use to make web requests to send/recieve information 
const axios = require("axios")



