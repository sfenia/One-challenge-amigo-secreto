let amigos = [];
let sorteados = new Set(); // Conjunto para armazenar nomes já sorteados

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

// Atualiza a exibição da lista de amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Adiciona amigo ao pressionar Enter
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let naoSorteados = amigos.filter(amigo => !sorteados.has(amigo));

    if (naoSorteados.length === 0) {
        alert("Todos os amigos já foram sorteados.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * naoSorteados.length);
    let amigoSorteado = naoSorteados[indiceSorteado];
    sorteados.add(amigoSorteado);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
//footer, muda o ano automaticamente
document.getElementById("ano").textContent = new Date().getFullYear();

