function calcularIdade() {
  const inputIdade = document.getElementById("idadeCanina").value;
  const elementoResultado = document.getElementById("resultado");

  const idadeCao = parseInt(inputIdade);

  if (isNaN(idadeCao) || idadeCao <= 0) {
    elementoResultado.style.color = "#d9534f";
    elementoResultado.innerText = "Por favor, insira uma idade válida maior que 0.";
    return;
  }

  let idadeHumana = 0;

  if (idadeCao === 1) {
    idadeHumana = 15;
  } else if (idadeCao === 2) {
    idadeHumana = 24;
  } else {
    idadeHumana = 24 + (idadeCao - 2) * 5;
  }

  // Exibe o resultado na tela
  elementoResultado.style.color = "#2b2b2b";
  elementoResultado.innerHTML = `Seu cãozinho tem aproximadamente <strong>${idadeHumana} anos</strong> em idade humana! 🐾`;
}