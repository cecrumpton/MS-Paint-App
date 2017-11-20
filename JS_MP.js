$( document).ready(function(){

  //initial variables
  let totalRows;
  let totalColumns;
  let color1;

  initialize();
  function initialize() {
    totalRows = 60;
    totalColumns = 80;
    color1 = '#000000';
  }

  //generate the blocks
  for (let createBlock=0; createBlock<(totalRows*totalColumns*4); createBlock++) {
    let $blockDiv = $("<div></div>").attr('class', 'blockDiv');
    $("#canvas").append($blockDiv);
  }

  $('.blockDiv').mousedown(function() {
    $(this).css("background-color", color1);
    $('.blockDiv').on('mouseenter', function() {
      $(this).css("background-color", color1);
      });
  }).mouseup(function() {
    $('.blockDiv').off('mouseenter')
  });


  //button functions
  $('#clearButton').on('click', function () {
    $('.blockDiv').css("background-color", '#fff');
  });

  $('#changeColorButton').on('click', function () {
    color1 = $('#changeColorInput').val();
  });

}); //end document.ready
