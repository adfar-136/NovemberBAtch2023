// class employee{
//     constructor(fullName,age,salary){
//         this.name = fullName;
//         this.age = age;
//         this.salary=salary
//         console.log("constructor called")
//     }
//     sayName(){
//        document.write(` Employee details <br>
//        Name: ${this.name} <br>
//        Age:${this.age} <br>
//        Salary:${this.salary}
//        `)
//     }
// }
// class manager extends employee{
//     constructor(){
//         super("Adfar Rashid",56,10000)
//         console.log("chld")
//     }
//     sayName(){
//         super.sayName()
//         let ta = 1000;
//         let pa = 3000;
//         let totalsalary= this.salary + pa +ta;
//         document.write(` manager details <br>
//        Name: ${this.name} <br>
//        Age:${this.age} <br>
//        Salary:${totalsalary}
//        `)
//     }
//     sayMyName(){
//         console.log("My name is Adfar Rashid")
//     }
// }
// let a = new manager();
// a.sayName()


class employee{
    constructor(fullName,age,salary){
        this.name = fullName;
        this.age = age;
        this.salary=salary
        console.log("constructor called")
    }
    sayName(){
       document.write(` Employee details <br>
       Name: ${this.name} <br>
       Age:${this.age} <br>
       Salary:${this.salary}
       `)
    }
    #sayMyName(){
        console.log("My name is Adfar Rashid")
    }
}
class manager extends employee{
    constructor(){
        super("Adfar Rashid",56,10000)
        console.log("chld")
    }
    sayName(){
        super.sayName()
        let ta = 1000;
        let pa = 3000;
        let totalsalary= this.salary + pa +ta;
        document.write(` manager details <br>
       Name: ${this.name} <br>
       Age:${this.age} <br>
       Salary:${totalsalary}
       `)
    }
   
}
let a = new manager();
a.sayMyName()
