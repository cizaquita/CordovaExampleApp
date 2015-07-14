$(function(){
  var currencies = [
    { value: 'A', data: 'llegar01.html' },
    { value: 'B', data: 'llegar01.html' },
    { value: 'C', data: 'llegar01.html' },
    { value: 'ABC', data: 'llegar01.html' },
    { value: 'Sitio A', data: 'llegar01.html' },
    { value: 'Sitio B', data: 'llegar01.html' },
    { value: 'Sitio C', data: 'llegar01.html' },
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
        // mapa.htmlVolver a Mapa</a>
      var thehtml = '<strong>Sitio de memoria:</strong> ' + suggestion.value + ' <br> <strong>Ir:</strong><br> <a class="regresar" href="' + suggestion.data + '" target="_self"><img src="imagenes/icono_mapa.svg" />' + suggestion.value + '</a>';
      $('#outputcontent').html(thehtml);
    }
  });
  

});