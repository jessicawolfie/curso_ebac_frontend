$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true
    })

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00)00000-00000') // máscara p obrigar o usuário a digitar um numero de telefone correto

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.'
        },
        submitHandler: function(form) { //interceptar o evento de envio do e disparar uma função caso esteja invalido
            console.log(form)
        },
        invalidHandler: function(evento, validador) { //interceptar o clique de envio mas o formulário está invalido
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }  
    })

    $('.lista-veiculos button').click(function(){ //funçao p animar o html. quando usuário clicar no tenho interesse, ele vai ser direcionado p o formulário de contato.
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})