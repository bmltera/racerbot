import internal from "stream";

export class Car {
    name: string;
    hp: number;
    stage:number;
    condition: number;

    constructor(name: string, horsepower: number){
        this.name = name;
        this.hp = horsepower;
        this.condition = 100;
        this.stage = 0;
    }

    upgrade(){
        this.stage++;
        this.hp *= 1.12;
    }

    wear(){
        this.condition -= this.stage;
    }

}

// export class car350z extends Car{
//     constructor(){
//         super("Nissan 350z", 276)
//     }

// export class car350z extends Car{
//     constructor(){
//         super("Nissan 350z", 276)
//     }
// }

