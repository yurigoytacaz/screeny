// se esquecer um console.log, não dá pau no js
if (typeof console == "undefined" || typeof console.log == "undefined")
{
	console = { log: function() {} }
}

$(document).ready(function() {
	
	navHeight = 500
	
	// exibe o menu ao clicar em RESOLUTIONS
	$('#nav strong').click(function() {

		if ( $('#nav').hasClass('active') ) {
			$('#nav').removeClass('active');
			$('#nav ul').animate({height: 0}, 200);
		} else {
			$('#nav').addClass('active');
			$('#nav ul').animate({height: navHeight}, 200);
		};

	});

	// esconde o menu ao tirar o mouse de cima do mesmo
	$('#nav ul').mouseleave(function() {
		if ( $('#nav').hasClass('active') ) {
			$('#nav').removeClass('active');
			$(this).animate({height: 0}, 100);
		};
	})

	// adiciona classe active na resolucao clicada e a exibe
	$('#nav li span').live('click',function() {

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
				$('body,#header').css({width:largura});
				$('#nav').css({left:'50%'});
			};
			
		};
		
	});
	
	// checa quais resolucoes estao ativadas e as exibe
	$('#nav li').each(function(index) {
		var resol = $(this).attr('class');
		var $that = $(this).find('span');

		if ( $that.hasClass('active') ) {
	
			$('div.' + resol).fadeIn('fast');
			
		};
	});

	// mostra o link ABOUT oa passar o mouse no SCREENY
	// $('h1').hover(function() {
	// 	$('a.about').show();
	// }, function() {
	// 	$('a.about').hide();
	// });

	jQuery.fn.replaceAttr = function(aName, rxString, repString) {
		return this.attr(
			aName,
			function(){ 
				return jQuery(this).attr(aName).replace(rxString,repString);
			}
		);
	};


	$('#nav li.custom').click(function() {
		$('#nav li.custom input').focus();
	});

	// $('#nav li.custom input').setMask('9999:9999').val('i.e.: 800:600');

	iCounter = 1;
	$('#nav li.custom input').bind('keypress', function(event) {

		var code = (event.keyCode ? event.keyCode : event.which);
		if(code == 13) { // Enter keycode
			
			resolEntered = $(this).val()
			console.log('custom:' + resolEntered )

			var resolReturn = resolEntered.split("x");
			resolWidth = resolReturn[0]
			resolHeight = resolReturn[1]
			
			// checa se o input tem apenas letras
			$(this).filter(function() {
				return this.value.match(/x/g);
				}).addClass("valid");

			if ( $(this).hasClass('valid') ) {
				$('<li style="height:0px;" class="size' + resolWidth + 'x' + resolHeight + '"><span>' + resolWidth + 'x' + resolHeight + ' <strong contenteditable="true">Custom</strong></span></li>').animate({height:49},100).insertBefore('#nav li.custom');

				$('<div style="width:' + resolWidth + 'px;height:' + resolHeight + 'px;" class="resolution custom size' + resolWidth + 'x' + resolHeight + '"><span>Custom ' + resolWidth + 'x' + resolHeight + '</span></div>').insertBefore('#sizes div.cinema');

				navHeight = navHeight + 50

				$('#nav ul').animate({height: navHeight}, 50);

				$(this).removeClass('valid').val('i.e.: 800x600').blur();
				iCounter = 1;
			} else {
				console.log('faltou o X')
				console.log(iCounter)
				if(iCounter == 3){
					alert("You're missing the X.\nTry 800x600");
				}else{
					iCounter++;
				}

			};
			
		}
	});


	// limpa o campo no foco se value for default
	$('input:text').each(function() {
		var defaultValue = this.value;
		$(this).focus(function() {
			if(this.value == defaultValue) {
				this.value = '';
			}
		});
		$(this).blur(function() {
			if(this.value == '') {
				this.value = defaultValue;
			}
		});
	});

	//
	$('a.about,h1').click(function(event) {
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
		$('a.about,h1').removeClass('on');
		$('body').animate({paddingTop: 0}, 200)
	})
	
	// ajusta largura do header/footer ao dar resize na janela
	var timeOut
	$(window).resize(function(){
	
		clearTimeout(timeOut)
		timeOut = setTimeout(function(){
			
			windowWidth = $(window).width(); // largura da janela
			
		}, 100)
	});

	// click/tap no body esconde o menu (WIP)
	$('body').click(function(event){
		
		// $(this).addClass('noNav');
		
		if($.contains( $('#nav').get(0), event.target ))
		{
			// console.log('entrou')
		}
		else
		{
			if ( $('body').hasClass('noNav') ) {
				// $('body').animate({paddingTop: 0}, 100)
				// $('#header').animate({height: 0}, 100);
				// $('#footer').animate({height: 0}, 100);
				// 
				// $('#nav').removeClass('on');
				// $('#nav ul').animate({height: 0}), 50;
			};
		}
	});
	
	// 
	if($.browser.msie)
	{	
		alert("go fuck yourself");
	}
		
});
