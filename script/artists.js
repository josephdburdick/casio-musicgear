
function setSlide(index) {
    $('#artist-cycle').cycle(index);
}	
$(document).ready(function(){
	
	if ($('#artist-cycle li').length > 1){
		$('#artist-cycle').after('<ul class="top20px pager nopadding hasLayout" id="artist-pager">').cycle({ 
		    fx:     'fade', 
		    speed:  800,
		    easing: 'easeInOutExpo', 
		    timeout: 0,
		    width:  '580',
		    height: '423',
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
    		pager: '#artist-pager'
    	});
			$('#artist-pager li:nth-child(3n+1)').css('marginLeft','0px');
			
		
	}

});