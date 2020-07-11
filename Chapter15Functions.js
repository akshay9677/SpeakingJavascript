console.log('-----Three roles of a function------')
 //Non-method
  function func1(){
      console.log('hello');
  }
  func1();//hello
  //Constructor function
  function func2(x){
      this.name = x
  };
  var obj1 = new func2('akshay');
  console.log(obj1.name);//akshay
  //Methods 
   var obj2 = {
       methods: function(){
           console.log('hello')
       }
   }
   obj2.methods();//hello


console.log('-----Hoisting-----');
 //Function Expression;
//  func3(); //not a function error
  var func3 = function(){
      console.log('function expression')
  }
  func4();
  function func4(){
      console.log('function declaration')
  }


console.log('-----Name of a function-----')
 var x = function func5(){};
 console.log(x.name);//func5


console.log('-----Handling missing and extra parameters------')
  function func6(mandatory,optional){
      if(mandatory == undefined){
          console.log('Mandatory parameter is not mentioned');
      }
      if(!optional){
          console.log('Optional parameter is not mentioned')
      }
      if(arguments.length < 2){
          console.log('No optional and mandatory parameters are mentioned')
      }
  }
  func6();
  func6(1,2);


console.log('------Simulating pass by reference-------');
  function func7(param){
      return param[0]++
  }
  var t = [3];
  func7(t);
  console.log(t[0]);//4

  
console.log('-----Simulating named parameters-----');
  function func8(options){
      var start = options.start || 0;
      var end = options.end || 0;
      console.log(start,end);

  }
  func8({start : 8,end: 9});//8 9 
  func8({start: 12})// 12 0




