//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let botaoAdicionar = document.querySelector(".button-add");
let mostrarListaAmigos = document.getElementById("listaAmigos");
let inputAmigo = document.getElementById("amigo");
let botaoSortearAmigo = document.querySelector(".button-draw");
let resultado = document.getElementById("resultado");
const listaDeAmigos = [];

function adicionarAmigo(nome) {
  console.log("adicionarAmigo", nome);
  if (!nome.trim()) {
    alert("Por favor, insira um nome válido.");
    return;
  } else {
    const novoAmigo = { nome: nome.trim() };
    listaDeAmigos.push(novoAmigo);
  }
}

botaoAdicionar.addEventListener("click", function () {
  let nomeAmigo = inputAmigo.value;
  adicionarAmigo(nomeAmigo);

  mostrarListaAmigos.innerHTML = listaDeAmigos
    .map((amigo) => `<li>${amigo.nome}</li>`)
    .join("");

  inputAmigo.value = "";
});

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert("Não há amigos na lista para sortear.");
    return;
  }
  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSorteado = listaDeAmigos[indiceSorteado];
  resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado.nome}`;
  mostrarListaAmigos.innerHTML = [];
//   alert(`O amigo secreto sorteado é: ${amigoSorteado.nome}`);
}

botaoSortearAmigo.addEventListener("click", function () {
  sortearAmigo();
});
