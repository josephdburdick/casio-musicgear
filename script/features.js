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
	
$(document).ready(function(){
	
	if ($('.features-slider li').length > 1){
		$('.features-slider-container').prepend('<a href="javascript:void(0);" class="btn btn-slider left"></a><a href="javascript:void(0);" class="btn btn-slider right"></a>')
		$('.features-slider').cycle({ 
		    fx:     'fade', 
		    speed:  800,
		    easing: 'easeInOutExpo', 
		    timeout: 5000,
		    width:  '960',
		    height:'470',
			fit: 1,
			pause:1,
			cleartypeNoBg:true,
		    prev:   '.btn-slider.left', 
			next:   '.btn-slider.right',
			before: getFeature
		});
			buttons();
		
	}

});