var a = 10;
var b = 20;
function sum(x){
    var double = x*x;
    function thrice(y){
        var triple = y*y*y;
        return triple;
    }
    var three = thrice(5)
    console.log(three);
    return double;
}
var result = sum(5);
console.log(result)
