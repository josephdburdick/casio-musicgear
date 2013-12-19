if ($('.dl').length > 0){
	$('.dl').each(function(){
		//var imgLight = $(this).find('.light');
		var imgUrl = $(this).data('ajax');
		$(this).append('<div class="loader-222"></div>');
		$(this).addClass('product').css({backgroundImage: 'url('+imgUrl+')'}); //.prepend('<img src="'+imgUrl+'" class="product">');
		var productImg = $(this).find('.product');
		var loader = $(this).find('.loader-222');
			if (Modernizr.multiplebgs){
				productImg.addClass('opacity0');
				productImg.transition({opacity:'1'},2000,function(){productImg.removeClass('opacity0')});
				loader.transition({opacity:'0'},800,function(){loader.hide()});
			}	
			else{ // IE8-
				loader.hide();
				productImg.css('opacity','1').removeClass('opacity0');
			}
	});
}
if ($('.productselector li').length > 6){
	
	var a = $('.productselector li');
	for( var i = 0; i < a.length; i+=6 )
	    a.slice(i, i+6).wrapAll('<li class="royalSlide"><div class="float-center"><ul></ul></div></li>');
	$('.productselector.container > ul').wrapAll('<div id="royal-productselector" class="royalSlider default"><ul class="royalSlidesContainer"><div class="container float-center productselector"></div></ul><div class="curtain top"></div></div>');
	$('#royal-productselector').royalSlider({
        directionNavAutoHide: true,
        slideTransitionSpeed:400,               
    	slideTransitionEasing:"easeInOutQuint",
		slideshowEnabled: false,                  
		directionNavEnabled: false,
		hideArrowOnLastSlide:true,
   		keyboardNavEnabled:false,
   		nonDraggableClassEnabled: true	
    });  
}

$('.productselector a.kb').hover(function(){
	$(this).stop().transition({color:'#ffffff'},200).find('span.dl').stop().transition({top: '50%'},300)
},function(){
	$(this).not('.active').stop().transition({color:'#ccc'},200).not('.active').find('span.dl').stop().transition({top: '40%'},300)
})

$('.productselector a.kb').click(function(){
	$('.productselector a.kb').not(this).transition({color:'#ccc',textShadow:'0 0 0 #000'},200).find('span.dl').transition({top: '40%'},300).end().not(this).removeClass('active');
	$(this).transition({color:'#b93a3e',textShadow:'0 0px 3px #000,0 0 20px #b93a3e'},600).addClass('active');
});

$('.productselector a.kb.active').trigger('click').find('span.dl').stop().transition({top: '50%'},300);


			
