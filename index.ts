import DiscordJS, {Intents, User} from 'discord.js'
import dotenv from 'dotenv'
import {Car} from "./classes/car"
import {Player} from "./classes/user"
dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

let playerMap = new Map();
let carList = require('./jsonData/carlist.json');
let help = require('./jsonData/help.json');
const prefix = 'r';
client.on('ready', () => {
    console.log('Logged in as ' + client!.user!.tag!)
    client.user!.setActivity("'r help'", {type: 'LISTENING'})
})

client.on("messageCreate", (message) => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift()!.toLowerCase();
    console.log(command);
    console.log(args);
    if(command === "help"){

    }

    else if(command === "rollcar"){
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
        let car = new Car(carName, carHP);
        user.setCurrentCar(car);
    }

    else if(message.content === "r stats"){
        var id = message!.member!.id!;
        if(playerMap.get(id) == null || playerMap.get(id).getCurrentCar == null){
            message.channel.send("User does not have a car")
        }
        else{
            let user = playerMap.get(id);
            let car = user.getCurrentCar();
            let statString = "Your Stats" + 
                "\nCar: " + car.getName() + 
                "\nPower: " + car.getPower() + "hp" +
                "\nTuning Stage: " + car.getStage() +
                "\nWear Condition: " + car.getCondition() + "%"

            message.channel.send(statString)
        }
    }

    else if (message.content === "r race"){

    }
})

// Load commands
//client.loadCommands(client.config.paths.commands);
// Load events
//client.loadEvents(client.config.paths.events);

client.login(process.env.TOKEN)     