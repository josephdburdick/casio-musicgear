function getFeature(){	
		
		var whichFeature = $(this).data('id').replace('link','page');
		$('#ajax-window').animate({opacity:'0'},400,function(){
			$('#ajax-window').load(('ajax/index-features.html #'+whichFeature+''), function(){
				var thisHeight = $('#ajax-window').css('height');
				$('#ajax-window').waitForImages(function(){
					$('#ajax-window').animate({opacity:'1'},400);
				});
			});
		});	
	
	}
function setSlide(index) {
    $('#product-cycle').cycle(index);
}	
$(document).ready(function(){
	
	if ($('#product-cycle li').length > 1){
		$('#product-cycle').after('<ul class="pager bottom30px nopadding hasLayout" id="product-pager">').cycle({ 
		    fx:     'fade', 
		    speed:  800,
		    easing: 'easeInOutExpo', 
		    timeout: 0,
		    width:  '450',
		    height: '270',
			fit: 1,
			pause: 1,
			cleartypeNoBg:true,
		    prev:   '.btn-slider.left', 
			next:   '.btn-slider.right',
			pagerAnchorBuilder: function(idx, slide) {
			 	var thisImg = $(slide).find('img').attr('src').replace('lrg','sm').replace('.jpg','.png');
			 	//var thisExt = $(slide).find('img').attr('src').replace('.jpg','.png');
      			return '<li><a href="javascript:setSlide('+ idx +')"><img src="' + thisImg + '" /></a></li>'; 
    		},
    		pager: '#product-pager' 
		});
			$('#product-pager li:nth-child(3n+1)').css('marginLeft','0px');
			$('.table-specs table').find('tr:odd').addClass('odd').end().find('tr:even').addClass('even');
			buttons();
		
	}

});