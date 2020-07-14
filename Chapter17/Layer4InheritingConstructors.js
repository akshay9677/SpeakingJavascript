//Inheriting a sub class from a parent class
function Parent() {
  this.name = "parent";
}
Parent.prototype.test = function () {
  console.log("parent");
};

function Child() {
  Parent.call(this);
  this.greet = ", Hello how are you!";
  this.test = function () {
    console.log("child");
  };
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

var childInstance = new Child();
childInstance.__proto__.test(); //parent
childInstance.test(); //child

//Conversion to primitive
var a = new Number(4);
console.log(a, a.valueOf(), a.toString()); //Number(4) 4 4

//Borrowing methods from Prototypes
function counter(age) {
  this.count = count;
}
counter.prototype.inc = function (step) {
  console.log(this.count + step);
};
var age = { count: 22 };
counter.prototype.inc.call(age, 1); //23
