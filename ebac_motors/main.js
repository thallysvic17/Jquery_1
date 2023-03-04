$(document).ready(function() {
    $('#carousel-img').slick({
        autoplay: true,
    });
    $('.menuburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(00)-00000-0000'
    })

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
                required: true
            }
        },
        messages: {
            nome: 'Por favor, Insira Seu nome'
        },

        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos `)
            }
            }                       
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeveiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeveiculo);


        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})