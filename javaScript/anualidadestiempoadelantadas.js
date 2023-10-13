var formulario = document.forms.formulario_tiempo_adelantadas
var resultado = document.getElementById("res-Antiempo_adelantadas")

formulario.monto.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let s = parseFloat(formulario.monto.value)
    let r = parseFloat(formulario.renta.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total =  ((((((((Math.log10(s*i)+r)))*(1+i))))-(Math.log10(((r)*(1+i)))))/(Math.log10((1+i))))


    resultado.innerHTML = total.toFixed(2)
}