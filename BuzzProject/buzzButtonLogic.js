	<div class="buttons" id='buttons'>
		<button class="message_btn button_attach"><img src="/img/white.svg"></button>
		<button class="message_btn button_send" ng-click="send()">Send</button>
		<input id="upload-input" type="file" name="uploads" multiple="multiple">
	</div>

//====================================================================================================

.buttons
	position: absolute
	z-index: 10
	// bottom: 37%
	width: 640px
	text-align: center
	-webkit-transition: bottom 0.5s
	-moz-transition: bottom 0.5s
	transition: bottom 0.5s
	.message_btn
		width: 49.6%
		height: 56px
		background: rgba(0, 0, 0, 0.4)
		color: #fff
		border: none
		&:focus
			outline: none
	.button_attach
		border-top-left-radius: 10px
		border-bottom-left-radius: 10px
		padding: 18px 18px
		img
			width: 20px
			height: auto
	.button_send
		border-top-right-radius: 10px
		border-bottom-right-radius: 10px
		padding: 18px 18px
#upload-input
	display: none

//=======================================================================================================

var buttonsPos = $('.buttons').css({'bottom' : '37%'});
$("#textarea").resize(function(e){
							var height = textarea.style.height;
							// console.log(height);
							switch(height){
								case '56px':
									$('.buttons').css({'bottom' : '37%'})
									break
								case '81px':
									$('.buttons').css({'bottom' : '35%'})
									break
								case '106px':
									$('.buttons').css({'bottom' : '33%'})
									break
								case '131px':
									$('.buttons').css({'bottom' : '31%'})
									break
								case '156px':
									$('.buttons').css({'bottom' : '29%'})
									break
								case '181px':
									$('.buttons').css({'bottom' : '27%'})
									break
								case '206px':
									$('.buttons').css({'bottom' : '25%'})
									break
								case '231px':
									$('.buttons').css({'bottom' : '23%'})
									break
								case '256px':
									$('.buttons').css({'bottom' : '21%'})
									break
								case '281px':
									$('.buttons').css({'bottom' : '19%'})
									break
								case '306px':
									$('.buttons').css({'bottom' : '17%'})
									break
								case '331px':
									$('.buttons').css({'bottom' : '15%'})
									break
								case '356px':
									$('.buttons').css({'bottom' : '13%'})
									break
								case '381px':
									$('.buttons').css({'bottom' : '11%'})
									break
								case '406px':
									$('.buttons').css({'bottom' : '9%'})
									break
								case '431px':
									$('.buttons').css({'bottom' : '7%'})
									break
								case '456px':
									$('.buttons').css({'bottom' : '5%'})
									break
								case '481px':
									$('.buttons').css({'bottom' : '3%'})
									break
								case '510px':
									$('.buttons').css({'bottom' : '2%'})
									break
								default:
									$('.buttons').css({'bottom' : '2%'})
							}		
						})
