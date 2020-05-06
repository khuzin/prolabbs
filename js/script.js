
var scrollSpeed = 1000;

( function( $ ) {
$(document).ready(function()
{
	$('.link-logo').click(function(){	myScrollTo($('#b-pro-digital').offset().top); return false;	});
	$('.link-about-us').click(function(){	myScrollTo($('#about-us').offset().top); return false;	});
	$('.link-packets').click(function(){	myScrollTo($('#packets').offset().top); return false;	});
	$('.link-contacts').click(function(){	myScrollTo($('#contacts').offset().top); return false;	});

	$('.b-back-on-top').click(function(){	myScrollTo($('#b-pro-digital').offset().top); return false;	});

	$('.b-packet-types .g-side').mouseover(function(){ $('.b-packet-types .g-side').addClass("hover123"); });
	$('.b-packet-types .g-side').mouseout(function(){ $('.b-packet-types .g-side').removeClass("hover123"); });


	$('.show-modal-window-form').click(function(){	$(".b-modal-window.m-form").css("display", "block");	});
	$('.close-modal-window-form').click(function(){	$(".b-modal-window.m-form").removeAttr("style");	});
	$('.show-modal-window-thanks').click(function(){	$(".b-modal-window.m-thanks").css("display", "block");	});
	$('.close-modal-window-thanks').click(function(){	$(".b-modal-window.m-thanks").removeAttr("style");	});

	$(document).scroll(function(){ myWindowScroll(); });


	$('#g-menu-button').click(function(){ if($(".g-site-menu.mobile").css("display")=="none"){ $(".g-site-menu.mobile").css("display", "block");}else{ $(".g-site-menu.mobile").css("display", "none");} });

	inView('.anim-scroll').on('enter', myAutoScrollEnter).on('exit', myAutoScrollExit);
	inView('.anim-scroll.b-packet-types, .anim-scroll.b-offer-you').on('enter', myAnimEnter).on('exit', myAnimExit);

	inView.offset({top:100});
});
} )( jQuery );

function myWindowScroll()
{
	var winScroll = $(window).scrollTop();
	if(winScroll > 200)
	{
		$(".b-back-on-top").css("display", "block");
	}
	else
	{
		$(".b-back-on-top").css("display", "none");
	}

/*
	if(winScroll >= $('#b-pro-digital').offset().top)
	{
		$(".b-right-indicator").children("div").removeAttr("class");
		$(".b-right-indicator").children("div").addClass("pro-digital");
	}
	if(winScroll >= $('#about-us').offset().top)
	{
		$(".b-right-indicator").children("div").removeAttr("class");
		$(".b-right-indicator").children("div").addClass("about-us");
	}
	if(winScroll >= $('#packets').offset().top)
	{
		$(".b-right-indicator").children("div").removeAttr("class");
		$(".b-right-indicator").children("div").addClass("packets");
	}
	if(winScroll >= $('#calculate').offset().top)
	{
		$(".b-right-indicator").children("div").removeAttr("class");
		$(".b-right-indicator").children("div").addClass("calculate");
	}
	if(winScroll >= $('#contacts').offset().top)
	{
		$(".b-right-indicator").children("div").removeAttr("class");
		$(".b-right-indicator").children("div").addClass("contacts");
	}
*/
	var spd = 4000;
	if(winScroll >= $('#b-pro-digital').offset().top && winScroll < $('#about-us').offset().top-50)
	{
		leftIndicator(".ind.i2");
		leftIndicator(".ind.i3");

		leftIndicator(".ind.i5");
		$(".ind.run").animate({top:"75px"}, { duration: spd, queue: false });
		$(".ind.i1").animate({marginTop:"30px", marginBottom:"30px"}, { duration: spd, queue: false }).delay(1000);
	}

	if(winScroll >= $('#about-us').offset().top-50 && winScroll < $('#packets').offset().top)
	{
		leftIndicator(".ind.i1");
		leftIndicator(".ind.i3");

		leftIndicator(".ind.i5");
		$(".ind.run").animate({top:"115px"}, { duration: spd, queue: false });
		$(".ind.i2").animate({marginTop:"30px", marginBottom:"30px"}, { duration: spd, queue: false });
	}

	if(winScroll >= $('#packets').offset().top && winScroll < $('#contacts').offset().top)
	{
		leftIndicator(".ind.i1");
		leftIndicator(".ind.i2");

		leftIndicator(".ind.i5");
		$(".ind.run").animate({top:"155px"}, { duration: spd, queue: false });
		$(".ind.i3").animate({marginTop:"30px", marginBottom:"30px"}, { duration: spd, queue: false });
	}

	 a = $('#contacts').offset().top-100;

	if(winScroll >= a)
	{
		leftIndicator(".ind.i1");
		leftIndicator(".ind.i2");
		leftIndicator(".ind.i3");

		$(".ind.run").animate({top:"185px"}, { duration: spd, queue: false });
		$(".ind.i5").animate({marginTop:"30px", marginBottom:"30px"}, { duration: spd, queue: false });
	}
}

function leftIndicator(el)
{
	var spd = 500;
	if($(el).css("marginTop") != "10px" || $(el).css("marginBottom") != "10px")
	{
		$(el).animate({marginTop:"10px", marginBottom:"10px"}, { duration: spd, queue: false });
	}
}

function myScrollTo(top)
{
	$('html, body').animate({scrollTop: top}, scrollSpeed);
	return false;
}

function myAutoScrollEnter(el)
{
/*
	if ($(document).scrollTop() < $(el).offset().top)
	{
		myScrollTo($(el).offset().top)
	}
*/
	myAnimEnter_q(el);
	return false;
}

function myAutoScrollExit(el)
{
	myAnimExit_q(el);
}

function myAnimEnter(el)
{
	$(el).children(".g-overflow").children(".g-anim-turn").animate({top:"0", opacity: "1"}, 1000, "linear");
	$(el).children(".g-overflow").find("p").animate({right:"0", left:"0", bottom:"0"}, 700);
	return false;
}

function myAnimExit(el)
{
}

function myAnimEnter_q(el)
{

	$(el).children(".top-space").animate({top:"0", bottom:"0", right:"0", left:"0"}, 800);
	$(el).find(".aaa .g-side .g-side__h, .g-side .g-side__p, .g-side .g-form-feedback, .g-side__h").animate({top:"0", bottom:"0", right:"0", left:"0"}, 1000);
	return false;
}

function myAnimExit_q(el)
{
	$(el).children(".top-space").removeAttr("style");
	$(el).find(".g-side .g-side__h, .g-side .g-side__p, .g-side .g-form-feedback").removeAttr("style");

	$(el).children(".g-overflow").children(".g-anim-turn").removeAttr("style");
	return false;
}

function myMenuScroll()
{
	$("header").css({"top":$(window).scrollTop()});
	return false;
}

function ajaxForm(el) {
 	  var msg   = $(el).serialize();
        $.ajax({ type: 'POST', url: '/new/php/ajax.php', data: msg, success: function(data)
			{
					$(".b-modal-window.m-thanks").css("display", "block");
					$(".b-modal-window.m-form").css("display", "none");
			}, error:  function(xhr, str){ alert('Возникла ошибка: ' + xhr.responseCode); } });
}
