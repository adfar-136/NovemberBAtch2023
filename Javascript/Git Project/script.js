function fetchUserInfo(username){
    fetch(`https://api.github.com/users/${username}`)
    .then(response=>response.json())
    .then((user)=>{
        document.getElementById("overview").innerHTML = `
             <div id="userInfo">
              <img src="${user.avatar_url}" alt="Profile Picture" width="100"/>
              <h2>User Name: ${user.name}</h2>
              <p>User Bio: ${user.bio}</p>
              <p>User Public Repos: ${user.public_repos}</p>
              <p>User Followers: ${user.followers}</p>
              <p>User Folloing: ${user.following}</p>
              <a href=${user.html_url} target="_blank">Open in GitHub</a>
             </div>
        `
    }).catch(error=>{
        document.getElementById("overview").innerHTML = "User not found"
    })
}

document.getElementById("searchForm").addEventListener("submit",function(e){
    e.preventDefault();
    let username = document.getElementById("username").value;
  
    if(username){
        fetchUserInfo(username);
        fetchUserRepos(username,1)
    }
})

function fetchUserRepos(username,page){
    fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=5`)
    .then(response=>response.json())
    .then((repos)=>{
         const repolist = repos.map((repo)=>`
          <div class="repo">
           <div>
             
             <a href=${repo.html_url} target="_blank">${repo.name}</a>
             <p>${repo.description || 'noo description available'}</p>
             <i class="heart-icon ${isfavourite(repo.name) !== -1 ? "favorite":"heeloo"}" onclick="toggleFavoriteRepo('${repo.name}','${repo.html_url}','${repo.description}')">hey</i>
           
           </div>
          </div>
         `).join('')
    
         document.getElementById("repos").innerHTML = repolist;
         fetchTotalRepos(username).then(result=>setUpPagination(username,page,result))
})
}
let favouriteRepos=[]||JSON.parse(localStorage.getItem("favouriteRepos"));

function isfavourite(repoName){
    let reposIndex = favouriteRepos.findIndex(repo=>repo.name===repoName)
    return reposIndex
}

function toggleFavoriteRepo(name,url,description){
    let reposIndex = favouriteRepos.findIndex(repo=>repo.name===name)
    if(reposIndex !== -1){
        favouriteRepos.splice(reposIndex,1)
    } else{
        favouriteRepos.push({name,url,description})
    }
   localStorage.setItem("favouriteRepos",JSON.stringify(favouriteRepos))
}
function fetchTotalRepos(username){
  return  fetch(`https://api.github.com/users/${username}`)
    .then(response=>response.json())
    .then(user=>user.public_repos)
}

// function setUpPagination(username,currentPage,totalRepos){
//     let pagination = document.getElementById("pagination")
//     // pagination.innerHTML = `
//     //  <button class="page" onclick="fetchUserRepos('${username}',${currentPage-1})" ${currentPage === 1 ?"disabled":""}>Previous</button>
//     //  <button class="page" onclick="fetchUserRepos('${username}',${currentPage+1})">Next</button>
//     // `
//     pagination.innerHTML='';
//     let btnscount = Math.ceil(totalRepos/5);
//     for(let i =1;i<=btnscount;i++){
//         let pageBtn = document.createElement("button");
//         pageBtn.textContent=i;
//         pageBtn.classList.add("page");
//         pageBtn.onclick = ()=>fetchUserRepos(username,i);
//         pagination.appendChild(pageBtn)
//     }
// }
function setUpPagination(username,currentPage,totalRepos){
    let pagination = document.getElementById("pagination")
    pagination.innerHTML='';
    let totalPages = Math.ceil(totalRepos/5);
    const createButton = (text,page) =>{
        let button = document.createElement("button")
        button.textContent = text;
        if(page === currentPage){
            button.classList.add('active')
        }
        button.onclick = ()=>fetchUserRepos(username,page);
        return button
    }
   const prevButton = createButton("Previous",currentPage-1);
   prevButton.disabled = currentPage===1;
   pagination.appendChild(prevButton);
   let maxButtons = 5;
   let startPage = Math.max(1,currentPage-Math.floor(maxButtons/2));
   let endPage=Math.min(totalPages,startPage+maxButtons-1);
//    if(endPage-startPage<=maxButtons-1){
//     startPage=Math.max(1,endPage-maxButtons+1)
//    }
   for(let i =startPage;i<=endPage;i++){
    const pageButton = createButton(i,i);
    pagination.appendChild(pageButton)
   }
   const nextButton = createButton("Next",currentPage+1);
   nextButton.disabled = currentPage===totalPages;
   pagination.appendChild(nextButton)
}
