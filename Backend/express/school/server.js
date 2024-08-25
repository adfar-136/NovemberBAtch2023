var express = require("express")
let studentArray = require("./initialData")
const app = express()
let currentId = studentArray.length
app.use(express.json())
app.get("/api/student",(req,res)=>{
     res.send(studentArray)
})
app.get("/api/student/:id",(req,res)=>{
  let id = req.params.id;
  if(!isNaN(id)){
    id=parseInt(id)
    let studentObject = studentArray.find((item)=>{
        return (item.id == id)
      })
    if(studentObject === undefined){
       return res.status(404).send("Student does not exist")
    }
    res.send(studentObject)
  } else {
    return res.status(400).send("bad request")
  }
})
app.post("/api/student",(req,res)=>{
   let reqkeys = Object.keys(req.body)
   if(reqkeys.find((e)=>{return e==="name"}) && 
   reqkeys.find((e)=>{return e === "currentClass"})
   && reqkeys.find((e)=>{return e === "division"}) ){
    let name = req.body.name;
    let currentClass = req.body.currentClass;
    let division = req.body.division;
    currentId++;
    studentArray.push({id:currentId,name:name,currentClass:currentClass,division:division})
    res.send(studentArray)
   }
   else {
    res.status(400).send("badddd");
   }
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})