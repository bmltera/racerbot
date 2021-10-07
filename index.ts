import DiscordJS, {Intents, User} from 'discord.js'
import dotenv from 'dotenv'
import {Car} from "./car"
import {Player} from "./user"
dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

//let carlist = ["Nissan 350z", "Mazda RX-7", "Subaru WRX", "Subaru WRX STi", "Toyota 86", "Toyota Supra MKV 3.0"]
let playerMap = new Map();
let carList = require('./carlist.json');

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!')
})

client.on("messageCreate", (message) => {
    if (message.content === "whoami"){
        message.reply(message!.member!.id!);
    }

    else if(message.content === "r rollcar"){
        var id = message!.member!.id!;
        let user;
        if(playerMap.get(id) == null){
            message.reply("welcome first player");
            user = new Player(id);
            playerMap.set(id, user);
        }
        user = playerMap.get(id);
        let carNum = Math.floor(Math.random() * carList.cars.length);
        let carName = carList.cars[carNum].name;
        let carHP = carList.cars[carNum].hp
        //message.reply("You rolled a " + carName);
        message.channel.send("You rolled a " + carName)
    }
})

// Load commands
//client.loadCommands(client.config.paths.commands);
// Load events
//client.loadEvents(client.config.paths.events);

client.login(process.env.TOKEN)     