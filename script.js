// INTRO REMOVE
window.addEventListener("load",()=>{
setTimeout(()=>{
let intro=document.getElementById("intro");
if(intro) intro.style.display="none";
},3000);
});

// MOVIES AUTO
const movieBox=document.getElementById("movies");
if(movieBox){
for(let i=1;i<=30;i++){
let div=document.createElement("div");
div.className="card";
div.innerHTML=`<h3>Movie ${i}</h3><p>PCCU Phase ${i}</p>`;
movieBox.appendChild(div);
}
}

// NEWS AUTO
const newsBox=document.getElementById("news");
if(newsBox){
for(let i=1;i<=20;i++){
let div=document.createElement("div");
div.className="card";
div.innerHTML=`<p>Update ${i}</p>`;
newsBox.appendChild(div);
}
}

// SCROLL ANIMATION
const cards=document.querySelectorAll('.card');

function reveal(){
const trigger=window.innerHeight*0.85;
cards.forEach(card=>{
if(card.getBoundingClientRect().top<trigger){
card.classList.add('show');
}
});
}

window.addEventListener('scroll',reveal);
window.addEventListener('load',reveal);
