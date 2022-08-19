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
