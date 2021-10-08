import {playerMap} from "../index"

(module).exports = {
    name: 'stats',
    description: "returns stats of current car",
    
    execute(message :any , args:any){
        var id = message!.member!.id!;
        console.log(id);

        console.log(args);
        if(playerMap.get(id) == null || playerMap.get(id).getCurrentCar == null){
            message.channel.send("You do not have a car selected")
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
}