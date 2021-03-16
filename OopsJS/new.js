let p = new Promise((resolve, reject) => {

let a = 1+1
if(a == 2){
    resolve()
} else {
    reject()
}

})

p.then(() => {
    console.log("executed")
} ).catch(() => {
    console.log(error)
}) 


let p1 = new Promise((resolve, reject) => {
    resolve("Hey p1")
})

let p2 = new Promise((resolve, reject) => {
    resolve("Hey P2")
})

Promise.all([p1,p2]).then((messages) => {
    console.log(messages);
})

Promise.race([p2,p1]).then((messages) => {
    console.log(messages)
})