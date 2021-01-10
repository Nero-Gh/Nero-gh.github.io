var selectQuery = (element)=>document.querySelector(element);

var togglebtn = selectQuery('#toggle');
var menubars = selectQuery('#nav-list');
var main_content = selectQuery('main');
var main_header = selectQuery('header');
togglebtn.addEventListener('click',()=>{
    menubars.classList.toggle('active');
    main_content.classList.toggle('active');
    header.classList.toggle('active');
});

window.onclick =(event)=>{
    if(event.target.matches('.active')){
        if(main_header.classList.contains('active')){
            main_content.classList.remove('active');
        }
    }
}