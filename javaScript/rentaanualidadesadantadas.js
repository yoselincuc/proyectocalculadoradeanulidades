var formulario = document.forms.formulario_RentaAnAdelantadas
var resultado = document.getElementById("res-ANadelantada")

formulario.monto.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let s = parseFloat(formulario.monto.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = s* (i/(((1+i)**n)-1))*(1/(1+i))
//s*((((1 + i)**n)-1))
// r*((1+i)*((((1+i)**n)-1)/(i)))
//let b = (i/(((1+i)**n)-1))

//let c = (1/(1+i))

//let total = s* b * c

    resultado.innerHTML = total.toFixed(2)
}