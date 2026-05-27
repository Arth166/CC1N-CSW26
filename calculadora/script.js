function Calcular(){
    let ano_pessoa = document.getElementById("calculo").value;
    let ano_atual = new Date().getFullYear();
    
    document.getElementsByClassName("resultado")[0].innerHTML = ano_atual - ano_pessoa;
}