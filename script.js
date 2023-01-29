$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const listatarefa =$('#tarefas').val();
        const novoitem = $('<li><li/>');
        $(`<li>${listatarefa}</li>`).appendTo(novoitem);
        $(novoitem).appendTo("ul");
        $('li').click(function(){
            $(this).addclass("riscado");
        });    
    });
    $('#tarefa').val('');

});