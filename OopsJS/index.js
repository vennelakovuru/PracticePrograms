// function Circle(radius){
//     let radius = radius;
//     this.location = {x: 0, y:1};
//     this.draw = function(){
//         console.log("Draw");
//     }
// }

// const CircleObj = new Circle(2);

// CircleObj.location = 4;
// console.log(CircleObj);

var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    console.log(this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName)
  }
}
        
var person1 = {name:  "Vivek"};
        
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
bikeDetails.displayDetails.call(person1, "TS0122", "Bullet");
        
// Binds the displayDetails function to the person1 object
        
        
detailsOfPerson1() ;


var obj1 = function(a,b){
    return a+b;
}

var obj2 =(a,b) => a+b

console.log(obj1(1,2));

console.log((obj2(4,5)));


var obj3 = function(a){
    return a;
}

var obj4 = a => a

console.log(obj3(1));

console.log((obj4(4)));



var p = "pramod"
var sub = "amo"
substr =[];

let findSubstrings = (str) => {
    for( var i=0; i<p.length; i++){
        for(var j=i+1; j<p.length; j++){
            substr.push(str.substring(i,j))
        }
    }
}


var count = 0;
let countSub = (sub, substr) => {
    substr.forEach(element => {
        if(element == sub){
            count++;
        }
    });
}

findSubstrings(p);
countSub(sub, substr);
console.log(substr);
console.log(count);

let car = () => {
    this.color = "red";
}

car.prototype.printer = () => {
    console.log(this.color);
}

car.prototype.print1 = function() {
    console.log(this.color)
}

let smallcar = () => {
    this.model = "toyota";
}

let car1 = new car();
let smallcar1 = new smallcar();

console.log(car1.print())
console.log(car1.print1())

