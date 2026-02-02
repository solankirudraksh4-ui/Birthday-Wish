/* Floating emojis */
const emojis = ["🎀","💗","✨","🧸"];
for(let i = 0; i < 20; i++){
  const e = document.createElement("div");
  e.className = "float";
  e.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  e.style.left = Math.random() * 100 + "%";
  e.style.animationDelay = Math.random() * 6 + "s";
  document.body.appendChild(e);
}

/* Music logic (MOBILE SAFE) */
const music = new Audio("music.mp3");
music.loop = true;

function toggleMusic(){
  if(music.paused){
    music.play();
    localStorage.setItem("music","on");
  }else{
    music.pause();
    localStorage.setItem("music","off");
  }
}

/* 🔒 IMPORTANT: mobile browsers block autoplay
   So we wait for FIRST user interaction */
if(localStorage.getItem("music") === "on"){
  document.addEventListener("click", () => {
    if(music.paused){
      music.play();
    }
  }, { once:true });
}


