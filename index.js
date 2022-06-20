//This will be used to execute shell commands on the system
const { exec } = require("child_process");
//This is the library that allows node to read and write to other files
const fs = require("fs")
//Defining Functions
//This is an async function will prevent the lines below the called function being executed before/during the function
//This can prevent errors as this function installs libraries and the lines beneath needs those libraries 
async function checkSetup(){
    var discordLib = "discord.js"
    var discordLibVer = "12"
    var apiLib = "axios"
    var discordVoiceLib
    var installOutput = ""
    if (fs.existsSync("./node_modules")){
        //Checking if discord.js is installed with the right version
        if(fs.existsSync(`./node_modules/${discordLib}`)){
              var discordPackageFile = fs.readFileSync("./node_modules/discord.js/package.json")
              discordPackageFile = JSON.parse(discordPackageFile)
              if(discordPackageFile.version.includes("12") == false){
                console.log(`Wrong version of ${discordLib} is installed, reinstalling correct version`)
                await exec("npm uninstall discord.js")
                installOutput.concat(` ${discordLib}@${discordLibVer}`)
              }
        }
        else{
            console.log(`${discordLib} is not installed, Instaling...`)
            installOutput.concat(` ${discordLib}@${discordLibVer}`)
        }
        if(!fs.existsSync(`./node_modules/${discordVoiceLib}`)){
            console.log(`${discordVoiceLib} is not installed, Instaling...`)
            installOutput.concat(` ${discordVoiceLib}`)
        }
        if(!fs.existsSync(`./node_modules/${apiLib}`)){
            console.log(`${apiLib} is not installed, Instaling...`)
            installOutput.concat(` ${apiLib}`)
        }
    }
    //If the folder node_modules does not exist, that means no libraries are installed
    else{
        installOutput = "discord.js@v12 axios opusscript"
    }
    console.log(installOutput)
    await exec(`npm install${installOutput}`);

}
//Checking to see if this bot's setup files have been created
checkSetup()
//Importing Libraries
//This is the library that communicates with the Discord API
const discord = require("Discord.js")

//This is the library which we will use to make web requests to send/recieve information 
const axios = require("axios")



