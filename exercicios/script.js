//1
function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("Resultado1").innerText = "Resultado:  " + (n1 + n2);
}
//2
function idade(){
    let idade = Number(document.getElementById("idade").value);
    if(idade >=18){
        document.getElementById("maiorIdade").innerText = "Você é maior de idade";
    }
    else{
        document.getElementById("maiorIdade").innerText = "Você é menor de idade";
    }
}
//3
function contarCaracteres(){
    let texto = (document.getElementById("texto").value);
    let resultado = (document.getElementById("resultado3"));
    resultado.textContent = "total de caracteres: " + texto.length;
}
//4
