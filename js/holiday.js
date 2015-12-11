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
        $(this).addClass('active');

			});

			$('.grid .item').on({'mouseover' : function(){
				$(this).addClass('active');

				if(Modernizr.touch){

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
