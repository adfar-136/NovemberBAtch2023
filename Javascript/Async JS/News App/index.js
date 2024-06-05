
function getNews(){
    let data = fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
    data.then((result)=>{
       return result.json()
    }).then((response)=>{
         createData(response.articles)
    })
}
function createData(items){
    const ul = document.getElementById("main")
    items.forEach(item=>{
       const div  =document.createElement("div")
        const li = document.createElement("li");
        const b = document.createElement("b");
        const img = document.createElement("img");
        const a = document.createElement("a");
        const p = document.createElement("p");
        p.textContent = item.description?item.description.slice(0,50):"Description not available"
        a.textContent = "Read More"
        a.setAttribute("href",item.url);
        a.setAttribute("target","_blank");
        img.setAttribute("class","img");
        // img.style.width="100px"
        // img.style.height = "100px"
        img.setAttribute("src",item.urlToImage?item.urlToImage:"https://nypost.com/wp-content/uploads/sites/2/2024/06/83236178.jpg?quality=75&strip=all&w=1024");
        img.setAttribute("alt","News image")
        b.textContent = item.author;
        li.textContent = item.title?item.title.slice(0,50):"Item Ka Title nhi hain";
        div.appendChild(li)
        div.appendChild(b)
        div.appendChild(img)
        div.appendChild(a)
        div.appendChild(p)
        ul.appendChild(div)
    })
}
getNews()
