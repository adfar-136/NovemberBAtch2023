var express = require("express")
var path = require("path")
var staticPath = path.join(__dirname,"public")
const app = express()
app.use(express.static(staticPath))
// console.log(staticPath)
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","about.html"))
})
app.listen(3001,()=>{
    console.log("server is running at 3001 port")
})
// console.log(__dirname)