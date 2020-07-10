console.log('------Try catch block-------')
const a = 12;
function tryCatch(){
    try{
       a = 13;
       console.log(a)
    }catch(e){
       console.log(e);
    }
}
tryCatch();//Error
//---------------------------
console.log('---------Try catch block with throw-------------');
function thrwoIt(exception){
    try{
        throw exception;
    }catch(e){
        console.log(e);
    }
}
thrwoIt('Hello World');//Hello World
//------------------------
console.log('--------------Finally-------------')
arr = [1,2,3]
function throwFinallyException(){
    try{
        if(!arr[3]){
            throw new Error('Array out of bound');
        }
    }catch(e){
        console.log(e);
    }finally{
        arr[3] = 4
        console.log(4);
    }
}
throwFinallyException();//Error
console.log('-------------Try finally with return in try-----------------');
function idLog(x) {
    try {
        return x;
    } finally {
        x = x+1
        console.log(x);
    }
}
console.log(idLog(20));//21 20
console.log('---------Stack Trace----------');
function stackTrace(){
    try{
        a = 13;
    console.log(13);
        }catch(e){
         console.log(e.stack);//Prints the stack trace for the error
       }
}
stackTrace();
