import {playerMap} from "../index"

(module).exports = {
    name: 'race',
    description: "races 2 cars",
    
    execute(message :any , args:any){
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
}