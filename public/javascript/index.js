/// <reference path="../../typings/tsd.d.ts" />

var main = function() {
	var name = $('#name').text();
	name += '!!!';
	$('#name').text(name);
	
	var player = videojs('viewport');
	player.ready(function() {
		//player.play();
	});
}


$(document).ready(main);