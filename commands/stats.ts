import {playerMap} from "../index"

(module).exports = {
    name: 'stats',
    description: "returns stats of current car",
    execute(message :any , args:any){
        let isUsers = true;
        if(args.length === 2){
            var id = message!.member!.id!;
        }
        else if(args.length > 2 && args[2]!.length > 10){
            isUsers = false;
            id = args[2]!.substring(2,args[2].length-2);
        }

        console.log(id);
        console.log(args);
        if(playerMap.get(id) == null || playerMap.get(id).getCurrentCar == null){
            message.channel.send(((isUsers) ? "You do":"User does") + " not have a car selected")
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