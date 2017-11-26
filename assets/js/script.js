$(document).ready(function(){

	//JQuery Function #!: hover
	$(".grid-container").hover(function(){
		//JQuery Function #2: css
		$(this).css("border-color", "#EDEDED");
		$(this).css("cursor", "pointer");
		$(this).css("transform", "scale(1.05)");
		$(this).css("border-color", "#086328");
		$(this).css("z-index", "100");
		}, function() {
		$(this).css("border-color", "#929292");
		$(this).css("cursor", "auto");
		$(this).css("transform", "scale(1)");
		$(this).css("border-color", "#929292");
		$(this).css("z-index", "0");
	});

	$("#sugarloaf").hover(function(){
		$("#sugarloaf-text").css("color", "white");
		$("#sugarloaf-text").css("cursor", "pointer");
		}, function() {
		$("#sugarloaf-text").css("color", "#929292");
		$("#sugarloaf-text").css("cursor", "auto");
	});

	$("#auburn").hover(function(){
		$("#auburn-text").css("color", "white");
		$("#auburn-text").css("cursor", "pointer");
		}, function() {
		$("#auburn-text").css("color", "#929292");
		$("#auburn-text").css("cursor", "auto");
	});

	$("#skyline").hover(function(){
		$("#skyline-text").css("color", "white");
		$("#skyline-text").css("cursor", "pointer");
		}, function() {
		$("#skyline-text").css("color", "#929292");
		$("#skyline-text").css("cursor", "auto");
	});

	$("#halfdome").hover(function(){
		$("#halfdome-text").css("color", "white");
		$("#halfdome-text").css("cursor", "pointer");
		}, function() {
		$("#halfdome-text").css("color", "#929292");
		$("#halfdome-text").css("cursor", "auto");
	});



	$(".rimage").hover(function(){
		$(this).css("opacity", ".4");
		$(".rplan").css("opacity", "1");
		$(this).css("cursor", "pointer");
		}, function() {
		$(this).css("opacity", "1");
		$(".rplan").css("opacity", "0");
		$(this).css("cursor", "auto");
	});

	//JQuery Function #3: click
	$('#sun-text').click(function() {
  		$('html, body').scrollTop($(document).height() - $(window).height());
	});
	

	$(".limage").hover(function(){
		$(this).css("opacity", ".4");
		$(".lplan").css("opacity", "1");
		$(this).css("cursor", "pointer");
		}, function() {
		$(this).css("opacity", "1");
		$(".lplan").css("opacity", "0");
		$(this).css("cursor", "auto");
	});

	// Smooth scroll for anchors
	
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// Waypoints

	var waypoints = $('#one').waypoint(function(direction) {
	  if (direction === 'up') {
	    //JQuery Function #4: addClass
	    $('#one').addClass('animated');
	    $('#one').css('opacity', '1');
	  }
	}, {
	  offset: '-5%'
	});

	var waypoints = $('#two').waypoint(function(direction) {
	  if (direction === 'up') {
	    $('#two').addClass('animated');
	    $('#two').css('opacity', '1');
	  }
	}, {
	  offset: '-5%'
	});

	var waypoints = $('#three').waypoint(function(direction) {
	  if (direction === 'up') {
	    $('#three').addClass('animated');
	    $('#three').css('opacity', '1');
	  }
	}, {
	  offset: '-5%'
	});

	var waypoints = $('#four').waypoint(function(direction) {
	  if (direction === 'up') {
	    $('#four').addClass('animated');
	    $('#four').css('opacity', '1');
	  }
	}, {
	  offset: '-5%'
	});

	
	// Starting webpage at bottom
	$(function() {
		//(potential) JQuery Function #5: scrollTop
  		$('html, body').scrollTop($(document).height() - $(window).height());
	});
	
});