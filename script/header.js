
function browser(){
	var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]
};
	BrowserDetect.init();
	if (BrowserDetect.browser == "Opera")
		$('html').addClass('opera');
	if (BrowserDetect.browser == "Firefox")
		$('html').addClass('ff');
	if (BrowserDetect.browser == "Chrome")
		$('html').addClass('chrome');
}
function yep(){
	Modernizr.load([
	    {
	        test: Modernizr.rgba,
	        yep: '../script/libs/jquery.color.min.js'
	    }
	]);	
	Modernizr.load([
		{
			test: Modernizr.touch,
			yep: '../script/libs/jquery.touchSwipe-1.2.5.js'			
		}
	]);
	if ($('#ticker').length >0){
    	function tick(){
			$('#ticker li:first').slideUp( function () { $(this).appendTo($('#ticker')).slideDown(); });
		}
		setInterval(function(){ tick () }, 5000);
	}
}
function search() {
        if (!Modernizr.input.placeholder)
        {
            var placeholderText = $('#search').attr('placeholder');

            $('#search').attr('value',placeholderText);
            $('#search').addClass('placeholder');

            $('#search').focus(function() {
                if( ($('#search').val() == placeholderText) )
                {
                	$('#search').attr('value','');
                    $('#search').removeClass('placeholder');
                }
            });

            $('#search').blur(function() {
                if ( ($('#search').val() == placeholderText) || (($('#search').val() == '')) )
                {
                    $('#search').addClass('placeholder');
                    $('#search').attr('value',placeholderText);
                }
            });
        }
}
function buttons(){
	// Template all play buttons
	
	if ($('.btn').length > 0){ 
		$('.btn').not('.hasSpan').each(function(i){
			$(this).addClass('hasSpan').append('<span></span>');
			var newBtn = $(this).find('span');
			var bgImg = new Array();
			var bgXY = new Array();
				if (Modernizr.multiplebgs){
					bgXY = $(this).css('backgroundPosition').split(" ");
				} else {
					bgXY[0] = $(this).css('background-position-x');
					bgXY[1] = $(this).css('background-position-y');
				}
				bgImg[0] = $(this).css('backgroundImage');
				bgImg[1] = $(this).width();
				bgImg[2] = $(this).height();
				bgImg[3] = bgXY[0];
				bgImg[4] = bgXY[1];
				bgImg[5] = bgImg[2] * -1 + 'px';
				newBtn.css({
					backgroundImage: 	bgImg[0], 
					width: 				bgImg[1],
					height: 			bgImg[2],
					backgroundPosition: bgImg[3] + " " + bgImg[5]
				});
		});
		
		if (Modernizr.multiplebgs){
			$('.btn').hover(function(){
				var newBtn = $(this).find('span');
				newBtn.stop().transition({opacity:1},250);
			},function(){
				var newBtn = $(this).find('span');
				newBtn.transition({opacity:0},150)
			});
		} else { //IE8 >
			$('.btn').hover(function(){
				var newBtn = $(this).find('span');
				newBtn.show();
			},function(){
				var newBtn = $(this).find('span');
				newBtn.hide();
			});
		}
	}
}
function slides(){
	if ($('.royalSlider').length > 0){
		$('.royalSlider').each(function(){
			var thisSlider = $(this).attr('id');
			if ($('#'+thisSlider).hasClass('hero')){
				var thisSlider = $(this).attr('id');
				$('#'+thisSlider).royalSlider({
					
					slideTransitionSpeed:400,               // Slide transition speed in ms. (1s = 1000ms)
			    	slideTransitionEasing:"easeInOutQuint",
						
					imageAlignCenter:true,
					slideshowEnabled: true,                // Autoslideshow enabled          
			    	slideshowDelay:5000,                    // Delay between slides in slideshow
			    	slideshowPauseOnHover: true,            // Pause slideshow on hover
			    	slideshowAutoStart:true,     
					
					directionNavEnabled: true,
					welcomeScreenEnabled:false,
					hideArrowOnLastSlide:true,
					preloadNearbyImages:true,               // Preloads two nearby images, if they have lazy loading enabled
			    	imageScaleMode:"fill",                  // Scale mode of all images. Can be "fill", "fit" or "none"
			   		
			   		imageAlignCenter:true,		    // Aligns all images to slide center
			   		keyboardNavEnabled:true	            // Keyboard arrows navigation	
			            
			  });
		   } else if ($('#'+thisSlider).hasClass('none')){
		   
				$('#'+thisSlider).royalSlider({
					
					slideTransitionSpeed:400,               // Slide transition speed in ms. (1s = 1000ms)
			    	slideTransitionEasing:"easeInOutQuint",
					controlNavEnabled:false,	
					imageAlignCenter:true,
					slideshowEnabled: true,                // Autoslideshow enabled          
			    	slideshowDelay:5000,                    // Delay between slides in slideshow
			    	slideshowPauseOnHover: true,            // Pause slideshow on hover
			    	slideshowAutoStart:false,     
					
					directionNavEnabled: false,
					welcomeScreenEnabled:false,
					hideArrowOnLastSlide:true,
					preloadNearbyImages:true,               // Preloads two nearby images, if they have lazy loading enabled
			    	imageScaleMode:"fill",                  // Scale mode of all images. Can be "fill", "fit" or "none"
			   		
			   		imageAlignCenter:true,		    // Aligns all images to slide center
			   		keyboardNavEnabled:false,	            // Keyboard arrows navigation	
		    		nonDraggableClassEnabled: true	
   
			    });	
		    }
		});
		
	}
	if($('.carousel').length>0){
		$(".carousel").carouFredSel({
			height: 260,
			items: {
				visible: "variable",
				start: 2,
				minimum: 3,
				width: 320,
				height: 260
			},
			scroll: {
				items: 1,
				fx: "crossfade",
				easing: "easeOutQuint",
				onAfter: function( oldItems, newItems, newSizes ) {
					$(newItems).addClass('active');
				}
			},
			auto: false,
			next: {
				button: ".carousel a.next",
				key: "right"
			},
			prev: {
				button: ".carousel a.prev",
				key: "left"
			}
		});
		
	}
}
function ajaxIn(){
	if ($('.ajaxthis').length > 0){ 
		if (Modernizr.multiplebgs){
			$('.ajaxthis').each(function(){
				var fromWhere = $(this).data('ajax');
				var thisContainer = $(this).attr('id');
				$('#'+thisContainer).append('<div class="loader-222"></div>');
				var loader = $('#'+thisContainer).find('.loader-222');
				$('#'+thisContainer).load('ajax/' + fromWhere, function(response, status, xhr){
				  if (status == "error") {
				    var msg = "<span class=\"black333 icon\">&times;</span> ERROR: ";
				    $('#'+thisContainer).append('<div class="error"></div>')
				    $('#'+thisContainer+ '> .error').addClass('opacity0').transition({opacity:1},2000,function(){$(this).removeClass('opacity0')});
				    $('#'+thisContainer+ '> .error').html(msg + xhr.status + " " +"[<span class=\"white\">ajax/"+ fromWhere +".html</span>] " + xhr.statusText);
				    $('#'+thisContainer + '> .loader-222').fadeOut(2000,function(){
				    	$('#'+thisContainer).transition({height:'60px'},1000,function(){
				    		$('#'+thisContainer).on('click',function(){
				    			$(this).transition({height:'0px',opacity:.85},500);
				    		});
				    	});
				    });
				  } else {
				  	var freshAjax = $('#'+thisContainer).find(':first-child').attr('id');
					$('#'+thisContainer).waitForImages({
						each: function() {
					    	loader.fadeOut(2000);
							$('#'+freshAjax).css('opacity','0').transition({opacity:1},2000);
						},
						waitForAll: false
					});
				  }
				});
			});
		} else {
			$('.ajaxthis').each(function(){
				var fromWhere = $(this).data('ajax');
				var thisContainer = $(this).attr('id');
				$('#'+thisContainer).append('<div class="loader-222"></div>');
				var loader = $('#'+thisContainer).find('.loader-222');
				$('#'+thisContainer).load('ajax/' + fromWhere, function(response, status, xhr){
				  if (status == "error") {
				    var msg = "<span class=\"black333 icon\">&times;</span> ERROR: ";
				    $('#'+thisContainer).append('<div class="error"></div>')
				    $('#'+thisContainer+ '> .error').addClass('opacity0').transition({opacity:1},2000,function(){$(this).removeClass('opacity0')});
				    $('#'+thisContainer+ '> .error').html(msg + xhr.status + " " +"[<span class=\"white\">ajax/"+ fromWhere +".html</span>] " + xhr.statusText);
				    $('#'+thisContainer + '> .loader-222').fadeOut(2000,function(){
				    	$('#'+thisContainer).transition({height:'60px'},1000,function(){
				    		$('#'+thisContainer).on('click',function(){
				    			$(this).transition({height:'0px'},500);
				    		});
				    	});
				    });
				  }
				  else {
				  	var freshAjax = $('#'+thisContainer).find(':first-child').attr('id');
					$('#'+thisContainer).waitForImages({
						each: function() {
					    	loader.fadeOut(2000);
							//$('#'+freshAjax).css('opacity','0').transition({opacity:1},2000);
						},
						waitForAll: false
					});
					
				  }
				});
			});
		}
	}
}
function ajaxy(){
	$('.ajaxy').live('click',function(e){
		
		e.preventDefault();
		var urlHash;
		urlHash = location.hash;
		urlHash = urlHash.replace(/^#!\//,"");
		
 		var newContent = $(this).data('ajax');
 		var newUrl = $(this).attr('href');
 		newUrl = newUrl.replace(/^#!\//,"");
 		$.address.value(newUrl);
				
		var toContainer = $(this).data('target');
		$('#'+toContainer).append('<div class="loader-222"></div>');
		var loader = $('#'+toContainer).find('.loader-222');
		var currentContent = $('#'+toContainer).children();
		$(currentContent).fadeOut(500,function(){
			$('#'+toContainer).load('ajax/' + newUrl, function(response, status, xhr){
			  if (status == "error") {
			    var msg = "<span class=\"black333 icon\">&times;</span> ERROR: ";
			    $('#'+toContainer).append('<div class="error"></div>')
			    $('#'+toContainer+ '> .error').addClass('opacity0').transition({opacity:1},2000,function(){$(this).removeClass('opacity0')});
			    $('#'+toContainer+ '> .error').html(msg + xhr.status + " " +"[<span class=\"white\">ajax/"+ newContent +".html</span>] " + xhr.statusText);
			    $('#'+toContainer + '> .loader-222').fadeOut(2000,function(){
			    	$('#'+toContainer).transition({height:'60px'},1000,function(){
			    		$('#'+toContainer).on('click',function(){
			    			$(this).transition({height:'0px',opacity:.85},500);
			    		});
			    	});
			    });
			  }
			  else {
			  	var freshAjax = $('#'+toContainer).children();
				$('#'+toContainer).waitForImages(function(){ 
			    	$(loader).fadeOut(2000);
					$(freshAjax).css('opacity','0').transition({opacity:1},2000);
					
				});
				if (Modernizr.multiplebgs)
					buttons();
			  }
			});
		});
	});

	if ($('.xl').length > 0){
	$('.xl').each(function(){
		//var imgLight = $(this).find('.light');
		var imgUrl = $(this).data('ajax');
		var imgStyle =$(this).data('style');
		//$(this).append('<div class=\"loader-222"\></div>')
		$(this).prepend('<img src="'+imgUrl+'" style="' + imgStyle +'">');
		var artistImg = $(this).find('.img-artist');
		//var loader = $(this).find('.loader-222');
		artistImg.addClass('opacity0');
			if (Modernizr.multiplebgs){
				artistImg.transition({opacity:'1'},2000,function(){artistImg.removeClass('opacity0')});
				//loader.transition({opacity:'0'},800,function(){loader.hide()});
			}	
			else{ // IE8-
				//loader.hide();
				artistImg.css('opacity','1').removeClass('opacity0');
			}
	});
}
}

//EXE IMMEDIATELY
$(document).ready(function(){
	yep();
	browser();
	search();
	if (Modernizr.multiplebgs)
		buttons();
});


//ALL ELEMENTS READY
$(window).load(function(){
    ajaxIn();
    ajaxy();
    slides();
	
	//Scroll window down, hide addressbar on iOS
    setTimeout(function() { window.scrollTo(0, 1); }, 100);
	

});
