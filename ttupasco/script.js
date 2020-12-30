var selectQuery = (element)=>document.querySelector(element);

var togglebtn = selectQuery('#toggle');
var menubars = selectQuery('#nav-list');

togglebtn.addEventListener('click',()=>{
    menubars.classList.toggle('active');
});