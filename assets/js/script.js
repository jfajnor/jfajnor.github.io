$(document).ready(function(){

	$(".grid-container").hover(function(){
		$(this).css("border-color", "#EDEDED");
		$(this).css("cursor", "pointer");
		}, function() {
		$(this).css("border-color", "#929292");
		$(this).css("cursor", "auto");
	});

	$("#sugarloaf").hover(function(){
		$("#sugarloaf-text").css("color", "#EDEDED");
		$("#sugarloaf-text").css("cursor", "pointer");
		}, function() {
		$("#sugarloaf-text").css("color", "#929292");
		$("#sugarloaf-text").css("cursor", "auto");
	});

	$("#auburn").hover(function(){
		$("#auburn-text").css("color", "#EDEDED");
		$("#auburn-text").css("cursor", "pointer");
		}, function() {
		$("#auburn-text").css("color", "#929292");
		$("#auburn-text").css("cursor", "auto");
	});

	$("#skyline").hover(function(){
		$("#skyline-text").css("color", "#EDEDED");
		$("#skyline-text").css("cursor", "pointer");
		}, function() {
		$("#skyline-text").css("color", "#929292");
		$("#skyline-text").css("cursor", "auto");
	});

	$("#halfdome").hover(function(){
		$("#halfdome-text").css("color", "#EDEDED");
		$("#halfdome-text").css("cursor", "pointer");
		}, function() {
		$("#halfdome-text").css("color", "#929292");
		$("#halfdome-text").css("cursor", "auto");
	});
	
})