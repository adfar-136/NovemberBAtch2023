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
        `;
        showTab("overview")
    }).catch(error=>{
        document.getElementById("overview").innerHTML = "User not found"
    })
}

document.getElementById("searchForm").addEventListener("submit",function(e){
    e.preventDefault();
    let username = document.getElementById("username").value;
  
    if(username){
        document.getElementById("overview").innerHTML = '<p>Loading...</p>'
        document.getElementById("repos").innerHTML = ""
        document.getElementById("favorites").innerHTML = ""

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
             <i class="fa-heart ${isfavourite(repo.name) ? "fa-solid":"fa-regular"}" onclick="toggleFavoriteRepo('${repo.name}','${repo.html_url}','${repo.description}')"></i>
           
           </div>
          </div>
         `).join('')
    
         document.getElementById("repos").innerHTML = repolist;
         fetchTotalRepos(username).then(result=>setUpPagination(username,page,result))
})
}
let favouriteRepos=[]||JSON.parse(localStorage.getItem("favouriteRepos"));

function isfavourite(repoName){
    return favouriteRepos.some(repo=>repo.name===repoName)
}
function updateRepoIcons(){
    document.querySelectorAll(".repo").forEach(repoDiv => {
        const repoName = repoDiv.querySelector("a").textContent;
        const heartIcon = repoDiv.querySelector(".fa-heart");
        if(isfavourite(repoName)){
            heartIcon.classList.add("fa-solid")
            heartIcon.classList.remove("fa-regular")
        } else{
            heartIcon.classList.add("fa-regular");
            heartIcon.classList.remove("fa-solid");
        }
    })
}
function toggleFavoriteRepo(name,url,description){
    let reposIndex = favouriteRepos.findIndex(repo=>repo.name===name)
    if(reposIndex !== -1){
        favouriteRepos.splice(reposIndex,1)
    } else{
        favouriteRepos.push({name,url,description})
    }
   localStorage.setItem("favouriteRepos",JSON.stringify(favouriteRepos))
   displayFavouriteRepos()
   updateRepoIcons()
}
function displayFavouriteRepos(){
    const favList = favouriteRepos.map(repo=> `
        <div class="repo">
           <div>
             
             <a href=${repo.html_url} target="_blank">${repo.name}</a>
             <p>${repo.description || 'noo description available'}</p>
             <i class="fa-heart fa-solid" onclick="toggleFavoriteRepo('${repo.name}','${repo.html_url}','${repo.description}')"></i>
           
           </div>
          </div>
        `).join("");
        console.log(favList)
        document.getElementById("favorites").innerHTML = favList
        
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

function showTab(tabName){
    console.log(tabName)
  document.querySelectorAll(".tab-content").forEach(tabContent => {
                  tabContent.classList.remove('active')
  })
  document.getElementById(tabName).classList.add("active");
  if(tabName === "repos"){
    document.getElementById("pagination").style.display = "flex"
  } else{
    document.getElementById("pagination").style.display = "none"

  }
}
document.getElementById("overview-tab").addEventListener("click",()=>{showTab("overview")})
document.getElementById("repos-tab").addEventListener("click",()=>{showTab("repos")})
document.getElementById("favorite-tab").addEventListener("click",()=>{showTab("favorites")})