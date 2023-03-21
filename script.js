let getInfo = document.getElementById('btn');
getInfo.addEventListener('click', getUserInfo)

function getUserInfo(){
    let userName = document.getElementById('inputData').value
    let url = 'https://api.github.com/users/'+userName
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        let result = document.getElementById('result')
        result.innerHTML=`
        <img src = "${data.avatar_url}">
        <h1> Name : ${data.login}</h1>
        <p>${data.bio}</p>
        <p>Public Repo : ${data.public_repos}</p>
        
        `
    })
}
// let getInfo = document.getElementById('btn');
// getInfo.addEventListener('click',getUserInfo);

// function getUserInfo(){
// let userName = document.getElementById('inputData').value
// let url = 'https://api.github.com/users/'=+userName
// fetch (url)
// .then(res => res.json())
// .then(data =>{
// let result = document.getElementById('result')
// result.innerHTML=`
// <img src = "${data.avatar_url}">
// <h1> Name : ${data.login}</h1>
// <p>${data.bio} </p>
// <p> Public repo : ${data.public_repos}</p>`


// })

// }