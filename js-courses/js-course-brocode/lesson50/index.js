// this = reference to a particular object
//        the object depends on the immediate context

const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}

car.drive();