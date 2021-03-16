var s = "heeh"

console.log(s.split('').reverse().join(''));
if(s == s.split('').reverse().join('')){
    console.log("palin")
} else {
    console.log("no")
}

var a;
var b;


function sum(a,b){
    return a+b;
}
console.log(sum(2,3))

function sum1(x){
    return arguments[0] + arguments[1];
}

console.log(sum1(2,3))

function modifyarr(arr, hey){
    arr.push(100)
    hey()
}

var arr = [1,2,3,5]

modifyarr(arr, function(){
    console.log("yeah this is executed" + arr);
})

var string = "Welcome to this Javascript Guide!";

console.log(string.split(" ").reverse().join(" "))


let obj = {
    a: 1,
    b: "hello",
    c: function(){
        console.log("heyhey")
    }
}

let obj1 = [1,2,3]
console.log("hellaaa" + typeof(obj1))

console.log(obj1.keys)


console.log()