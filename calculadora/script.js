function Calcular(){
    let ano_pessoa = document.getElementById("calculo").value;
    let ano_atual = new Date().getFullYear();

    if(ano_pessoa < 1920 || ano_pessoa > 2026)
        alert("coloque um ano valido")
    else document.getElementsByClassName("resultado")[0].innerHTML = ano_atual - ano_pessoa;
}

function Calcular2(){
    let 
}

