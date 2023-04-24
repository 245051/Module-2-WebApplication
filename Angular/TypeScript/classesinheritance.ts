class Vehicle{
    name:string;
    constructor(name:string){
        this.name=name;
        
    }
    getName():string{
        return this.name;
    }
}
    class car extends Vehicle{
        model:string;
        constructor(model:string,name:string){
            super(name);
            this.model=model;
        }
        getNameModel():string{
            return this.model+this.name;
        }
    }

    class Truck extends Vehicle{
        constructor(name:string){
            super(name);
        }
    }
    var mycar=new car("Sports Model","BMW");
    console.log(mycar.getNameModel);
    var truck =new Truck("tata Truck");
    console.log(truck.getName());
