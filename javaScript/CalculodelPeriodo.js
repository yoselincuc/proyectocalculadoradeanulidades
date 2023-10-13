var formulario = document.forms.formulario_delCalculo
var resultado = document.getElementById("res-calculo-del-Periodo")

formulario.monto.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let s = parseFloat(formulario.monto.value)
    let r = parseFloat(formulario.renta.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = ((Math.log10(r)-(Math.log10(r-(i * s))))/(Math.log10(1+i)))

   // ((Math.log10(r)-(Math.log10(r)-(i * s)/(Math.log10(1+i)))))
 resultado.innerHTML = total.toFixed(2)
}

//(Math.log10(r)-(Math.log10(r-(i * s))))