$(document).ready(function()
{
  $('#gototop').on('click',function(e)
  {
    $('body,html').animate({scrollTop:0},800);
  });
})
