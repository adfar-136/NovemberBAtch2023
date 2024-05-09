greet()
console.log(sum)
var sum = function (){
   console.log("good morning")
}

function greet(){
    console.log("good morning")
}
var a =10;
var b = 20;

var c = 30;
function double(){
    
    console.log(a)
    inner();
    function inner(){
        
        console.log(b);
        innerinner()
        function innerinner(){
            console.log(c)
        }
    }
}
double()
(function (x,y){
    console.log(x+y)
}(4,5))
