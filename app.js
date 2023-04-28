/*let addNewElement=function(info){
    let newDiv=document.createElement('div')
    let img=document.createElement('img');
    let name=document.createElement('p');
    let nameNode=document.createTextNode(info.name);
    let emailNode=document.createTextNode(info.email);
    name.appendChild(nameNode);
    email.appendChild(emailNode);
    newDiv.appendChild(name);
    newDIv.appendChild(email);
    
    document.body.appendChild(newDiv)
}



fetch("user.json")
    .then((response) => response.json())
    .then((users) => {
        let info = "";
        for(let user of users){
            info += "<p>name:" + user.name + "</p>"
            info += "<p>email:" + user.email + "</p>"
            info += '<img src="' + user.profilePicture + '"height="200">'
        }
        document.body.innerHTML = info
    })*/


let createProfile=function(user){
let newDiv=document.createElement("div");
let profilePic=document.createElement("img");
let ul=document.createElement("ul");
let nameLi=document.createElement("li");
let emailLi=document.createElement("li");
let nameTxt=document.createTextNode(user.name);
let emailTxt=document.createTextNode(user.email);
profilePic.src=user.profilePicture;

nameLi.appendChild(nameTxt);
emailLi.appendChild(emailTxt);
ul.appendChild(nameLi);
ul.appendChild(emailLi);
newDiv.appendChild(profilePic);
newDiv.appendChild(ul);
let content=document.getElementById("content");
content.appendChild(newDiv);
newDiv.classList.toggle("user");
//newDiv.clssname="user"
}

let createElementFromJson=function(users){
    for(let user of users){
        createProfile(user)
    }
}


fetch("user.json").then((response)=>response.json())
                .then((data)=>createElementFromJson(data));











