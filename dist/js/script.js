(function($) {
	var keys = $('.keyboard').find('button[data-clickable]');
	var input = $('.input');
	var output = $('.output');
	var celsius = [];
	keys.click(function(e) {
		e.preventDefault();
		
		celsius.push($(this).text());
		
		input.text(celsius.join(''));
		
		var c = parseInt(input.text());
		
		var f = c * 9/5 + 32;
		
		output.children('p strong').text(f);
		
		
		
	})
})(jQuery);