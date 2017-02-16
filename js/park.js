$(function(){
  var height = parseInt(prompt("Please put height in inches to see what rides are available."));

  if ( height < 48) {
    $('#simple').show();
  } else if (height >= 48 && height < 55) {
    $('#medium').show();
  } else {
    $('#crazy').show();
  }
});
