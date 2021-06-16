document.addEventListener('DOMContentLoaded', function(){
var map = L.map('mapa').setView([-28.46905, -65.779009], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-28.46905, -65.779009]).addTo(map)
    .bindPopup('GLDWebCamp 2021 <br> Boletos ya disponibles')
    .openPopup()
    .bindTooltip('Un Tooltip')
    .openTooltip();


const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const pase_dia = document.getElementById('pase_dia');
const pase_completo = document.getElementById('pase_completo');
const pase_dosdias = document.getElementById('pase_dosdias');

//Botones y divs
const calcular = document.getElementById('calcular');
const errorDiv = document.getElementById('error');
const btnRegistro = document.getElementById('btnRegistro');
let lista_productos = document.getElementById('lista-productos');
const suma = document.getElementById('suma-total')

const regalo = document.getElementById('regalo');

//Extras
const camisas = document.getElementById('camisa_evento')
const etiquetas = document.getElementById('etiquetas')




const calcularMontos = () =>{
    if(regalo.value ===''){
        alert('Debes elegir un regalo');
        regalo.focus();
    }else{
        const boletosDia = parseInt(pase_dia.value, 10) || 0;
         boleto2Dias = parseInt(pase_dosdias.value, 10) || 0;
         boletoCompleto = parseInt(pase_completo.value, 10) || 0;
         cantCamisas = parseInt(camisas.value, 10) || 0;
         cantEtiquetas = parseInt(etiquetas.value, 10) || 0;


        const totalPagar = (boletosDia *30) + (boleto2Dias *45) + (boletoCompleto *50) + ((cantCamisas * 10) * 0.93) + (cantEtiquetas * 2)
        //console.log(totalPagar);
        
        listadoProductos = [];

        if(boletosDia >= 1){
            listadoProductos.push(boletosDia + ' Pases por dia');
        }if(boleto2Dias >= 1){
            listadoProductos.push(boleto2Dias + ' Pases por 2 dias');
        } if(boletoCompleto >=1){
            listadoProductos.push(boletoCompleto + ' Pases Completos');
        }
        if(cantCamisas >= 1){
            listadoProductos.push(cantCamisas + ' Camisas');
        }if(cantEtiquetas >= 1){
            listadoProductos.push(cantEtiquetas + ' Etiquetas');
        }
        
        lista_productos.style.display = 'block'
        lista_productos.innerHTML = '';
        for (let i = 0; i < listadoProductos.length; i++) {
            lista_productos.innerHTML += listadoProductos[i] + '</br>';
            
        }
        console.log(listadoProductos);

        suma.innerHTML = "$" + totalPagar.toFixed(2);
    }
}

calcular.addEventListener('click', calcularMontos);


const mostrarDias = () => {
    const boletosDia = parseInt(pase_dia.value, 10) || 0;
        boleto2Dias = parseInt(pase_dosdias.value, 10) || 0;
        boletoCompleto = parseInt(pase_completo.value, 10) || 0;

    let diasElegidos = [];

    if(boletosDia > 0){
        diasElegidos.push('viernes')
        console.log(diasElegidos);
    }
    if(boleto2Dias > 0){
        diasElegidos.push('viernes', 'sabado')
        console.log(diasElegidos);
    }
    if(boletoCompleto > 0){
        diasElegidos.push('viernes', 'sabado', 'domingo')
        console.log(diasElegidos);
    }

    for (let i = 0; i < diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display = "block";
        
    }
}
pase_dia.addEventListener('blur', mostrarDias);
pase_dosdias.addEventListener('blur', mostrarDias);
pase_completo.addEventListener('blur', mostrarDias);



function validarCampos() {
    if(this.value === ''){
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = 'Este campo es obligatorio';
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red'
    }else{
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #cccccc'
    }
}

function validarEmail (){
    if(this.value.indexOf('@') > -1){
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #cccccc'
    }else{
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = 'Este campo debe tener al menos una @';
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red'
    }
}

nombre.addEventListener('blur', validarCampos);
apellido.addEventListener('blur', validarCampos);
email.addEventListener('blur', validarCampos);
email.addEventListener('blur', validarEmail)

})

// pase_dia.addEventListener('click', ()=> {
//     console.log('hiciste click');
// })

//JQUERY

jQuery(document).ready(function(){
    
    //Programa de Conferencias
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click', function(){
        
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        const enlace = $(this).attr('href');
        //console.log(enlace);
        $(enlace).fadeIn(1000);
        return false;
    })


    //Animacion para los numeros
    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6}, 1200)
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15}, 1200)
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3}, 1500)
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9}, 1500)

    //Cuenta regresiva
    $('.cuenta-regresiva').countdown('2021/12/10 09:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    })

})
