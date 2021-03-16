
// var title= document.getElementById('text').innerHTML;

// console.log(title);

// console.log(title1);


var j = 1;

if( function f() {}){
    j = j+ typeof f;
}

console.log(j);

function greet(message){
    return message;
}

function greeter(name){
    return "hey hi" + name ;
}

console.log(greet(greeter("Vennu")));


function greeter1(name){
    var message = " hey hi" + name;
    return function greet1(){
        console.log(message)
    }
}

var hellagreet = greeter1("Helllaa");
hellagreet()

const hey = () => {
    console.log("hey function");
}

hey()