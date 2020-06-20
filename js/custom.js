		$('#owl-slider').owlCarousel({
			loop:true,
			margin:10,
			autoplay:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				600:{
					items:2,
					nav:false
				},
				1000:{
					items:3,
					nav:true,
					loop:true
				}
			}
		})	
		
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			autoplay:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				600:{
					items:3,
					nav:false
				},
				1000:{
					items:5,
					nav:true,
					loop:true
				}
			}
		})
		
$(document).ready(function(){
  $(".web-btn").click(function(){
	 $(".web-btn").addClass("ac-color");
	 $(".web-btn").removeClass("bl-color");
	 $(".all-btn").removeClass("ac-color");
	 $(".all-btn").addClass("bl-color");
	 $(".typo-btn").removeClass("ac-color");
	 $(".typo-btn").addClass("bl-color");
	 $(".brand-btn").removeClass("ac-color");
	 $(".brand-btn").addClass("bl-color");
	 $(".dev-btn").removeClass("ac-color");
	 $(".dev-btn").addClass("bl-color");
  });
});
$(document).ready(function(){
  $(".typo-btn").click(function(){
	 $(".web-btn").addClass("bl-color");
	 $(".web-btn").removeClass("ac-color");
	 $(".all-btn").removeClass("ac-color");
	 $(".all-btn").addClass("bl-color");
	 $(".typo-btn").removeClass("bl-color");
	 $(".typo-btn").addClass("ac-color");
	 $(".brand-btn").removeClass("ac-color");
	 $(".brand-btn").addClass("bl-color");
	 $(".dev-btn").removeClass("ac-color");
	 $(".dev-btn").addClass("bl-color");
  });
});
$(document).ready(function(){
  $(".brand-btn").click(function(){
	 $(".web-btn").addClass("bl-color");
	 $(".web-btn").removeClass("ac-color");
	 $(".all-btn").removeClass("ac-color");
	 $(".all-btn").addClass("bl-color");
	 $(".typo-btn").removeClass("ac-color");
	 $(".typo-btn").addClass("bl-color");
	 $(".brand-btn").removeClass("bl-color");
	 $(".brand-btn").addClass("ac-color");
	 $(".dev-btn").removeClass("ac-color");
	 $(".dev-btn").addClass("bl-color");
  });
});
$(document).ready(function(){
  $(".dev-btn").click(function(){
	 $(".web-btn").addClass("bl-color");
	 $(".web-btn").removeClass("ac-color");
	 $(".all-btn").removeClass("ac-color");
	 $(".all-btn").addClass("bl-color");
	 $(".typo-btn").removeClass("ac-color");
	 $(".typo-btn").addClass("bl-color");
	 $(".brand-btn").removeClass("ac-color");
	 $(".brand-btn").addClass("bl-color");
	 $(".dev-btn").removeClass("bl-color");
	 $(".dev-btn").addClass("ac-color");
  });
});
$(document).ready(function(){
  $(".all-btn").click(function(){
	 $(".web-btn").addClass("bl-color");
	 $(".web-btn").removeClass("ac-color");
	 $(".all-btn").removeClass("bl-color");
	 $(".all-btn").addClass("ac-color");
	 $(".typo-btn").removeClass("ac-color");
	 $(".typo-btn").addClass("bl-color");
	 $(".brand-btn").removeClass("ac-color");
	 $(".brand-btn").addClass("bl-color");
	 $(".dev-btn").removeClass("ac-color");
	 $(".dev-btn").addClass("bl-color");
  });
});

$(document).ready(function(){
  $(".src-bttn2").click(function(){
	$(".search-page").removeClass("d-block") ;
	$(".search-page").addClass("d-none") ;
  });
});

$(document).ready(function(){
  $(".src-bttn").click(function(){
	$(".search-page").addClass("d-block") ;
	$(".search-page").removeClass("d-none") ;
  });
});

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.bk-top').fadeIn();
    } else {
        $('.bk-top').fadeOut();
    }
});
$(document).ready(function() {
    $(".bk-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/