// Typing Text
const message =
"Every heartbeat carries a wish for your happiness... ❤️";

let i = 0;

function typing() {

    if (i < message.length) {

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typing, 60);

    }

}

typing();


// Floating Hearts

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,250);


// Gift Button

const btn=document.getElementById("giftBtn");

btn.onclick=function(){

document.getElementById("letter").style.display="block";

document.getElementById("made").style.display="block";

document.getElementById("music").play();

fireworks();

}


// Fireworks Effect

function fireworks(){

for(let i=0;i<120;i++){

let spark=document.createElement("div");

spark.style.position="absolute";

spark.style.width="6px";

spark.style.height="6px";

spark.style.borderRadius="50%";

spark.style.background=`hsl(${Math.random()*360},100%,60%)`;

spark.style.left="50%";

spark.style.top="45%";

spark.style.transition="all 1.5s ease";

document.body.appendChild(spark);

setTimeout(()=>{

spark.style.transform=`translate(${(Math.random()-0.5)*900}px,
${(Math.random()-0.5)*700}px)`;

spark.style.opacity=0;

},50);

setTimeout(()=>{

spark.remove();

},1800);

}

}
