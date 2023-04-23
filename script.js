let header = document.querySelector('.header')
let toggle = document.querySelector('.menu-toggle');

//=============== SideBar ==============

toggle.addEventListener('click', ()=>{
    header.classList.toggle("active");
 })

//=============== Intersection Observer ==============

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
        entry.target.classList.remove('show');
    }
});
});
        const hiddenElms = document.querySelectorAll('.hidden');
        hiddenElms.forEach((el) => observer.observe(el));
