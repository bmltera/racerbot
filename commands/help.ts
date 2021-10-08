import {prefix} from "../index";

(module).exports = {
    name: 'help',
    description: "this is a help commmand",

    execute(message :any , args:any){
        let helpList = require('../json_data/help.json');
        let helpString = "List of commands: \n";
        for(const command of helpList.commands){
            helpString += prefix + command.name + " - " + command.description + "\n";
        }
        message.channel.send(helpString);
    }
}