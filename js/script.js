var statusButton = 0;
function ExibirMenu(){
    MenuButton = document.getElementById('MenuButton');
    MobileContent = document.getElementById('MobileMenu');
    if(statusButton == 0){
        statusButton = 1;
        MobileContent.style.display = 'flex';
    }else
    if(statusButton == 1){
        statusButton = 0;
        MobileContent.style.display = 'none';
    }
}