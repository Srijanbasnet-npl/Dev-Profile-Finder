async function getProfile(){

const username=document.getElementById("username").value;

const url=`https://api.github.com/users/${username}`;

try{

const response=await fetch(url);
const data=await response.json();

if(data.message==="Not Found"){
document.getElementById("profileBox").innerHTML="<p>User not found</p>";
return;
}

document.getElementById("profileBox").innerHTML=`

<img src="${data.avatar_url}">
<h2>${data.name || data.login}</h2>
<p>${data.bio || ""}</p>
<p>Followers: ${data.followers}</p>
<p>Following: ${data.following}</p>
<p>Public Repos: ${data.public_repos}</p>

<a href="${data.html_url}" target="_blank">View Profile</a>

`;

}

catch(error){
console.log(error);
}

}

getProfile();