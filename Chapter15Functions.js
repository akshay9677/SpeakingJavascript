const obj = {
  rolesOfFunctions: function () {
    //Non-method
    function func1() {
      console.log("hello");
    }
    func1(); //hello
    //Constructor function
    function func2(x) {
      this.name = x;
    }
    var obj1 = new func2("akshay");
    console.log(obj1.name); //akshay
    //Methods
    var obj2 = {
      methods: function () {
        console.log("hello");
      },
    };
    obj2.methods(); //hello
  },
  hoisting: function () {
    return func();
    function func() {
      return "Hoisted";
    }
  },
  nameOfFunction: function () {
    return this.nameOfFunction.name;
  },
  handlingMissingParameter: function (mandatory, optional) {
    if (arguments[0] == undefined) {
      return "Mandatory parameter is not mentioned";
    }
    if (arguments[1] == undefined) {
      return "Optional parameter is not mentioned";
    }
  },
  simulatingPassByReference: function (p) {
    function func(param) {
      param[0]++;
    }
    var t = p;
    func(t);
    return t;
  },
  simulatingNamedParameters: function (options) {
    var start = options.start || 0;
    var end = options.end || 0;
    return [start, end];
  },
};

module.exports = obj;
