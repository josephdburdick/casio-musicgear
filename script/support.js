
$(document).ready(function(){
	$('.pager li:nth-child(3n+1)').css('marginLeft','0px');
	
	if (!Modernizr.input.placeholder)
        {
        	$('input[type="text"]').each(function(){
        		var placeholderText = $(this).attr('placeholder');

	            $(this).attr('value',placeholderText);
	            $(this).addClass('placeholder');
	
	            $(this).focus(function() {
	                if( ($(this).val() == placeholderText) )
	                {
	                	$(this).attr('value','');
	                    $(this).removeClass('placeholder');
	                }
	            });
	
	            $(this).blur(function() {
	                if ( ($(this).val() == placeholderText) || (($(this).val() == '')) )
	                {
	                    $(this).addClass('placeholder');
	                    $(this).attr('value',placeholderText);
	                }
	            });
        	})
            
        }
     
});