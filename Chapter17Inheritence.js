const obj = {
  inheritence: function () {
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
    return [childInstance instanceof Parent, childInstance instanceof Child];
  },
};

module.exports = obj;
