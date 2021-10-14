import DiscordJS, {Intents, User} from 'discord.js'
import dotenv from 'dotenv'
import {Car} from "./classes/car"
import {Player} from "./classes/user"

dotenv.config();

export const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
const mongoose = require("mongoose");
let playerMap = new Map();
let carList = require('./json_data/carlist.json');
let help = require('./json_data/help.json');
const Discord = require('discord.js')
const token = process.env.TOKEN;
const prefix = 'r ';
const fs = require('fs');

// setup commands
export let racer : Player;
export let commands = new Map();
const commandFiles = fs.readdirSync('./commands/');
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    commands.set(command.name, command);
}

// startup process
client.on('ready', () => {
    console.log('Logged in as ' + client!.user!.tag!)
    client.user!.setActivity("'r help'", {type: 'LISTENING'})

    mongoose
        .connect(process.env.MONGODB_SRV, {
        useNewUrlParser: true,
        useUnifiedTopology: true        })
        .then(()=>{
            console.log("Connected to the database");
        })
        .catch((err: any) =>{
            console.log(err);
        })
})

// condition
client.on("messageCreate", (message) => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.split(/ +/);
    const command = args[1]!.toLowerCase();

    if(command === "help"){
        commands.get('help').execute(message, args);
    }
    else if(command === "rollcar"){
        commands.get('rollcar').execute(message, args);
    }
    else if(command === "stats"){
        commands.get('stats').execute(message, args);
    }
    else if (command === "upgrade"){
        commands.get('upgrade').execute(message, args);
    }
    else if (command === "race"){
        commands.get('race').execute(message, args);
    }
})

// set current racing challenger
export function setRacer(player:any){
    racer = player;
}

client.login(token)     

export{prefix, playerMap, carList};