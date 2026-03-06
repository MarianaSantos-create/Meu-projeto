// MENU HAMBURGUER
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {

toggle.classList.toggle("active");
nav.classList.toggle("active");

});


// BOTÃO VOLTAR AO TOPO
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 200){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}

});

topBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});