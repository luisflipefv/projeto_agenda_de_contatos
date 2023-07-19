const form = document.getElementById("form-cadastro");
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeContato = document.getElementById("nome-contato");
  const telefoneContato = document.getElementById("telefone-contato");

  let linha = "<tr>";
  linha += `<td>${nomeContato.value}</td>`;
  linha += `<td>${telefoneContato.value}</td>`;
  linha += "</tr>";
  linhas += linha;

  const adicionaLinha = document.querySelector("tbody");
  adicionaLinha.innerHTML = linhas;

  nomeContato.value = "";
  telefoneContato.value = "";
});
