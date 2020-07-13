//Sharing data between Objects via Prototype
var Person = {
  describe: function () {
    console.log("Hello, " + this.name);
  },
};
Person.hello = "hello";
var akshay = Object.create(Person);
akshay.name = "Akshay";
akshay.describe();

//Getting and Setting in Prototype
//Creating a new Object with given Prototype
var kannan = Object.create(Person);
kannan.name = "Kannan";
kannan.describe();
//Reading the prototype of an object
console.log(Object.getPrototypeOf(akshay)); //Person
//Checking if an object is a prototype of another
console.log(Object.prototype.isPrototypeOf(akshay)); //true
//Finding object where property is defined
function getObject(obj, prop) {
  while (obj && !Object.prototype.hasOwnProperty.call(obj, prop)) {
    obj = Object.getPrototypeOf(obj);
  }
  console.log(obj);
}
getObject(akshay, "toString"); //Object

//Iteration And Detection of Objects
//Iteration
function getKeys(obj) {
  var result = [];
  for (var key in obj) {
    result.push(key);
  }
  console.log(result);
}
getKeys(akshay); //["name", "describe", "hello"]
//Detection
console.log("name" in akshay); //true
console.log(akshay.hasOwnProperty("name")); //true

//Accessors
//Accessors via Object Literals
var obj3 = {
  get getter() {
    return "hello";
  },
  set setter(value) {
    console.log("value : ", value); //value : akshay
  },
};
console.log(obj3.getter); //hello
obj3.setter = "akshay";
//Accessors via property descriptor
var obj4 = Object.create(Object.prototype, {
  foo: {
    get: function () {
      return "hello";
    },
    set: function (value) {
      console.log("value : ", value); //value : Akshay
    },
  },
});
console.log(obj4.foo); //hello
obj4.foo = "Akshay";

//Protecting Objects
//Prevent Extensions
var obj5 = { name: "Akshay" };
Object.preventExtensions(obj5);
obj5.nnn = "nnn";
console.log(obj5.nnn); //undefined
//Seal
var obj6 = { name: "Akshay" };
Object.seal(obj6);
delete obj6.name;
console.log(obj5.name); //Akshay
//Frozen
var obj7 = { name: "Akshay" };
Object.freeze(obj7);
obj7.name = "akshay";
console.log(obj7.name); //Akshay
