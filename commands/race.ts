import { SystemChannelFlags } from "discord.js";
import { setRacer, racer, playerMap} from "../index"

(module).exports = {
    name: 'race',
    description: "races 2 cars",
    
    execute(message :any , args:any){
        var id = message!.member!.id!;
        
        if(playerMap.get(id) == null || playerMap.get(id).getCurrentCar == null){
            message.channel.send("You need a car to race first! (r rollcar)")
        }
        else if(racer == undefined){
            let player = playerMap.get(id)
            setRacer(player);
            //racer = player;
            message.channel.send(player.username + "  is looking to race. Challenge them with 'r race'");
        }
        else if(racer.id == id){
            message.channel.send("Cannot race alone");
        }
        else{ // race condition
            let decimalPlaces = 3;
            let p1 = racer;
            let p2 = playerMap.get(id);
            let car1 = p1.getCurrentCar();
            let car2 = p2.getCurrentCar();

            let p1react: number = Math.round(50 + Math.random() * 400)/1000;
            let p2react: number = Math.round(50 + Math.random() * 400)/1000;
            let p1time : number = Math.round(6.29 * Math.pow(3000/car1.getPower(), 1/3) * 1000)/ 1000;
            let p2time : number = Math.round(6.29 * Math.pow(3000/car2.getPower(), 1/3) * 1000)/ 1000;
            let p1totaltime = p1react + p1time;
            let p2totaltime = p2react + p2time;

            let winString = "Winner: " + ((p1totaltime < p2totaltime) ? p1.getUsername():p2.getUsername()) + 
                            "\n " + p1.getUsername() + " time: " + p1totaltime.toFixed(3) + "s, reaction: " + (p1react*1000).toFixed(0) + "ms" + 
                            "\n " + p2.getUsername() + " time: " + p2totaltime.toFixed(3) + "s, reaction: " + (p2react*1000).toFixed(0) + "ms";
            message.channel.send(winString);
            setRacer(undefined);
        }
    }
}