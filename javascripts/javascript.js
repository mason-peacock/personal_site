$('.button').hover(function() {
	$(this).css('background-color', 'green');
}, function() {
	$(this).css('background-color', '#00aced');
});


$('.button').click(function() {
	$(this).css('background-color', 'maroon');

});

$('.button').click(function() {
	$(this).html('<span class="glyphicon glyphicon-leaf"></span> Nice Click!');
	
});

