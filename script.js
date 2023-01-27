
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
        const novoitem =$('<li></li>');
        $(`<img src="${endereconovaimagem}" /> `).appendTo(novoitem);
        $(`
            <div class="overlay-image-link">
                <a href="${endereconovaimagem}"target="_blank" title="Ver imagem em tamanho real">
                    ver imagem em tamaho real
                </a>
            </div>
        `).appendTo(novoitem);
        $(novoitem).appendTo("ul");
    })
})
