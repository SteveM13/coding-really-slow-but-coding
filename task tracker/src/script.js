

const fecha = document.getElementById('fecha');
const inputBox = document.getElementById('input-box');

const listaContainer = document.getElementById('listas');
const button = document.getElementById('button');



function agregarTarea() {
    if (inputBox.value === '') {
        alert("Por favor ingresa una tarea");
    }

    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listaContainer.appendChild(li);
// aun no logro hacer que se agregue el inico del checkbox y el boton de eliminar a cada tarea nueva
//que ya se agrega en la lista



        inputBox.value = '';
        
    }

    
}    

// Agregar tarea al presionar Enter
inputBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

