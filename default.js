// se esquecer um console.log, não dá pau no js
if (typeof console == "undefined" || typeof console.log == "undefined")
{
	console = { log: function() {} }
}

$(document).ready(function() {

	// exibe o menu ao clicar em RESOLUTIONS
	$('nav strong').click(function() {

		if ( $('nav').hasClass('on') ) {
			$('nav').removeClass('on');
			$('nav ul').animate({height: 0});
		} else {
			$('nav').addClass('on');
			$('nav ul').animate({height: 450}, 200);
		};

	});

	// esconde o menu ao tirar o mouse de cima do mesmo
	$('nav ul').mouseleave(function() {
		if ( $('nav').hasClass('on') ) {
			$('nav').removeClass('on');
			$(this).animate({height: 0});
		};
	})

	// adiciona classe active na resolucao clicada e a exibe
	$('nav li span').click(function() {

		var resol = $(this).parent().attr('class');
		var $that = $(this);
		var largura = $('#sizes div.' + resol).width();
		
		if ( $that.hasClass('active') ) {
			console.log ('active')

			$that.removeClass('active');
			$('#sizes div.' + resol).hide();
			
			// se a largura do documento for maior que a largura do item clicado...
			// if ( $(document).width() < largura ) {
			// } else {
			// 	$('nav').css({left:'50%'});
			// 	$('body,header,footer').css("width","100%");
			// };
			
		} else {
			console.log ('off')
			console.log(largura)

			$that.addClass('active');
			$('#sizes div.' + resol).show();
			
			// se a largura do item clicado for menor que a largura do documento, dá resize na largura do header e footer pra ficar 100%
			if ( largura < $(document).width() ) {
				
			} else {
				$('body,header').css({width:largura});
				$('nav').css({left:'50%'});
			};
			
		};
		
	});
	
	// checa quais resolucoes estao ativadas e as exibe
	$('nav li').each(function(index) {
		var resol = $(this).attr('class');
		var $that = $(this).find('span');

		if ( $that.hasClass('active') ) {
	
			$('div.' + resol).fadeIn('fast');
			
		};
	});

	// mostra o link ABOUT oa passar o mouse no header
	// $('header').hover(function() {
	// 	$('a.about').show();
	// }, function() {
	// 	$('a.about').hide();
	// });
	
	// 
	$('a.about').click(function(event) {
		event.preventDefault;
		if ( $(this).hasClass('on') ) {
			$('div.more').animate({height: 0}, 200)
			$(this).removeClass('on');
			$('body').animate({paddingTop: 50}, 200)
		} else {
			$(this).addClass('on');
			$('div.more').animate({height: 140}, 100)
			$('body').animate({paddingTop: 190}, 100)
		};
	});

	$('div.more').mouseleave(function(){
		$('div.more').animate({height: 0}, 200)
		$('a.about').removeClass('on');
		$('body').animate({paddingTop: 0}, 200)
	})
	
	// click/tap no body esconde o menu (WIP)
	// $('body').click(function(event){
	// 	if($.contains( $('nav').get(0), event.target ))
	// 	{
	// 
	// 	}
	// 	else
	// 	{
	// 		$(this).animate({height: 0});
	// 		
	// 	}
	// });
	
	// 
	if($.browser.msie)
	{	
		alert("go fuck yourself");
	}
		
});
