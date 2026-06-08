function mostrarResultado() {
alert("asdf")
    let pontos = {
        luz: 0,
        agua: 0,
        gas: 0,
        alimentacao: 0,
        transporte: 0
    };

    for (let i = 1; i <= 15; i++) {
        let resposta = document.querySelector(input[name="q${i}"].checked);

        if (!resposta) continue;

        let valor = resposta.value;

        if (i <= 3) {
            if (valor === "d") pontos.luz++;
            if (valor === "c") pontos.luz++;
        }

        if (i >= 4 && i <= 6) {
            if (valor === "d") pontos.agua++;
            if (valor === "c") pontos.agua++;
        }

        if (i >= 7 && i <= 9) {
            if (valor === "d") pontos.gas++;
            if (valor === "c") pontos.gas++;
        }

        if (i >= 10 && i <= 12) {
            if (valor === "d") pontos.alimentacao++;
            if (valor === "c") pontos.alimentacao++;
        }

        if (i >= 13 && i <= 15) {
            if (valor === "d") pontos.transporte++;
            if (valor === "c") pontos.transporte++;
        }
    }

    let ranking = [
        { nome: "Water.org", valor: pontos.agua },
        { nome: "Litro de Luz Brasil", valor: pontos.luz },
        { nome: "Instituto GAS", valor: pontos.gas },
        { nome: "Banco de Alimentos Municipal", valor: pontos.alimentacao },
        { nome: "TFD - Transporte", valor: pontos.transporte }
    ];

    ranking.sort((a, b) => b.valor - a.valor);

    let html = "<h2>ONGs recomendadas:</h2>";

    for (let i = 0; i < 3; i++) {
        html += `<p>${i + 1}. ${ranking[i].nome}</p>`;
    }

    document.getElementById("ongs").innerHTML = html;

    document.getElementById("quiz").style.display = "none";
    document.getElementById("resultado").style.display = "block";
}

function refazer() {
    location.reload();
}