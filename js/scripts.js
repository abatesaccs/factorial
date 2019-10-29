$(document).ready(function(){
  $("form#formOne").submit(function(event){
  event.preventDefault();
  var factorial = parseInt($("#factorial1").val());
  var result = 1;
  for (var index = 2; index < (factorial + 1); index ++) {
    result = result * index;
  }
alert(result);

});
});
