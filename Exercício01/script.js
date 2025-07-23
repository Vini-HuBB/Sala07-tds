function soma(){

    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")

    resposta.textContent = numero1 + numero2
}

function sub(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respSub")
    resp.textContent = numero3 - numero4
}

function mult(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var result = document.getElementById("respMult")
    result.textContent = numero5 * numero6
}

function div(){
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("respDiv")

    if(numero10 !== 0){
        res.textContent = numero7 / numero8
    }
    res.textContent = "Não se divide por 0"
}