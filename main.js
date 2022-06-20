//This will be used to execute shell commands on the system
const { exec } = require("child_process");
//This is the library that allows node to read and write to other files
const fs = require("fs")
//Defining Functions
//This is an async function will prevent the lines below the called function being executed before/during the function
//This can prevent errors as this function installs libraries and the lines beneath needs those libraries 
async function checkSetup(){
    var output = ""
    if (fs.existsSync("./node_modules")){

    }
    //If the folder node_modules does not exist, that means no libraries are installed
    else{
        output = "discord.js@v12 axios opusscript"
    }
    await exec(`npm install ${output}`);

}
//Checking to see if this bot's setup files have been created
che1ckSetup()
//Importing Libraries
//This is the library that communicates with the Discord API
const discord = require("Discord.js")

//This is the library which we will use to make web requests to send/recieve information 
const axios = require("axios")



