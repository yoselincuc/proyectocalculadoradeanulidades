var formulario = document.forms.formulario_anAdelantadas
var resultado = document.getElementById("res-anAdelantadas")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = r*((1+i)*((((1+i)**n)-1)/(i)))
               
              // r*(((1+i)*(1+i)**n)-1)/(i)
    resultado.innerHTML = total.toFixed(2)
}