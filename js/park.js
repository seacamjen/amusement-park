$(function(){
  var height = parseInt(prompt("Please put height in inches to see what rides are available."));
debugger;
  if ( height < 48) {
    $('#simple').show();
    $('#simple1').addClass("highlighted");
  } else if (height >= 48 && height < 55) {
    $('#medium').show();
    $('#medium1').addClass("highlighted");
  } else {
    $('#crazy').show();
    $('#crazy1').addClass("highlighted");
  }
});
