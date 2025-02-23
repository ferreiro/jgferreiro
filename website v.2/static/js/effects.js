	var solidBg = $('.panelBackgroundSolid'),
		background = $('.panelBackground'),
		panel = $('.panel'),
		footer = $('.footerWrap');
	
	initialEffect();

	function initialEffect() { 
		var time = 800;

		solidBg.slideDown(time);
		background.delay(time).fadeIn(time + 200);
		footer.delay(time).fadeIn(time / 2);
		panel.delay(time).fadeIn(time + 200); 
 	}

 	$('#openPhoto').click(function() { 
 		$('.modal').fadeIn(0);
 		$('.modal div').hide(0);
 		$('.modalProfileZoom').fadeIn(0);
 		$('.panelWrap').addClass("blur");
 		$('.footerWrap').addClass("blur");
 		return false;
 	});
 	
 	$('.openContact').click(function() { 
 		$('.modal').fadeIn(0);
 		$('.modal div').hide(0);
 		$('.modalContact').fadeIn(0);
 		$('.panelWrap').addClass("blur");
 		$('.footerWrap').addClass("blur");
 		return false;
 	});

 	$('.modalClose').click(function() { 
 		$('.modal').hide(0); 
 		$('.panelWrap').removeClass("blur");
 		$('.footerWrap').removeClass("blur");
 		$('.modalProfileZoom').hide(0);
 	});


