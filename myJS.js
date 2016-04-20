

$('input[name=rn]').click(function() {
  $('#room').html("Romm: #" + $('input[name=rn]:checked').val()+  "<i class='mdi-navigation-arrow-drop-down'></i>")
});