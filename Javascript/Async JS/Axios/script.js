const url = "https://jsonplaceholder.typicode.com/posts";
document.getElementById("getBtn").addEventListener("click",()=>{
  axios.get(url).then((data)=>{
        console.log(data)
    })
})
document.getElementById("postBtn").addEventListener("click",()=>{
    const title =document.getElementById("title").value;
    const body =document.getElementById("body").value;
    axios.post(url,{
        title:title,
        body:body,
        userId:1
    }).then(res=>{
        console.log(res)
    })
})
document.getElementById("putBtn").addEventListener("click",()=>{
    const id = document.getElementById("updateId").value;
    const title =document.getElementById("updateTitle").value;
    const body =document.getElementById("updateBody").value;
    axios.put(`${url}/${id}`,{
        title:title,
        body:body,  
    }).then(res=>console.log(res))
})
// function ress(x){
//     let responsetag = document.getElementById("response");
//     responsetag.innerText = JSON.stringify(x)
// }