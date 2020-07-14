const iconShare = document.querySelector(".icon");
const socialBar = document.querySelector(".active-bar");

iconShare.onclick = myFunction;

function myFunction() {
  iconShare.addEventListener("click", (socialBar.style.opacity = 1));
  iconShare.addEventListener("click",(iconShare.style.color='red'));

}

