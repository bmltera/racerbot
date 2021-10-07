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

    setCurrenCar(car:Car){
        this.currentCar = car;
    }
}