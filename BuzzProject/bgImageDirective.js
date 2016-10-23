(function(){
	'use strict';

	angular
		.module('buzz')
		.directive('bgimage', bgimage);

	function bgimage($cookies, socialApiSecvice){
		function showBg(){
			var img = '';
			var confirmed = localStorage.getItem('confirmed')
			var photo = localStorage.getItem('photo');
			function userImg(){
				if(!confirmed || confirmed === undefined){
					var img = 'img/default-bg.png';
					return img
				}else if(confirmed === 'false'){
					var img = 'img/default-bg.png';
					return img
				}else if(confirmed === 'true'){
					var img = photo;
					return img
				}
			}
			return userImg();
		}

		return{
			restrict: "E",
			replace: true,
			template: "<div class='bg-image_message' id='img'><img src='img/default-bg.png'></div>"
		}
	}

})();
