var TechSkill = document.getElementById('TechSkills').getElementsByClassName('TechSkillsIcons');
var TechSkillDescription = document.getElementById('TechSkillsDescriptions').getElementsByClassName('TechSkillsDescriptions');
var statusSkill = 0;
function ShowDescription(ChosenTechSkill) {
    for (i = 0; i < TechSkill.length; i++) {

        if (i == ChosenTechSkill) {
            if(statusSkill == 0){
                TechSkillDescription[i].style.display = "block";
                statusSkill = 1;
            }else if(statusSkill == 1){
                TechSkillDescription[i].style.display = "none";
                statusSkill = 0;
            }
        } else
            if (i != ChosenTechSkill) {
                TechSkillDescription[i].style.display = "none";
            }
    }
}
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
