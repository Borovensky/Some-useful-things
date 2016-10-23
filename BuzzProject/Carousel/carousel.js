(function(){
	'use strict';

	angular
		.module('buzz')
		.controller('mainCtrl', mainCtrl);

	function mainCtrl($scope){

		var selectStaticPart = $('#myCarousel > .static_part');
		var selectIndicators = $('#myCarousel > .carousel-indicators');
		$('#myCarousel').on('slide.bs.carousel', function (e) {
			if($(e.relatedTarget).index() == 0){
				selectStaticPart.removeClass('static_part-light').addClass('static_part-dark');
				selectIndicators.removeClass('carousel-indicators-light').addClass('carousel-indicators-dark');
			}else if($(e.relatedTarget).index() == 1){
				selectStaticPart.removeClass('static_part-dark').addClass('static_part-light');
				selectIndicators.removeClass('carousel-indicators-dark').addClass('carousel-indicators-light');
			}else if($(e.relatedTarget).index() == 2){
				selectStaticPart.removeClass('static_part-dark').addClass('static_part-light');
				selectIndicators.removeClass('carousel-indicators-dark').addClass('carousel-indicators-light');
			}else if($(e.relatedTarget).index() == 3){
				selectStaticPart.removeClass('static_part-light').addClass('static_part-dark');
				selectIndicators.removeClass('carousel-indicators-light').addClass('carousel-indicators-dark');
			}else if($(e.relatedTarget).index() == 4){
				selectStaticPart.removeClass('static_part-dark').addClass('static_part-light');
				selectIndicators.removeClass('carousel-indicators-dark').addClass('carousel-indicators-light');
			}else{
				selectStaticPart.removeClass('static_part-light').addClass('static_part-dark');
				selectIndicators.removeClass('carousel-indicators-light').addClass('carousel-indicators-dark');
			}
		})
	}

})();
