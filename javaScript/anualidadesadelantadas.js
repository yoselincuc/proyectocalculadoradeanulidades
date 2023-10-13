var formulario = document.forms.formulario_anAdelantadas
var resultado = document.getElementById("res-AnualidadesAdelantadas")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.capitalizaciones.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let m = parseFloat(formulario.capitalizaciones.value)
    let j = parseFloat((formulario.interes.value)/100)
    let total = r*(((((1+(j/m)))**m) * (((((1+(j/m)))**(m*n))-1)/(j/m))) * ((j/m)/((((1+(j/m)))**m)-1)))

    resultado.innerHTML = total.toFixed(2)
}