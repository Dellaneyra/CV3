const tabla = document.getElementById('registroContratosTabla');

//Se toman los datos que estan almacenados en el array dentro del localStorage y se muestran en consola.

console.log(JSON.parse(localStorage.getItem('datos')));
console.log("Script2.js");


/*Tomamos los datos del array que se encuentra dentro del localStorage y los mostramos dentro de la tabla llamada registroContratosTabla que tiene este formato 


<table class="table my-0" id="registroContratosTabla">
                                    <thead>
                                        <tr>
                                            <th id="nombreTabla">Nombre(s)</th>
                                            <th id="apellidoPaternoTabla">Apellido Paterno</th>
                                            <th id="apellidoMaternoTabla">Apellido Materno</th>
                                            <th id="folioTabla">Folio Contrato</th>
                                            <th id="fechaRegistroTabla">Fecha de Registro</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <!-- Dato de ejemplo  -->
                                        <tr>
                                            <td>Alejandro</td>
                                            <td>Garcia</td>
                                            <td>Rodriguez</td>
                                            <td>CT0001</td>
                                            <td>29/01/2024</td>
                                        </tr>
                                    </tbody>


    Buscando que cada dato que se agregue se muestre en su respectiva columna, debajo del dato de ejemplo que se encuentra en el tbody.
*/

const datos = JSON.parse(localStorage.getItem('datos'));

for (let i = 0; i < datos.length; i++) {
    const lista = document.createElement('tr');
    tabla.appendChild(lista);

    const nombreLista = document.createElement('td');
    nombreLista.textContent = datos[i].nombre;
    lista.appendChild(nombreLista);

    const apellidoPaternoLista = document.createElement('td');
    apellidoPaternoLista.textContent = datos[i].apellidoPaterno;
    lista.appendChild(apellidoPaternoLista);

    const apellidoMaternoLista = document.createElement('td');
    apellidoMaternoLista.textContent = datos[i].apellidoMaterno;
    lista.appendChild(apellidoMaternoLista);

    const folioLista = document.createElement('td');
    folioLista.textContent = datos[i].folio;
    lista.appendChild(folioLista);

    const fechaRegistro = document.createElement('td');
    fechaRegistro.textContent = '29/01/2024';
    lista.appendChild(fechaRegistro);



    //Creamos los botones ver contrato con formato de bootstrap
    const firma = document.createElement('button');
    firma.classList.add('btn', 'btn-primary', 'btn-sm');
    firma.textContent = 'Ver';
    firma.style.marginLeft = '10px';
    lista.appendChild(firma);
    

}

//Funcion que se ejecuta al dar clic al boton de ver contrato, que muestra una ventana con una imagen de un contrato a manera de ejemplo, asi como del ine, curp y comprobante de domiclio, dichas imagenes se toman de los assets de la carpeta img.



document.getElementById('registroContratosTabla').addEventListener('click', function (e) {

    if (e.target.textContent === 'Ver') {

        //Creamos el documento que se mostrara al dar clic en el boton de ver contrato


        //Aqui se crea la imagen del contrato
        //Imagen del contrato
        const contrato = document.createElement('img');
        contrato.src = './assets/img/exampleContract.jpg';
        contrato.style.width = '30%';
        contrato.style.height = 'auto';
        contrato.style.marginTop = '50px';
        contrato.style.marginBottom = '10px';
        contrato.style.display = 'block';
        contrato.style.border = '1px solid #000';
        contrato.style.borderRadius = '5px';
        contrato.style.boxShadow = '0px 0px 5px 0px #000';
        contrato.style.padding = '10px';
        contrato.style.boxSizing = 'border-box';
        contrato.style.margin = 'auto';
        contrato.style.marginTop = '80px';
        contrato.style.marginBottom = '10px';

        //Aqui se agrega la imagen de la ine cargada
        //Imagen de la INE
        const ine = document.createElement('img');
        ine.src = './assets/img/ine.png';
        ine.style.width = '30%';
        ine.style.height = 'auto';
        ine.style.marginTop = '50px';
        ine.style.marginBottom = '10px';
        ine.style.display = 'block';
        ine.style.border = '1px solid #000';
        ine.style.borderRadius = '5px';
        ine.style.boxShadow = '0px 0px 5px 0px #000';
        ine.style.padding = '10px';
        ine.style.boxSizing = 'border-box';
        ine.style.margin = 'auto';
        ine.style.marginTop = '80px';
        ine.style.marginBottom = '10px';


        //Aqui se agrega la imagen del CURP cargada
        //Imagen del CURP
        const curp = document.createElement('img');
        curp.src = './assets/img/curp.png';
        curp.style.width = '30%';
        curp.style.height = 'auto';
        curp.style.marginTop = '50px';
        curp.style.marginBottom = '10px';
        curp.style.display = 'block';
        curp.style.border = '1px solid #000';
        curp.style.borderRadius = '5px';
        curp.style.boxShadow = '0px 0px 5px 0px #000';
        curp.style.padding = '10px';
        curp.style.boxSizing = 'border-box';
        curp.style.margin = 'auto';
        curp.style.marginTop = '80px';
        curp.style.marginBottom = '10px';
        

        //Aqui se agrega la imagen del comprobante de domicilio cargada
        //Imagen del comprobante de domicilio
        const comprobante = document.createElement('img');
        comprobante.src = './assets/img/comprobante.png';
        comprobante.style.width = '30%';
        comprobante.style.height = 'auto';
        comprobante.style.marginTop = '50px';
        comprobante.style.marginBottom = '10px';
        comprobante.style.display = 'block';
        comprobante.style.border = '1px solid #000';
        comprobante.style.borderRadius = '5px';
        comprobante.style.boxShadow = '0px 0px 5px 0px #000';
        comprobante.style.padding = '10px';
        comprobante.style.boxSizing = 'border-box';
        comprobante.style.margin = 'auto';
        comprobante.style.marginTop = '80px';
        comprobante.style.marginBottom = '10px';


        //Aqui se crea el modal que contendra la imagen del contrato
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.style.display = 'block';
        modal.style.position = 'fixed';
        modal.style.zIndex = '1';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.overflow = 'auto';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.appendChild(contrato);
        modal.appendChild(ine);
        modal.appendChild(curp);
        modal.appendChild(comprobante);

        //Aqui se agrega el boton de cerrar el modal
        const cerrar = document.createElement('button');
        cerrar.textContent = 'Cerrar';
        cerrar.classList.add('btn', 'btn-danger', 'btn-sm');
        cerrar.style.position = 'absolute';
        cerrar.style.top = '0';
        cerrar.style.right = '0';
        cerrar.style.margin = '10px';
        cerrar.style.zIndex = '2';
        modal.appendChild(cerrar);


        //Aqui se agrega el modal al body del documento
        document.body.appendChild(modal);

        //Evento que se ejecuta al dar clic en el boton de cerrar el modal
        cerrar.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }
});






/*
Se crea un evento para que cada que se escriba en el input de busqueda, se busque en la tabla de registro de contratos, si el texto que se esta escribiendo coincide con alguno de los datos de la tabla, se mostrara solo el dato que coincida, si no se mpstrara solo el encabezado de la tabla y no se mostrara ningun dato
*/


//Evento para buscar en la tabla de registro de contratos

document.getElementById('busqueda').addEventListener('keyup', function (e) {

    //Se toma el texto que se esta escribiendo en el input de busqueda y se convierte a minusculas
    
    const texto = e.target.value.toLowerCase();
    //Se toman todas las filas de la tabla
    const filas = tabla.getElementsByTagName('tr');

    for (let i = 0; i < filas.length; i++) {
        const fila = filas[i];
        const celdas = fila.getElementsByTagName('td');
        let coincide = false;

        for (let j = 0; j < celdas.length; j++) {
            const celda = celdas[j];
            if (celda) {
                const textoCelda = celda.textContent.toLowerCase();
                if (textoCelda.indexOf(texto) !== -1) {
                    coincide = true;
                    break;
                }
            }
        }

        if (coincide) {
            //si el texto coincide con alguno de los datos de la tabla, se muestra la fila que coincide
            fila.style.display = '';

    
        } else {
            //Si no coincide, se oculta la fila
            fila.style.display = 'none';
        }
    }
});










