burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-links');
burger.addEventListener('click', ()=>{
  navlist.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');
})
navlist.addEventListener('click',()=>{
  navlist.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');
})
window.addEventListener("scroll", ()=>{
  var header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY>0);
})