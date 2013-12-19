if ($('.dl').length > 0){
	$('.dl').each(function(){
		//var imgLight = $(this).find('.light');
		var imgUrl = $(this).data('ajax');
		$(this).append('<div class=\"loader-222"\></div>')
		$(this).prepend('<img src="'+imgUrl+'" class="img-artist">');
		var artistImg = $(this).find('.img-artist');
		var loader = $(this).find('.loader-222');
		artistImg.addClass('opacity0');
			if (Modernizr.multiplebgs){
				artistImg.transition({opacity:'1'},2000,function(){artistImg.removeClass('opacity0')});
				loader.transition({opacity:'0'},800,function(){loader.hide()});
			}	
			else{ // IE8-
				loader.hide();
				artistImg.css('opacity','1').removeClass('opacity0');
			}
	});
}
if ($('.artistselector li').length > 6){
	
	$('.carousel').carouFredSel({
			responsive: false,
			width:'100%',
			height: 270,
			items: {
				visible: "variable",
				start: 2,
				minimum: 5,
				width: 320,
				height: 270
			},
			scroll: {
				items: 1,
				//fx: "crossfade",
				easing: "easeOutQuint",
				duration	: 1000,
				onAfter: function( oldItems, newItems, newSizes ) {
					//$(newItems).find('a').addClass('active');
				}
			},
			auto: false,
			next: {
				button: ".artistselector a.right",
				key: "right"
			},
			prev: {
				button: ".artistselector a.left",
				key: "left"
			}
	});
		
}

$('.artistselector a.kb').hover(function(){
	var thisSpan, spanPadding, spanHeight, thisHeight;
	thisSpan = $(this).find('span.text');
	spanPadding = $(this).find('span.text').css('padding-top').replace('px','');
	spanPadding = spanPadding * 2
	spanHeight = thisSpan.height()+spanPadding;
	thisHeight = $(this).parent('li').height();
	
	$(this).not('.active').find('span.text').stop().transition({top: '-='+spanHeight+'px'},300)
},function(){
	var thisSpan, spanPadding, spanHeight, thisHeight;
	thisSpan = $(this).find('span.text');
	spanPadding = $(this).find('span.text').css('padding-top').replace('px','');
	spanPadding = spanPadding * 2
	spanHeight = thisSpan.height()+spanPadding;
	thisHeight = $(this).parent('li').height();
	
	$(this).not('.active').find('span.text').stop().transition({top: thisHeight},300)
});

$('.artistselector a.kb').click(function(){
	var thisSpan, spanPadding, spanHeight, thisHeight;
	thisSpan = $(this).find('span.text');
	spanPadding = $(this).find('span.text').css('padding-top').replace('px','');
	spanPadding = spanPadding * 2
	spanHeight = thisSpan.height()+spanPadding;
	thisHeight = $(this).parent('li').height();
	
	$('.artistselector a.kb').not(this).find('span.text').stop().transition({top: thisHeight},300).end().not(this).removeClass('active');
	$(this).addClass('active').find('span.text').stop().transition({top: (thisHeight-spanHeight)+'px'},600,function(){$(this).addClass('active').parent('ul').find('a').not('.active').removeClass('active');});
});

$('.artistselector a.kb.active').trigger('click');//.find('span.dl > img').stop().transition({top: '50%'},300);


	
