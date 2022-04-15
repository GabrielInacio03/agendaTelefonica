$(document).ready(function(){
	$('.tabs').tabs();
    //SEU CÓDIGO AQUI
    var codigo = 0;
    var documento = $(document);

    $("#addTelefone").blur(function(){
        
        var checandoTel = checarTelefone($("#addTelefone").val());

        if(checandoTel == false)
        {           
            $('#addTelefone').addClass("red");
        } else {
            $('#addTelefone').removeClass("red");
        }
    });

    $('#btn-add').on('click', function(){        
        codigo++;
        let nome = $('#addNome').val();
        let telefone = $("#addTelefone").val();
                
        let linhas = $('#lista');

        let linha = $('<tr id="'+codigo+'">');
        let ColCodigo = $('<td class="codigo">');
        let Colnome = $('<td class="nome">');
        let Coltelefone = $('<td class="telefone">');  
        let Coleditar = $('<td class="edit">').html('<a href="#"><i class="material-icons">edit</i></a>');
        let Colexcluir = $("<td class='excluir'>").html("<a href='#'><i class='material-icons'>delete_forever</i></a>");

        ColCodigo.html(codigo).data("value", codigo);
        Colnome.html(nome).data("value", nome);
        Coltelefone.html(telefone).data("value", telefone);

        linha.append(ColCodigo);
        linha.append(Colnome);
        linha.append(Coltelefone);
        linha.append(Coleditar);
        linha.append(Colexcluir);
        
        linhas.append(linha);
    });            


    documento.on('click','.edit', function(){
        $('.tabs').tabs('select','up');

        $('#upNome').empty();
        $('#upTelefone').empty();
       
        let self = $(this);
        let linha = self.closest("tr");

        let codigo = $('.codigo', linha).text();
        let nome = $('.nome', linha).text();
        let telefone = $('.telefone', linha).text();
        
        $('#upId').val(codigo);
        $('#upNome').val(nome);
        $('#upTelefone').val(telefone);

    });
    $('#btn-up').on('click', function(){
       
        let linhas = $('#lista');
        var self = $(this);
        var linha = self.closest("tr")[0];

        var linhaNova = $('<tr>');

        let codigo = $('.codigo', linha);
        let nome = $('.nome', linha);
        let telefone = $('.telefone', linha);

        codigo = $('#upId').val();
        nome = $('#upNome').val();
        telefone = $('#upTelefone').val();
        
        linhas.find('tr#'+codigo, linha).remove(linha);

        let linhaEditada = linhaNova;
        let ColCodigo = $('<td class="codigo">');
        let Colnome = $('<td class="nome">');
        let Coltelefone = $('<td class="telefone">');  
        let Coleditar = $('<td class="edit">').html('<a href="#"><i class="material-icons">edit</i></a>');
        let Colexcluir = $("<td class='excluir'>").html("<a href='#'><i class='material-icons'>delete_forever</i></a>");
        
        ColCodigo.html(codigo);
        Colnome.html(nome);
        Coltelefone.html(telefone);

        linhaEditada.append(ColCodigo);
        linhaEditada.append(Colnome);
        linhaEditada.append(Coltelefone);
        linhaEditada.append(Coleditar);
        linhaEditada.append(Colexcluir);
        
        linhas.append(linhaEditada);

    });
    documento.on('click','.excluir', function(){
        let self = $(this);
        let linha = self.closest("tr");
        linha.remove();
        return false;
    });
    documento.on('click','#btn-find', function(){
       
        let linhas = $('#lista');
        var pesquisa = $('#findNome').val();  

        var tr = linhas.find('tr');
        for(var i =0; i <= tr.length; i++){
            var td = linhas.find('tr#'+i+' > .nome').text();
            var trEspecifica = linhas.find('tr#'+i);
            //tr.find('tr#'+i);
            if(td === pesquisa){
                console.log("legal");
            } else{
                trEspecifica.hide();            
            }
        }
        
    });
    documento.on('click','#btn-show-all', function(){
       
        let linhas = $('#lista');
        var pesquisa = $('#findNome').val();  

        var tr = linhas.find('tr');
        tr.show()
      
    });
});