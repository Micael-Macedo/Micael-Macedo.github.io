
function changeCertificados(buttonPage, divImg){
    var Certificado = document.getElementById('card_certificados').getElementsByClassName("card_certificados_img");
    for(i = 0; i < Certificado.length;i++){
        if(Certificado[i].style.display == 'block'){
            Certificado[i].style.display = "none";
            if(buttonPage == 'certificados_button_left'){
                if(i == 0){
                    i = Certificado.length;
                    Certificado[i-1].style.display = "block"; 
                }else{
                    Certificado[i-1].style.display = "block";
                }
                break;
            }else
            if(buttonPage == 'certificados_button_right'){
                if(i == Certificado.length - 1){
                    Certificado[0].style.display = "block";
                }else{
                    Certificado[i+1].style.display = "block";
                }
                break;
            }
        }
    }
}