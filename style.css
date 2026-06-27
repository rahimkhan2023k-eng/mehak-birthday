*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:linear-gradient(135deg,#0f0c29,#302b63,#24243e);
background-size:400% 400%;
animation:bg 12s ease infinite;
min-height:100vh;
overflow-x:hidden;
display:flex;
justify-content:center;
align-items:center;
padding:40px;
}

@keyframes bg{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}

#loading-screen{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:#090014;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
z-index:9999;
}

#loading-text{
color:#fff;
font-size:40px;
margin-bottom:20px;
}

.progress{
width:300px;
height:12px;
background:#333;
border-radius:30px;
overflow:hidden;
}

.bar{
width:0%;
height:100%;
background:#ff4da6;
animation:load 3s linear forwards;
}

@keyframes load{
to{
width:100%;
}
}

#main-page{
display:none;
width:100%;
}

.glass{
max-width:800px;
margin:auto;
padding:40px;
border-radius:25px;
background:rgba(255,255,255,.08);
backdrop-filter:blur(18px);
box-shadow:0 0 30px rgba(255,20,147,.35);
text-align:center;
}

.title{
font-size:60px;
color:white;
line-height:1.2;
text-shadow:0 0 20px hotpink;
}

.title span{
color:#ff80bf;
font-size:70px;
}

#typing{
margin-top:25px;
font-size:22px;
color:white;
min-height:80px;
line-height:36px;
}

#giftBtn{
margin-top:30px;
padding:16px 40px;
font-size:20px;
border:none;
border-radius:50px;
background:#ff2e7a;
color:white;
cursor:pointer;
transition:.3s;
box-shadow:0 0 25px #ff2e7a;
}

#giftBtn:hover{
transform:scale(1.08);
}

#letter{
display:none;
margin-top:35px;
padding:30px;
background:white;
color:#333;
border-radius:20px;
line-height:32px;
font-size:18px;
}

#made{
display:none;
margin-top:35px;
font-size:34px;
color:white;
text-shadow:0 0 20px hotpink;
animation:pulse 1.5s infinite;
}

@keyframes pulse{
50%{
transform:scale(1.08);
}
}

/* Hearts */

.heart{
position:fixed;
top:-20px;
font-size:20px;
pointer-events:none;
animation:fall linear forwards;
}

@keyframes fall{
0%{
transform:translateY(-10vh) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}
}

/* Stars */

.star{
position:fixed;
width:2px;
height:2px;
background:white;
border-radius:50%;
animation:twinkle 2s infinite alternate;
}

@keyframes twinkle{
from{
opacity:.2;
}

to{
opacity:1;
box-shadow:0 0 10px white;
}
}

@media(max-width:768px){

.title{
font-size:42px;
}

.title span{
font-size:48px;
}

.glass{
padding:25px;
}

#typing{
font-size:18px;
}

}
