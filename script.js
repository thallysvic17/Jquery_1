
$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDeFault();

        const endereconovaimagem = $('endereco-image-nova').val();

        const novoitem =$('<li style="display: none"></li>');

        $(`<img src="${endereconovaimagem}" /> `).appendTo(novoitem);

        $(`
            <div class="overlay-image-link">
                <a href="${endereconovaimagem}" tittle='ver imagem em tamanho real' target="_blank">
                ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoitem);

        $(novoitem).appendTo("ul");
        $(novoitem).fadeIn(1000);
        $('endereco-imagem-nova').val('')
    })
})
