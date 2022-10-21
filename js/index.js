//   declarar variables para vincular los objetos del formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formlogin');

//Generando o leyendo en¿ventos 
formulario.addEventListener('submit', login);

// Funciones a ejecutar
function login(e){
    e.preventDefault();
    
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == ''|| passwordVal == ''){
        return;  
    }
    
    console.log('el valor para user es:' + usuarioVal);
    console.log('el valorlor para pass es:' + passwordVal);  

}