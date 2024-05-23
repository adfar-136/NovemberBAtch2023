const adfar={
    firstName :"Adfar",
    fun:function(){
        console.log(this.firstName)
    }
}
console.log(adfar.fun())
console.log(this)