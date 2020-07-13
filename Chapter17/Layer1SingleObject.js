//Object literals
var obj = {
  name: "Akshay",
  age: 21,
  method: function () {
    console.log(this.name + " " + this.age);
  },
};
console.log(obj);

//Dot Operator
//Dot Operator - Getting
console.log(obj.name); //Akshay
//Dot Operator - Setting
obj.name = "Akshay Kannan";
console.log(obj.name); //Akshay Kannan
//Dot Operator - Calling Methods
obj.method(); //Akshay Kannan 21
//Dot Operator - Deleting
delete obj.age;

//Dot Operator
//Dot Operator - Getting
console.log(obj["name"]); //Akshay Kannan
//Dot Operator - Setting
obj["ag" + "e"] = 21;
console.log(obj["age"]); //21
//Dot Operator - Calling Methods
obj.method(); //Akshay Kannan 21
//Dot Operator - Deleting
delete obj["age"];

//Converting Values to Objects
var a = 27;
var b = Object(a);
console.log(a, b); //Number(27) 27

//this Keyword apply() call() bind()
var obj2 = {
  greet: function (place) {
    console.log("Hello, " + this.name + " from " + place);
  },
};
var akshay = { name: "akshay" };
//call()
obj2.greet.call(akshay, "Chennai"); // Hello, Akshay from Chennai
//bind()
var greetAkshay = obj2.greet.bind(akshay, "Chennai");
greetAkshay(); //Hello, Akshay from Chennai
//apply()
obj2.greet.apply(akshay, ["Chennai"]); //Hello, Akshay from Chennai
