console.log('-----Scope of variable------');
//Lexical Scoping
function func1(){
    var a = 'Lexical Scoping';
    console.log(a);
}
func1();//eventhough the function is called in the global scope a is printed
//Nested Scoping
function func2(arg){
   function bar(){
       console.log(arg);
   }
   bar();
}
func2('Nested Scopes')
//Shadowing
var a = 20;
function func3(){
    var a = 12;
    console.log(a);
}
func3();//12


console.log('----Variable declarations are hoisted----');
function func4(){
    console.log(a);//undefined
    var a = 3;
}
func4();//when inside a function scope the variables are hoisted that is why we get undefined
// and not a reference error

console.log('------Imediately Invoked Function Function Expression------');
console.log('---->IIFE Examples');
(function(){
    console.log('IIFE Example');
}());

console.log('--->In case of two IIFEs use semicolon');
(function(){
    console.log('IIFE 1');
}());
(function(){
    console.log('IIFE 2');
}());

console.log('----->IIFE Prefix Operator');
!function(){
    console.log('akshay');
}();

console.log('----->IIFE with Parameter');
(function(x){
    console.log(x)
}('akshay'))


console.log('--------Environments-------');
//Dynamic dimensions
var count = 0
function func5(n) {
    if (n <= 0) {
        return count;
    }
    count = count+1;
    return func5(n - 1);
}
console.log(func5(3));
//Each function is nested dynamically therefore a new environment has to be created
//for each nested functions parameters, thus to handle recursions a seperate stack is maintained 
//stack of execution contexts

//Lexical dimensions(static)
function func6(){
    var a = 123;
    console.log(outerVariable);
}
var outerVariable = 20;
func6();//20
//Here the inner function has access to outside scope's environment
//Javascript handles it by creating a chain of environments with inner function being able to
//access outside scope's environment through --outer-- 


console.log('-------Cloures-------')
function func7(first){
    return function(second){
        first = first + second;
        return first;
    }
}
var add = new func7(5);
console.log(add(4));//9
//Closure allows the survival of a environment after it has left its scope
//In other words because of closure inner function has access to outer function's parameter and variables
//In the above example the inner function was able to access the parameter 
//of outer function func7 using chain of environment concept(Lexical Dimensions)






