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