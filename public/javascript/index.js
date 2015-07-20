/// <reference path="../../typings/tsd.d.ts" />

var main = function() {
	
	$("#script-work-btn").click(function() {
		var scriptBtn = $("#script-work-btn");
		var activeBtn = scriptBtn.siblings(".active");
		
		activeBtn.removeClass("active");
		scriptBtn.addClass("active");
		
		var activeComponent = $("#work-component-panel").children(".active");
		var scriptComponent = $("#script-component-panel");
		
		activeComponent.removeClass("active");
		activeComponent.hide();
		
		scriptComponent.addClass("active");
		scriptComponent.show();
	});
	
	$("#record-work-btn").click(function() {
		var recordBtn = $("#record-work-btn");
		var activeBtn = recordBtn.siblings(".active");
		
		activeBtn.removeClass("active");
		recordBtn.addClass("active");
		
		var activeComponent = $("#work-component-panel").children(".active");
		var recordComponent = $("#record-component-panel");
		
		activeComponent.removeClass("active");
		activeComponent.hide();
		
		recordComponent.addClass("active");
		recordComponent.show();
	});
	
	$("#edit-work-btn").click(function() {
		var editBtn = $("#edit-work-btn");
		var activeBtn = editBtn.siblings(".active");
	
		activeBtn.removeClass("active");
		editBtn.addClass("active");
		
		var activeComponent = $("#work-component-panel").children(".active");
		var editComponent = $("#edit-component-panel");
		
		activeComponent.removeClass("active");
		activeComponent.hide();
		
		editComponent.addClass("active");
		editComponent.show();
	});
	
	$("#record-component-panel").hide();
	$("#edit-component-panel").hide();
	
	var player = videojs('viewport');
	player.ready(function() {
		//player.play();
	});
}


$(document).ready(main);