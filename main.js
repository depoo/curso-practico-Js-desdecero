const form = document.getElementById('form');
const botonSuma = document.getElementById('btnSuma');
const spanResult = document.getElementById('result');

botonSuma.addEventListener('click', sumaDeNumeros)

function sumaDeNumeros(){
    const sumando1 = document.getElementById('calculo1').value;
    const sumando2 = document.getElementById('calculo2').value;
    const resultadoSuma = parseInt(sumando1) + parseInt(sumando2);
    spanResult.innerText = `La suma de ${sumando1} + ${sumando2} = ${resultadoSuma}`
    form.reset()
}

/* *Primer manera de ejecutar el codigo presionando enter */
// const form = document.getElementById('form');
// const btnSuma = document.getElementById('btnSuma').addEventListener('keyup', sumaNumeros);
// /* *Funcion que convierte los strings en numeros y hace una suma con el boton */
// function sumaNumeros(event){
//     const sumando1 = document.getElementById('calculo1').value;
//     const sumando2 = document.getElementById('calculo2').value;
//     if (event.key == 'Enter') {
//         const resultadoSuma = parseInt(sumando1) + parseInt(sumando2);
//         spanResult.innerText = `La suma de ${sumando1} + ${sumando2} = ${resultadoSuma}`
//         form.reset()
//     }
// }

// window.onkeyup = sumaNumeros;
// document.onkeyup = sumaNumeros;

/* * manera de ejecutar el codigo presionando enter */
document.addEventListener('keyup', (e)=>{
    const sumando1 = document.getElementById('calculo1').value;
    const sumando2 = document.getElementById('calculo2').value;
    if (e.key == 'Enter') {
        const resultadoSuma = parseInt(sumando1) + parseInt(sumando2);
        spanResult.innerText = `La suma de ${sumando1} + ${sumando2} = ${resultadoSuma}`
        form.reset()
    }
})