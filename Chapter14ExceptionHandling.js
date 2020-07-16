const obj = {
  tryCatch: function () {
    const a = 12;
    try {
      a = 13;
      return a;
    } catch (e) {
      return e.name;
    }
  },
  thrwoIt: function (exception) {
    try {
      throw exception;
    } catch (e) {
      return e;
    }
  },
  throwFinallyException: function (arr, n) {
    try {
      if (!arr[3]) {
        throw new Error("Array out of bound");
      }
    } catch (e) {
      console.log(e.name);
    } finally {
      arr[3] = n;
      return arr;
    }
  },
  tryReturn: function (x) {
    try {
      return x;
    } finally {
      x = x + 1;
      return x;
    }
  },

  errorConstructor: function () {
    const t = 10;
    try {
      t = 12;
    } catch (e) {
      return e.name + " " + e.message;
    }
  },
  stackTrace: function () {
    const a = 122;
    try {
      a = 13;
      console.log(13);
    } catch (e) {
      return e.stack; //Prints the stack trace for the error
    }
  },
};

module.exports = obj;
