class adfar{
    constructor(fName,age){
        this.fName = fName;
        this.age =age;
    }
    getFName(){
        console.log(this.fName)
        console.log(this.age)
    }
}
let obj1 = new adfar("adfarrr",34)
obj1.getFName();
obj1.reset();
obj1.getFName();