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
        alert("Digite uma data de nascimento valida")
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

