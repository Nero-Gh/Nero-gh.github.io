var selectQuery = (element)=>document.querySelector(element);

var togglebtn = selectQuery('#toggle');
var menubars = selectQuery('#nav-list');
var preloader = selectQuery('#loading-container')
togglebtn.addEventListener('click',()=>{
    menubars.classList.toggle('active');
});

window.addEventListener('load',()=>{
    setTimeout(function(){
        preloader.style.display ='none'; 
    },2500);  
});