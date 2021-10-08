import {playerMap,carList} from "../index"
import {Car} from "../classes/car"
import {Player} from "../classes/user"

(module).exports = {
    name: 'rollcar',
    description: "rolls car",
    
    execute(message :any , args:any){
        var id = message!.member!.id!;
        let user;
        if(playerMap.get(id) == null){
            message.reply("welcome new player");
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
}