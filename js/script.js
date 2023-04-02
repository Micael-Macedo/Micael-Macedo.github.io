function ExibirMenu(){
    $('.mobile-nav').toggleClass("menu-toggle");
    $('.mobile-menu').toggleClass('open');
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>observer.observe(el));
$('.mobile-menu a').on('click', function (){
    ExibirMenu();
});
