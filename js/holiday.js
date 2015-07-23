var holiday = (function(){
    var self;
	
    return {
		
        init: function(){
            self    = this;		
			
			self.items();	
			self.preload();
        },
		
		items: function(){
			$('.grid .item').on('click', function(){
				
				$('.hero img').removeClass('active');
				$('.hero img').eq($(this).index() + 1).addClass('active');
				
				$('.hero .ribbon').text($(this).data('title'));
				
				$('html, body').animate({
				      scrollTop: $('.hero').offset().top
				}, 200);
				
			});
			
			$('.grid .item').on({'mouseover' : function(){
				$(this).addClass('active');
				
				if(Modernizr.touch){
					$('.hero img').removeClass('active');
					$('.hero img').eq($(this).index() + 1).addClass('active');
				
					$('.hero .ribbon').text($(this).data('title'));
				
					$('html, body').animate({
					      scrollTop: $('.hero').offset().top
					}, 200);
				}
				
			}, 'mouseout' : function(){
				$(this).removeClass('active');
			}})
		},
		
		preload: function(){
			$('.hero img').first().load(function() {
		        $('.hero .overlay').fadeOut();
		    });
			
			var item
			
			$('img.lazy').each(function(i){
				$(this).attr('src', $(this).data('src'));	
			});
		}
    };
})();

$(document).ready(function(){
    holiday.init();
});