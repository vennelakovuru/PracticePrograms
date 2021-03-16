
// removing duplicates filter

hello = 1

var excapecode = escape("This%20string%20is%20encoded%21");

var unescaped = unescape(excapecode);

console.log(excapecode);
console.log(unescaped)
console.log(unescape(unescaped))
console.log(escape(unescape(unescaped)))

var arr = new Array(1,2,3,3,3,4,4,5,6,6)


let uni_items = [...new Set(arr)]
console.log(uni_items)

let uni_arr = arr.filter(function(value, index,self){
    console.log(hello)
    return self.indexOf(value) === index;
});

console.log(uni_arr);


  
  // usage example:
  var unique = arr.filter(function onlyUnique(value, index, self) {
    // console.log(self);
    // console.log("value" +value);
    // console.log("index" +index);
    // console.log(self.indexOf(value) === index)
    return self.indexOf(value) === index;
  });
  
  console.log(unique); // 