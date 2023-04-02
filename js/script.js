function ExibirMenu(){
    MobileMenu = document.getElementById("MobileMenu");
    if(MobileMenu.style.display == "none"){
        MobileMenu.style.display = "block";
    }else
    if(MobileMenu.style.display == "block"){
        MobileMenu.style.display = "none";
    }
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
