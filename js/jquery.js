var projectionID = 0;

$(function (){
  $('#pesquisaDados').hide();
  $('#pesquisaDocumentos').hide();

  $('#tipoConsulta').change(function (){
    if ($('#tipoConsulta').val() == 'pesquisaDados'){
      $('#pesquisaDocumentos').hide();
      $('#pesquisaDados').show();
    } else if ($('#tipoConsulta').val() == 'pesquisaDocumentos'){
      $('#pesquisaDados').hide();
      $('#pesquisaDocumentos').show();
    } else {
      $('#pesquisaDados').hide();
      $('#pesquisaDocumentos').hide();
    }
  });

  $('#adiciona-conceito').click(function() {
  var conceito = $("#conceitos option:selected");
  var dado = $("#dados option:selected");
  projectionID += 1;
  
  $("#table-mostra-selecao tbody").append(
    "<tr><td>"+conceito.html()+"</td>" + 
    "<td>"+dado.html()+"</td>" +
    "<td><button class='btn btn-danger removeButton'>Remover</button></td></tr>");
  });


});

$(document).on('click', 'button.removeButton', function () { // <-- changes
  $(this).closest('tr').remove();
  return false;
});

$(document).on('click', 'a.createQueryButton', function () { // <-- changes
  $("#table-mostra-selecao tbody tr").remove();
  $('#pesquisaDados').hide();
  $('#pesquisaDocumentos').hide();
  $('#tipoConsulta').prop('selectedIndex', 0);

  // $('#baba').prop('selectedIndex',0);

  alert("Query criada!");

  return false;
});
