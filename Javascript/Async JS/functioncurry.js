// function calculate(a,b,c){
//     return a+b+c
// }
function calculate(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
let sum1 = calculate(4)
let sum2 = sum1(4)
let sum3 = sum2(6)
console.log(sum3)