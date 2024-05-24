$('#cpf').mask('000.000.000-00')
$('#cep').mask('00.000-000')
$('#telefone').mask('(00)00000-00000') 

    $('cadastroForm').validate({
        rules: {
            cpf: {
                required: true
            },
            cep: {
                required: true,
            },
            telefone: {
                required: true
            }
        }
    })