

function DarkMode(){
    document.querySelector('body').style.backgroundColor='black';
    let container=document.querySelector('.container');
    container.style.backgroundColor='#33a9db';
    container.style.boxShadow='20px 20px 60px #2b90ba,-20px -20px 60px #3bc2fc';
    

    let input=document.querySelectorAll('.input-field input');
    for(i=0;i<input.length;i++)
        input[i].style.backgroundColor='#33a9db';

   
    document.querySelector('button').style.backgroundColor='#33a9db';


}

function LightMode(){
    document.querySelector('body').style.backgroundColor='#E0E0E0';
    let container=document.querySelector('.container');
    container.style.backgroundColor='#e0e0e0';
    container.style.boxShadow='5px 5px 10px #bebebe,-5px -5px 10px #ffffff';



    let input=document.querySelectorAll('.input-field input');
    for(i=0;i<input.length;i++)
        input[i].style.backgroundColor='#e0e0e0';

    document.querySelector('button').style.backgroundColor='#e8e8e8';
}

// Get a reference to the checkbox element
const myCheckbox = document.getElementById('myCheckbox');

// Add an event listener for the 'change' event
myCheckbox.addEventListener('change', function() {

    check=this.checked;
    check?DarkMode():LightMode();
});



/***** Now lets work with OTP code generation ***** */

var value=document.querySelectorAll('.input-value');
var otp_code1="";
for(i=0;i<value.length;i++){
    value[i].addEventListener('input',(event)=>{
        if(event.data)otp_code1+=event.data;
        else otp_code1=otp_code1.slice(0,-1);
        console.log(otp_code1)
        if(otp_code1==otp_code2)
            {
                var display=document.getElementById('otp-output');
                display.innerHTML='OTP has been validated Successfully!!!';
                display.style.color="green"
            }
        else{
            var display=document.getElementById('otp-output');
                display.innerHTML='OTP does not match';
                display.style.color="red"
        }

    })
}



/*  Rese button */
var otp_code2=Math.floor(1000 + Math.random() * 9000);
document.querySelector('#otp-code').innerHTML=otp_code2;
function reset(){
    otp_code1="";
    document.querySelector('#otp-output').innerHTML='';
    otp_code2=Math.floor(1000 + Math.random() * 9000);
    document.querySelector('#otp-code').innerHTML=otp_code2;

    inputField=document.querySelectorAll('.input-field input');
    inputField.forEach(element => {
        element.value='';
    });
}




/************  OTP code comparism  **************/
