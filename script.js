// Guardamos los elementos del formualario en constantes de JS para poder manipularlos


const nombre = document.getElementById('username');
const apellidoPaterno = document.getElementById('apellidoPaterno');
const apellidoMaterno = document.getElementById('apellidoMaterno');
const email = document.getElementById('email');
const calle = document.getElementById('address');
const colonia = document.getElementById('colonia');
const codigoPostal = document.getElementById('codigoPostal');
const municipio = document.getElementById('municipioDelegacion');
const estado = document.getElementById('estado');
const generarContrato = document.getElementById('generarContrato');
const contractForm = document.getElementById('contractForm');
const tabla = document.getElementById('registroContratos');
const array = [];




// Evento para mostrar la vista previa de la imagen seleccionada INE
document.getElementById('contractFile1').addEventListener('change', function(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const imagePreview = document.getElementById('imagePreview1');

    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const img = new Image();
            img.src = reader.result;
            img.classList.add('preview-image');
            img.style.maxWidth = '50%'; // Limitar el tamaño de la imagen
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
        }
        reader.readAsDataURL(file);

        
    }
});


// Evento para mostrar la vista previa de la imagen seleccionada CURP
document.getElementById('contractFile2').addEventListener('change', function(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const imagePreview = document.getElementById('imagePreview2');

    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const img = new Image();
            img.src = reader.result;
            img.classList.add('preview-image');
            img.style.maxWidth = '50%'; // Limitar el tamaño de la imagen
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
        }
        reader.readAsDataURL(file);

    }
});


// Evento para mostrar la vista previa de la imagen seleccionada Comprobante de domicilio
document.getElementById('contractFile3').addEventListener('change', function(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const imagePreview = document.getElementById('imagePreview3');

    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const img = new Image();
            img.src = reader.result;
            img.classList.add('preview-image');
            img.style.maxWidth = '50%'; // Limitar el tamaño de la imagen
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});



//Evento que se ejecuta cuando se hace clic en el boton de generar contrato. Se guardas los datos nombre, apellido paterno y apellido materno en un array dentro del documento array.js y se muestran en consola.


generarContrato.addEventListener('click', function(event) {
    event.preventDefault();

    const datos = {
        nombre: nombre.value,
        apellidoPaterno: apellidoPaterno.value,
        apellidoMaterno: apellidoMaterno.value,
        email: email.value,
        calle: calle.value,
        colonia: colonia.value,
        codigoPostal: codigoPostal.value,
        municipio: municipio.value,
        estado: estado.value,
    };

    console.log(datos);

    
    
    //Se guardan los datos en el array llamado array, y al momento de guardar tambien se genera un campo adicional llamado folio que se genera de forma consecutiva con el formato CT0001, CT0002, CT0003, etc., en ese orden de nomenclatura. Se cuida que no se sustituyan los datos anteriores al momento de guardar un nuevo contrato, es por eso que se genera el folio con la longitud del array + 1, para que siempre se genere un folio consecutivo.

    array.push({

        nombre: nombre.value,
        apellidoPaterno: apellidoPaterno.value,
        apellidoMaterno: apellidoMaterno.value,
        email: email.value,
        calle: calle.value,
        colonia: colonia.value,
        codigoPostal: codigoPostal.value,
        municipio: municipio.value,
        estado: estado.value,
        folio: `CT${(array.length + 1).toString().padStart(4, '0')}`
    });




    //Se muestra el array en consola

    console.log(array);

    //El arreglo se guarda en el localStorage para que pueda ser consultado desde otras paginas

    localStorage.setItem('datos', JSON.stringify(array));


    //Se muestra un mensaje de confirmación de que el contrato se ha generado correctamente, con el numero de folio correspondiente

    alert(`Contrato generado correctamente, el folio de su contrato es: ${array[array.length - 1].folio}`);


    
    //Se limpian los campos del formulario

    contractForm.reset();
    document.getElementById('imagePreview1').innerHTML = '';
    document.getElementById('imagePreview2').innerHTML = '';
    document.getElementById('imagePreview3').innerHTML = '';

});



//Se obtiene el array en JSON que esta guardado en el localStorage y se muestra en consola

const datos = JSON.parse(localStorage.getItem('datos'));

console.log(datos);


