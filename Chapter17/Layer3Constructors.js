//Constructors factories for instances
function Person(name) {
  this.name = name;
}
Person.prototype.describe = function () {
  console.log("Person named ", this.name);
};
var akshay = new Person("Akshay");
console.log(akshay.name); //Akshay
akshay.describe(); // Person named Akshay

//InstanceOf
console.log(akshay instanceof Person); //true
