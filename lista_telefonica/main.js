function adicionarContato(){
    var nome = document.getElementById("nome").value
    var tel = document.getElementById("telefone").value

    var tabela = document.getElementById("corpo-tabela")

    var novaLinha = tabela.insertRow()
    var colunaNome = novaLinha.insertCell(0)
    var colunaTelefone = novaLinha.insertCell(1)

    colunaNome.innerHTML = nome
    colunaTelefone.innerHTML = tel

    var contatos = JSON.parse(localStorage.getItem('contatos')) || []
    contatos.push({nome: nome, telefone: tel})
    localStorage.setItem("contatos", JSON.stringify(contatos))

    document.getElementById("nome").value = ""
    document.getElementById("telefone").value = ""
}

window.onload = function (){
    var contatos = JSON.parse(localStorage.getItem('contatos')) || []
    var tabela = document.getElementById("tabela-corpo")

    contatos.forEach(function(contato) {
        var novaLinha = tabela.insertRow()
        var colunaNome = novaLinha.insertCell(0)
        var colunaTelefone = novaLinha.insertCell(1)

        colunaNome.innerHTML = contato.nome
        colunaTelefone.innerHTML = contato.telefone
    });
}