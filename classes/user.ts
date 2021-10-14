import { Car } from "./car"
import { client } from "../index"

export class Player {
    id: string;
    username: string;
    cars: Car[];
    currentCar: Car;

    constructor(id: string){
        this.id = id;
        this.cars = [];
        this.currentCar = new Car("null", 0);
        this.username = this.findUsername();
    }

    addCar(car:Car){
        if(this.cars.length == 0){
            this.setCurrentCar(car);
        }
        this.cars.push(car);
    }

    deleteCar(position: number){
        if(position > -1){
            this.cars.splice(position,1);
        }
    }

    returnCars(){
        return this.cars;
    }

    setMainCar(position:number){
        if(position > -1 && position < this.cars.length){
            this.currentCar = this.cars[position];
        }
    }

    setCurrentCar(car:Car){
        this.currentCar = car;
    }

    getCurrentCar(): Car{
        return this.currentCar;
    }

    findUsername(){
        return client!.users!.cache!.get(this.id)!.username!;
    }

    getUsername(){
        return this.username;
    }

}