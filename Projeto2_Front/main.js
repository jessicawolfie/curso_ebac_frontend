const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt= "emoji celebrando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt= "emoji decepcionado"/>'
const atividades = [] //array vazio
const notas = []
const spanAprovado = '<spam class = "resultado aprovado">Aprovado</spam>'
const spanReprovado = '<spam class = "resultado reprovado">Reprovado</spam>'
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

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

if (atividades.includes(inputNomeAtividade.value)) { //para verificar se a atividade já foi inserida
    alert(`A atividade ${inputNomeAtividade.value} já foi inserida.`)
} else {
atividades.push(inputNomeAtividade.value)
notas.push(parseFloat(inputNotaAtividade.value))

let linha = '<tr>' //abrir 
linha += `<td>${inputNomeAtividade.value}</td>`
linha += `<td>${inputNotaAtividade.value}</td>`
linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>` //?interrogação = if : dois pontos = else 
linha += `</tr>` //fechar 11

linhas += linha
}

inputNomeAtividade.value = ''
inputNotaAtividade.value = ''
}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal (){
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal(){
    let somaDasNotas = 0

    for(let i =0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}
