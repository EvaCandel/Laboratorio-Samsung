const area = document.querySelectorAll('.area');
const imgError = document.querySelectorAll('.imgerror');
const imgSuccess = document.querySelectorAll('.imgsuccess');
const texterror = document.querySelectorAll('.errortext');
const expresion = { correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,} 
const label = document.querySelectorAll('label');
const button = document.querySelector('.button');
const title = document.querySelector('h1');
const p = document.querySelectorAll('p');

function send(){
    event.preventDefault()
    
    for(let i = 0; i < area.length; i++){
        if(area[i].value == ''){
            imgError[i].style.display = 'block';
            texterror[i].style.visibility = 'visible';
            area[i].style.border = '2.5px solid #D95555';
        } 

        else if(i == 0){
            imgSuccess[i].style.display = 'block';
            imgError[i].style.display = 'none';
            area[i].style.border = '2.5px solid #00ff00';
            p[i].style.visibility = 'hidden';
        } 

        else if(i == 1){
            if(!expresion.correo.test(area[i].value)){
                imgError[i].style.display = 'block';
                texterror[i].style.visibility = 'visible';
                texterror[i].innerHTML = 'El correo no es válido';
                area[i].style.border = '2.5px solid #D95555';
                let erroremail = `La dirección de correo ${area[i].value} no incluye el signo @.`;
                imgError[i].setAttribute('title', erroremail);
            } 
                
            else{
                imgSuccess[i].style.display = 'block';
                imgError[i].style.display = 'none';
                area[i].style.border = '2.5px solid #00ff00';
                p[i].style.visibility = 'hidden';
            }
        }

        else if(i == 2){ 
            if(area[i].value.length > 8){
                imgError[i].style.display = 'block';
                texterror[i].style.visibility = 'visible';
                texterror[i].innerHTML = 'No debe tener más de 8 caracteres';
                area[i].style.border = '2.5px solid #D95555';
            } 

            else{
                imgSuccess[i].style.display = 'block';
                imgError[i].style.display = 'none';
                area[i].style.border = '2.5px solid #00ff00';
                p[i].style.visibility = 'hidden';
            }    
        }
        
        else if(i == 3){
            if(area[i].value != area[2].value){
                imgError[i].style.display = 'block';
                texterror[i].style.visibility = 'visible';
                texterror[i].innerHTML = 'Las contraseñas no coinciden';
                area[i].style.border = '2.5px solid #D95555';

            } 
        
            else {
                imgSuccess[i].style.display = 'block';
                imgError[i].style.display = 'none';
                area[i].style.border = '2.5px solid #00ff00';
                p[i].style.visibility = 'hidden';

            }
        }      
              
    }   
        for(let i = 0; i < area.length; i++){
        label[i].style.marginTop = '0px';
        area[i].style.marginBottom = '0px';
        p[i].style.marginTop = '-15px';
    }

} 
