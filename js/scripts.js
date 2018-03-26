$(document).ready(function(){
  var suits = ['spades', 'diamonds', 'clubs', 'hearts'];
  var values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  suits.forEach(function(suit) {
    values.forEach(function(value) {
      $('#card-list').append('<li>' + value + ' of ' + suit + '</li>');
    });
  });
});
