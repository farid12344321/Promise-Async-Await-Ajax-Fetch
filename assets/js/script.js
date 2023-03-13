"use-strict";




// let users = [
//     {
//         name: "Mubariz",
//         surname: "Agayev",
//         age: 18
//     },

//     {
//         name: "Aqshin",
//         surname: "Hummetov",
//         age: 27
//     },

//     {
//         name: "Pervin",
//         surname: "Rehimli",
//         age: 26
//     },

//     {
//         name: "Mirze",
//         surname: "Bahirzade",
//         age: 27
//     },

//     {
//         name: "Xacker",
//         surname: "Akberov",
//         age: 20
//     }
// ];

// function getUsersByName(str){

//     setTimeout(() => {
//         let result = users.filter(m=>m.name.includes(str));

//         console.log(result);
//     }, 3000);

// }

// getUsersByName("r");

let ul = document.querySelector("ul");


// function getUsers(datas) {
//     setTimeout(() => {
//         let str = "";

//         datas.forEach(user => {
//             str += `<li class="list-group-item"><b>${user.name}-</b><b>${user.surname}-</b><b>${user.age}</b></li>`
//         });

//         ul.innerHTML = str;

//     }, 2000);
// }

// getUsers();

// function creatUser(user,) {

//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             users.push(user);
//             let err = true;

//             if(!err){
//                 resolved(users);
//             }else{
//                 rejected("something is wrong");
//             }

//         }, 3000);
//     });

// }

// creatUser({ name: "Elcan", surname: "Qurbanov", age: 20 }).then(response => {
//     getUsers(response);
// }).catch(err=>{
//     console.log(err);
// })




function getAllPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(datas => {
            let str = "";

            datas.forEach(data => {
                str += `<li data-id="${data.id}" class="list-group-item"><b>${data.id}-</b><b>${data.body}-</b><b>${data.userId}</b></li>`
            });

            ul.innerHTML = str;
        })
}


getAllPosts();


function getPostById(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id }`)
    .then(response => response.json())
    .then(res => {
      alert(+res.id + "-" + res.body)
    })
}





setTimeout(() => {

    let elems =document.querySelectorAll("li");


    
    elems.forEach(elem => {
        elem.addEventListener("click",function(){
            let id = parseInt(this.getAttribute("data-id"))

            getPostById(id);
        })
    });
}, 2000);






