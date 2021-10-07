import { Car } from "./car"

export class Player {
    name: string;
    cars: Car[];
    currentCar: Car;

    constructor(name: string){
        this.name = name;
        this.cars = [];
        this.currentCar = new Car("null", 0);
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
}