let adfar = {
    firstName : "Adfar",
    secondName:"Rashid",
    get fullName(){
       return `My fullName is ${this.firstName} ${this.secondName}`
    },
    set fullName(x){
          let names = x.split(" ");
          this.firstName=names[0];
          this.secondName=names[1];
     }
}
console.log(adfar.fullName)
adfar.fullName="Aditya Tanavade"
console.log(adfar.fullName)