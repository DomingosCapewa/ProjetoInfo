const pontosPorCep = {
    "12345-678": [
        "Endereço 1, Cidade Fictícia",
        "Endereço 2, Cidade Fictícia",
        "Endereço 3, Cidade Fictícia",
        "Endereço 4, Cidade Fictícia",
        "Endereço 5, Cidade Fictícia"
    ],
    "87654-321": [
        "Endereço A, Cidade Exemplo",
        "Endereço B, Cidade Exemplo",
        "Endereço C, Cidade Exemplo",
        "Endereço D, Cidade Exemplo",
        "Endereço E, Cidade Exemplo"
    ],
    "11223-445": [
        "Endereço X, Cidade Teste",
        "Endereço Y, Cidade Teste",
        "Endereço Z, Cidade Teste",
        "Endereço W, Cidade Teste",
        "Endereço V, Cidade Teste"
    ]
};

function buscarPontos() {
    const cep = document.getElementById("cepInput").value;
    const enderecos = pontosPorCep[cep];

    const resultado = document.getElementById("resultado");
    const lista = document.getElementById("enderecos");

    lista.innerHTML = ""; // Limpar lista anterior

    if (enderecos) {
        enderecos.forEach(endereco => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
            a.target = "_blank";  // Abre em nova aba
            a.textContent = endereco;
            li.appendChild(a);
            lista.appendChild(li);
        });
    } else {
        lista.innerHTML = "<li>Não encontramos pontos de coleta para este CEP.</li>";
    }
}
