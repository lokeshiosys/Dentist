// TABBER STARTS
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tabber-card').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})


    $(window).on('load resize orientationchange', function() {
        if ($(window).width() > 767) {
         
        }
        else{
          $(function() {
            var list = $('.tabs');
            var link = $('.mobile-view');
            link.click(function(e) {
              e.preventDefault();
              list.slideDown(200);
            });
            list.find('li').click(function() {
              var text = $(this).html();
              link.html(text);
              list.slideUp(200);
            });
          });
          
        }
      });

})
// TABBER ENDS


//HAPPY CLIENTS
$(".our_tester").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        variableWidth: false,
      },
    },
    {
      breakpoint: 651,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
      },
    },
  ],
});
//HAPPY CLIENTS 
