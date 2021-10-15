import {playerMap,carList} from "../index"
import {Car} from "../classes/car"
import {Player} from "../classes/user"
import { Message } from "discord.js";

/* testing database start */
const profileModel = require('../models/profileSchema');


/* testing database end */

(module).exports = {
    name: 'rollcar',
    description: "rolls car",

    async execute(message :any , args:any){
        /* testing database start */
        let profileData
        try {
            profileData = await profileModel.findOne({ userID: message.member.id})
            if(!profileData){
                let profile = await profileModel.create({
                    userID: message.author.id,
                    serverID: message.guild.id,
                    money: 1000,
                });
                profile.save();
            }
        } catch(err){
            console.log(err);
        }
        /* testing database end */

        var id = message!.member!.id!;
        let user;

        // new player creation
        if(playerMap.get(id) == null){
            message.reply("welcome new player");
            user = new Player(id);
            playerMap.set(id, user);
        }
        
        user = playerMap.get(id);
        let carNum = Math.floor(Math.random() * carList.cars.length);
        let carName = carList.cars[carNum].name;
        let carHP = carList.cars[carNum].hp
        message.channel.send("You rolled a " + carName)
        let car = new Car(carName, carHP);
        user.setCurrentCar(car);
    }
}