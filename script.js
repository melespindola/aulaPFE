function validarNome() {
    const nome = document.getElementById("input-nome").value.trim();

    if (nome.length < 3) {
        alert("Erro: o nome deve ter pelo menos 3 caracteres");
        return false;
    }

    return true;
}

function gerarTicket() {

    if (!validarNome()) {
        document.getElementById("ticket-resultado").style.display = "none";
        return;
    }

    const nomeRaw = document.getElementById("input-nome").value.trim();
    const nomeArray = nomeRaw.split(" ");

    let nomeFormatado;
    if (nomeArray.length === 1) {
        nomeFormatado = nomeArray[0];
    } else {
        const primeiroNome = nomeArray[0];
        const ultimoNome = nomeArray[nomeArray.length - 1];
        nomeFormatado = primeiroNome + " " + ultimoNome;
    }

    const dataAtual = new Date();
    const urgencia = document.getElementById("input-urgencia").value;

    let diasPrazo;
    if (urgencia === "alta") {
        diasPrazo = 2;
    } else if (urgencia === "média") {
        diasPrazo = 7;
    } else {
        diasPrazo = 10;
    }

    const dataPrazo = new Date();
    dataPrazo.setDate(dataAtual.getDate() + diasPrazo);

    document.getElementById("out-nome").innerText = nomeFormatado;
    document.getElementById("out-data").innerText = dataAtual.toLocaleDateString('pt-BR');
    document.getElementById("out-prazo").innerText = dataPrazo.toLocaleDateString('pt-BR');
    document.getElementById("ticket-resultado").style.display = "block";
}