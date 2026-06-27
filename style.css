// =========================
// PROJECT MAHI ❤️
// script.js
// =========================

// Loading Screen
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-page").style.display = "block";

        startTyping();

    },3000);

});

// =====================
// Typing Effect
// =====================

const text = `Today isn't just another day...

Today is the day someone amazing was born.

Happy Birthday Mahi ❤️`;

let i = 0;

function startTyping(){

    let area = document.getElementById("typing");

    let timer = setInterval(()=>{

        if(i < text.length){

            area.innerHTML += text.charAt(i);

            i++;

        }

        else{

            clearInterval(timer);

        }

    },45);

}

// =====================
// Hearts Rain
// =====================

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,250);

// =====================
// Stars
// =====================

for(let i=0;i<120;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(star);

}

// =====================
// Gift Button
// =====================

const gift=document.getElementById("giftBtn");

gift.onclick=()=>{

document.getElementById("letter").style.display="block";

document.getElementById("made").style.display="block";

document.getElementById("music").play();

fireworks();

};

// =====================
// Fireworks
// =====================

function fireworks(){

for(let i=0;i<150;i++){

let dot=document.createElement("div");

dot.style.position="fixed";

dot.style.width="8px";

dot.style.height="8px";

dot.style.borderRadius="50%";

dot.style.left="50%";

dot.style.top="50%";

dot.style.background=`hsl(${Math.random()*360},100%,60%)`;

dot.style.transition="all 1.5s ease";

document.body.appendChild(dot);

setTimeout(()=>{

dot.style.transform=`translate(${(Math.random()-.5)*900}px,${(Math.random()-.5)*700}px)`;

dot.style.opacity=0;

},20);

setTimeout(()=>{

dot.remove();

},1800);

}

}

// =====================
// Secret Easter Egg
// =====================

let secret="";

document.addEventListener("keydown",(e)=>{

secret+=e.key.toUpperCase();

if(secret.length>4){

secret=secret.slice(-4);

}

if(secret==="MAHI"){

alert("❤️ You found the hidden message!\n\nMay your smile always stay this beautiful. Happy Birthday Mahi ❤️");

}

});
