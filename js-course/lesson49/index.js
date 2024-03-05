// object = A group of properties and methods
//          properties = what an object has
//          methods = what an object can do
//          use . to access properties/methods

const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}

console.log(`Car model: ${car.model}\nColor: ${car.color}\nYear: ${car.year}`);

car.drive();
car.brake();