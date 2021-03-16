var ClassA = function() {
    this.name = "class A";
}

ClassA.prototype.print = function() {
    console.log(this.name);
}

var a = new ClassA();

a.print();

var ClassB = function(){
   this.name = "Class B"
}

ClassB.prototype = new ClassA();

var b = new ClassB();
b.print();
