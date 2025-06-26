//1
function somar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("Resultado1").innerText = "Resultado:  " + (n1 + n2);
}
//2
function idade() {
    let idade = Number(document.getElementById("idade").value);
    if (idade >= 18) {
        document.getElementById("maiorIdade").innerText = "Você é maior de idade";
    }
    else {
        document.getElementById("maiorIdade").innerText = "Você é menor de idade";
    }
}
//3
function contarCaracteres() {
    let texto = (document.getElementById("texto").value);
    let resultado = (document.getElementById("resultado3"));
    resultado.textContent = "total de caracteres: " + texto.length;
}
// 4
function verificarParOuImpar() {
    let numero = Number(document.getElementById("num4").value);

    if (numero % 2 === 0) {
        document.getElementById("resultado4").innerText = "É par.";
    } else {
        document.getElementById("resultado4").innerText = "É ímpar.";
    }
} //5
function converterParaMaiusculas() {
    let nome = document.getElementById("nome").value;
    let resultado = document.getElementById("resultado5");
    resultado.textContent = nome.toUpperCase();
} //6
function compararNumeros() {
    let n1 = Number(document.getElementById("numA").value);
    let n2 = Number(document.getElementById("numB").value);
    let resultado = document.getElementById("resultado6");

    if (n1 > n2) {
        resultado.textContent = `O maior número é ${n1}.`;
    } else if (n2 > n1) {
        resultado.textContent = `O maior número é ${n2}.`;
    } else {
        resultado.textContent = "Os números são iguais.";
    }
}
function contarDeUmADez() {
    const divContador = document.getElementById("contador");
    divContador.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const p = document.createElement("p");
        p.textContent = i;
        divContador.appendChild(p);
    }
}
function calcularMedia() {
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let resultado = document.getElementById("resultado9");

    let media = (n1 + n2 + n3) / 3;

    if (media >= 6) {
        resultado.textContent = `Aprovado! Média: ${media.toFixed(2)}`;
    } else {
        resultado.textContent = `Reprovado. Média: ${media.toFixed(2)}`;
    }
}
function converterParaFahrenheit() {
    let celsius = Number(document.getElementById("celsius").value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    let resultado = document.getElementById("resultado10");

    resultado.textContent = `${celsius.toFixed(1)}°C = ${fahrenheit.toFixed(1)}°F`;
}
function verificarSenha() {
    let senha = document.getElementById("senhaInput").value;
    let mensagem = document.getElementById("mensagemSenha");

    if (senha === "1234") {
        mensagem.textContent = "Acesso permitido!";
    } else {
        mensagem.textContent = "Infelizmente a senha está incorreta. Vamos tentar de novo?";
    }
}
function contagemRegressiva() {
    const resultado = document.getElementById("resultado13");
    resultado.innerHTML = ""; // Limpa o conteúdo anterior

    for (let i = 10; i >= 1; i--) {
        const p = document.createElement("p");
        p.textContent = i;
        resultado.appendChild(p);
    }
}