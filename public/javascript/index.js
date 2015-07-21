/// <reference path="../../typings/tsd.d.ts" />

var main = function() {
	
	var scriptBtn = $("#script-work-btn");
	var scriptNavBtn = $("#script-nav-btn");
	
	var recordBtn = $("#record-work-btn");
	var recordNavBtn = $("#record-nav-btn");
	
	var editBtn = $("#edit-work-btn");
	var editNavBtn = $("#edit-nav-btn");
	
	var framingLeft = $("#framing-left"); 
	var framingCenter = $("#framing-center"); 
	var framingRight = $("#framing-right"); 
	
	// -------- Work Area Swaping Functionality ---------- //
	// -------- Scripting Button --------- //
	var changeToScripting = function() {
		var activeBtn = scriptBtn.siblings(".active");
		
		if (activeBtn != scriptBtn) {
			activeBtn.removeClass("active");
			scriptBtn.addClass("active");
			
			var activeComponent = $("#work-component-panel").children(".active");
			var scriptComponent = $("#script-component-panel");
			
			activeComponent.removeClass("active");
			activeComponent.hide();
			
			scriptComponent.addClass("active");
			//scriptComponent.show();
			scriptComponent.fadeIn(500);
		}
	}
	scriptBtn.click(changeToScripting);
	scriptNavBtn.click(changeToScripting);
	
	// -------- Recording Button --------- //
	var changeToRecording = function() {
		var activeBtn = recordBtn.siblings(".active");
		
		activeBtn.removeClass("active");
		recordBtn.addClass("active");
		
		var activeComponent = $("#work-component-panel").children(".active");
		var recordComponent = $("#record-component-panel");
		
		activeComponent.removeClass("active");
		activeComponent.hide();
		
		recordComponent.addClass("active");
		//recordComponent.show();
		recordComponent.fadeIn(500);
	};
	recordBtn.click(changeToRecording);
	recordNavBtn.click(changeToRecording);
	
	// -------- Editing Button --------- //
	var changeToEditing = function() {
		var activeBtn = editBtn.siblings(".active");
	
		activeBtn.removeClass("active");
		editBtn.addClass("active");
		
		var activeComponent = $("#work-component-panel").children(".active");
		var editComponent = $("#edit-component-panel");
		
		activeComponent.removeClass("active");
		activeComponent.hide();
		
		editComponent.addClass("active");
		//editComponent.show();
		editComponent.fadeIn(500);
	};
	editBtn.click(changeToEditing);
	editNavBtn.click(changeToEditing);
	// --------------------------------------------------//
	
	// -------- Frame Swaping Functionality ---------- //
	var setToLeftFraming = function() {
		var activeFrame = framingLeft.siblings(".active");
		activeFrame.removeClass("active");
		framingLeft.addClass("active");
	};
	var setToCenterFraming = function() {
		var activeFrame = framingCenter.siblings(".active");
		activeFrame.removeClass("active");
		framingCenter.addClass("active");
	};
	var setToRightFraming = function() {
		var activeFrame = framingRight.siblings(".active");
		activeFrame.removeClass("active");
		framingRight.addClass("active");
	};
	
	framingLeft.click(setToLeftFraming);
	framingCenter.click(setToCenterFraming);
	framingRight.click(setToRightFraming);
	// --------------------------------------------------//
	
	// Ensure only the scripting panel is visible at first
	$("#record-component-panel").hide();
	$("#edit-component-panel").hide();
	
	var player = videojs('viewport');
	player.ready(function() {
		//player.play();
	});
}


$(document).ready(main);