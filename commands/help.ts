(module).exports = {
    name: 'help',
    description: "this is a help commmand",

    execute(message :any , args:any){
        message.channel.send("This is the list of help options");
    }
}