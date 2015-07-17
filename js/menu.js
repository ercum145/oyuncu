$(function(){
	var a=0;
	$('.menuac').click(function(){
		if(a==0){
			$(this).text('MENÜYÜ KAPAT');
			a++;	
		} else {
			$(this).text('MENÜYÜ AÇ');
			a=0;	
		}
	
		$(this).next('ul').toggle();
	
	});
});


$(document).ready(function() {
  $( "#social a" ).each(function() {
    var tipt = $(this).attr('title');
    $(this).attr('title','');
    $(this).append('<span>');
    $(this).children('span').text(tipt);
    var spanWidth = $(this).children('span').width() + 20;
    var spanMarg = 0 - spanWidth/2;
    $(this).children('span').css('width',spanWidth);
    $(this).children('span').css('margin-left',spanMarg);
    $(this).hover (
      function() {
        $(this).children('span').fadeIn();
        $('#social a').css('opacity','.5');
        $(this).css('opacity','5');
      }, function() {
        $(this).children('span').fadeOut();
        $('#social a').css('opacity','5');
      }
    );
  });                    
});

    $(document).ready(function() {  
    var stickyNavTop = $('.nav').offset().top;  
      
    var stickyNav = function(){  
    var scrollTop = $(window).scrollTop();  
           
    if (scrollTop > stickyNavTop) {   
        $('.nav').addClass('sticky');  
    } else {  
        $('.nav').removeClass('sticky');   
    }  
    };  
      
    stickyNav();  
      
    $(window).scroll(function() {  
        stickyNav();  
    });  
    });  

/*LOGİN FORM*/








