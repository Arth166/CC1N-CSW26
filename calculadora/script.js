function Calcular(){
    let ano_pessoa = document.getElementById("calculo").value;
    let ano_atual = new Date().getFullYear();

    if(ano_pessoa < 1920 || ano_pessoa > 2026)
        alert("coloque um ano valido")
    else document.getElementsByClassName("resultado")[0].innerHTML = ano_atual - ano_pessoa;
}

function Calcular2() {
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;
    let hoje = new Date()

    if (dia <= 0 || dia > 31 || mes == "00" || ano <= 1920 || ano > hoje.getFullYear()){
        alert("para de trollar ai meu, coloca a data direito")
    }
    else {
        let nascimento = new Date(`${ano}/${mes}/${dia}`)
        let aniversario = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())
        if (aniversario > hoje) {
            idade = hoje.getFullYear() - ano - 1;
        } 
        else {
            idade = hoje.getFullYear() - ano;
        }

        document.getElementById("resp2").innerHTML = `Sua idade é ${idade}`;
    }
}

function Calcular3() {
    let n1 = document.getElementById("num1").value
    let op = document.getElementById("opr").value
    let n2 = document.getElementById("num2").value
    let resul = 0
    if ((n1 === "" || n2 === "") && op === "00") {
    alert("oh great heavens, coloque valores por favor  ;(")
    return
    }
    else if (op === "00") {
    alert("vai colocar a operação 'selecione a operação' fera? kkkkkkk")
    return
    }
    else if (n1 === "" || n2 === "") {
    alert("o numero não pode ser vazio")
    return
    }

    switch(op) {
        case "+": resul = Number(n1) + Number(n2); break;
        case "-": resul = n1 - n2; break;
        case "*": resul = n1 * n2; break;
        default: resul = n1 / n2; break;
    }

    if(resul == 67){
        let audio = new Audio("./audio/six-seven.mp3")
        audio.play()
        document.getElementById("resp3").innerHTML = `o resultado é ${resul} (sixseveennnn)`
    }
    else {
        document.getElementById("resp3").innerHTML = `o resultado é ${resul}`

        if(resul == 42){
        let audio = new Audio("./audio/moranguete.mp3")
        audio.play()
    }

    }
    
}
