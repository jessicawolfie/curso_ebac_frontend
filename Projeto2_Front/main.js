const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt= "emoji celebrando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt= "emoji decepcionado"/>'
const atividades = [] //array vazio
const notas = []

let linhas = '' //string vazia

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela () 
    atualizaMediaFinal () //chamar função
})

function adicionaLinha() { 
const inputNomeAtividade = document.getElementById('nome-atividade')
const inputNotaAtividade = document.getElementById('nota-atividade')

atividades.push(inputNomeAtividade.value)
notas.push(parseFloat(inputNotaAtividade.value))

let linha = '<tr>' //abrir 
linha += `<td>${inputNomeAtividade.value}</td>`
linha += `<td>${inputNotaAtividade.value}</td>`
linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>` //?interrogação = if : dois pontos = else 
linha += `</tr>` //fechar 11

linhas += linha

inputNomeAtividade.value = ''
inputNotaAtividade.value = ''
}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal (){
    let somaDasNotas = 0

    for(let i =0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    const media = somaDasNotas / notas.length // / = dividido
    console.log(media)
}