const postContainer = document.getElementById("post-container")
const loading = document.querySelector(".laoder")
const filter = document.querySelector("#filter")

let limit = 5
let page = 1

// FETCH POSTS FROM API
async function getPosts(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
  const data = await res.json()
  return data
}

// SHOW POSTS IN DOM
async function showPosts(){
  const posts = await getPosts()
  posts.forEach(post =>{
    const postEl = document.createElement("div")
    postEl.classList.add("post")
    postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
        </div>
    `
    postContainer.appendChild(postEl)
  })
}

// SHOW LOADER AND FETCH MORE POSTS
function showLoading(){
  loading.classList.add('show')
  setTimeout(()=>{
    loading.classList.remove("show")
    setTimeout(()=>{
      page++
      showPosts()
    },300)
  },1000)
}

// FILTER POSTS BY INPUT
function filterPosts(e){
  const term = e.target.value.toUpperCase()
  const posts = document.querySelectorAll(".post")
  posts.forEach(post=>{
    const title = post.querySelector(".post-title").innerText.toUpperCase()
    const body = post.querySelector(".post-body").innertext.toUpperCase()
    if(title.indexOf(term) > -1 || body.indexOf(term) > -1 ){
      post.style.display = 'flex'
    }else{
      post.style.display = 'none'
    }
  })
}

// SHOW INITIAL POSTS 
showPosts()

window.addEventListener("scroll", ()=>{
  const{scrollTop, scrollheight, clientHeight} = document.documentElement
  if(scrollTop + clientHeight >= scrollheight - 5){
    showLoading()
  }
})

filter.addEventListener('input', filterPosts)