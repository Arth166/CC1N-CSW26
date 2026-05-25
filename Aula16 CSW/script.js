//comandos de saida

document.writeln("fala!!!");
window.alert("oi")
document.getElementById("titulo").innerHTML = "posso"

//comandos de entrada

var nomeprompt = window.prompt("qual é o seu nome?") 

document.getElementById("name").innerHTML = "Olá! " + nomeprompt

let resp = window.confirm("vc gosta de java?")
if (resp) {
    document.getElementById("resposta").innerHTML = nomeprompt +" acha javascript massa"
}
else
{
    document.getElementById("resposta").innerHTML = nomeprompt + " ODEIA javascpit"
}

function enviarNome() {
    let RespostaNome = document.getElementById("NomeInput").value
    
    
    const resposta1 = document.getElementById("conteiner1")

    resposta1.innerHTML = "O nome escrito é " + RespostaNome

    resposta1.style.border = "#FF0000"
    resposta1.style.color = "#FF0000";
}