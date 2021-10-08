import {playerMap} from "../index"

(module).exports = {
    name: 'upgrade',
    description: "upgrades user's current car",
    
    execute(message :any , args:any){
        var id = message!.member!.id!;
        if(playerMap.get(id) == null || playerMap.get(id).getCurrentCar == null){
            message.channel.send("You do not have a car to upgrade")
        }
        else{
            let user = playerMap.get(id);
            let car = user.getCurrentCar();
            if(car.stage === 5){
                message.channel.send("Car is already fully upgraded");
            }
            else{
                car.upgrade();
                message.channel.send(car.getName() + " successfully upgraded to stage " + car.getStage());
            }
        }
    }
}