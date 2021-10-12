document.addEventListener("DOMContentLoaded", function() {});
//Table of Contents
const bookList = document.getElementById("list")
const shwPanel = document.getElementById("show-panel")
const myUser = {"id": 1, "username": "pouros"}
//Fetch
fetch('http://localhost:3000/books')
.then(response => response.json())
.then((data) => {
  data.forEach((book) => {
    bkList(book)
  })
})
//Book List
let bkList = (book) => {
  let bkLst = document.createElement('li')
  bkLst.innerText = book.title
  bookList.append(bkLst)

  bkLst.addEventListener("click", (event) => {
    shwPanel.innerHTML = ""
   
let bookTitle = document.createElement("h1")
    bookTitle.innerText = book.title
let bookSubtitle = document.createElement("h2")
    bookSubtitle.innerText = book.subtitle
let bookDescription = document.createElement("p")
    bookDescription.innerText = book.description
let bookAuthor = document.createElement("p")
    bookAuthor.innerText = book.author
let bookImage = document.createElement("img")
    bookImage.src = book.img_url
let likeButton = document.createElement("button")
    likeButton.innerText = "Like"
let likersList = document.createElement("ul")
    likersList.id = "users-list"

if (book.users.length > 0) {
book.users.forEach((user) => {
let lkUser = document.createElement("li")
lkUser.innerText = user.username
lkUser.id = user.username
likersList.append(lkUser)
})
}
//Show Panel
shwPanel.append(bookImage, bookTitle, bookAuthor, bookSubtitle, bookDescription, likersList, likeButton)
//Like Button  Event Listener
likeButton.addEventListener("click", (event) => {    
book.users.push(myUser)

fetch(`${booksURL}/${book.id}`, {
method: "PATCH",
headers: {
"Content-type": "application/json"
},
body: JSON.stringify({
users: book.users
})
})
.then(response => response.json())
.then((updatedBook) => {
book.users = updatedBook.users
let newUserLi = document.createElement("li")
newUserLi.innerText = myUser.username
likersList.append(newUserLi)
})
})
}
)}
/*
fetch('http://localhost:3000/books')
.then (response => response.json())
.then (data => {
    console.log(data)
    //document.querySelector("#list").innerText += data
    })

let newElemetn = document.createElement('input');

let bkTitle = document.createElement('h1')
bkTitle.innerText = book.title

*/
/*
fetch('people.json').then(function (response) {
    return response.json();
    }).then(function (obj) {
        console.log(obj);
    }).catch(function (error) {
        console.error('Something went wrong with retrieving the people.json')
        console.log(error);
    })
*/

//let newElemetn = document.createElement('input');

//document.body.appendChild(newElemetn);

