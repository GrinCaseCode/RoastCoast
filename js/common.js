$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }


$(".rating__item").click(function() {
    var val_star = $(this).attr( "data-value" );
    $(this).parent().removeClass("rating_1");
    $(this).parent().removeClass("rating_2");
    $(this).parent().removeClass("rating_3");
    $(this).parent().removeClass("rating_4");
    $(this).parent().removeClass("rating_5");
    var rating = $(this).attr("data-value");
    $(this).parent().addClass("rating_" + rating);
  });

   $("#modal-registration .btn-main").click(function(e){
   	e.preventDefault();
   if ($("#modal-registration .error-form").is(":hidden")) {
			$("#modal-registration .error-form").fadeIn(0);
		} else {
			$.fancybox.open('#successful-registration');
		}
  });

   $("#modal-signin .btn-main").click(function(e){
   	e.preventDefault();
   if ($("#modal-signin .error-form").is(":hidden")) {
			$("#modal-signin .error-form").fadeIn(0);
		} else {
		}
  });

$(".close-modal").click(function(e){
   	e.preventDefault();
   $.fancybox.close();
  })

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".sandwich").click(function() {
		$(this).toggleClass("active");
		if ($(".header__content").is(":hidden")) {
			$(".header__content").slideDown(200);
			$(".menu-overlay").fadeIn(200);
		} else {
			$(".header__content").slideUp(200);
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(".menu-overlay").click(function() {
		$(".header__content").slideUp(200);
		$(".sandwich").removeClass("active");
		$(".menu-overlay").fadeOut(200);
	});

	$(".menu__haschild > a").click(function() {
		$(this).siblings(".menu__dropdown").slideToggle(200);
		$(this).toggleClass("active");
	});

	$(".wrapper-text .btn-main").click(function(e) {
		e.preventDefault();
		if ($(".wrapper-text").hasClass("active")) {
			$(".wrapper-text").removeClass("active");
			$(this).find("span").html("ПОКАЗАТЬ ЕЩЁ");
		} else {
			$(".wrapper-text").addClass("active");
			$(this).find("span").html("Скрыть");
		}
	});

	$(".btn-filter").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".more-sorting").slideToggle(200);
	});

	$(".btn-main_add-modal").click(function(e) {
		e.preventDefault();
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).find("span").html("В КОРЗИНУ");
			$(".button-basket-hidden").slideUp(200);
		} else {
			$(this).addClass("active");
			$(this).find("span").html("В КОРЗИНЕ");
			$(".button-basket-hidden").slideDown(200);
		}
	});

	$(".description-card__bottom a").click(function(e) {
		e.preventDefault();
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).html("Читать полное описание");
			$(".description-card__text").removeClass("active");
		} else {
			$(this).addClass("active");
			$(this).html("Скрыть полное описание");
			$(".description-card__text").addClass("active");
		}
	});


$(".sorting-main__item").click(function() {
	$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});

$(".sorting-statuses__item").click(function() {
	$(this).siblings().removeClass("active");
		$(this).toggleClass("active");
	});

$(".sorting-categories__item").click(function() {
		$(this).toggleClass("active");
	});

	$(".btn-star").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	});

	$(".link-more").click(function(e) {
		e.preventDefault();
	$(this).parent().parent().parent().siblings(".more-about").slideDown(200);
		$(this).fadeOut(100);
	});

	$(".link-less").click(function(e) {
		e.preventDefault();
	$(this).parent().parent().parent().parent().slideUp(200);
		$(this).parent().parent().parent().parent().parent().find(".link-more").fadeIn(200);
	});

	  $("*[data-video-id]").modalVideo();

	  $('.tabs-about li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-about").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});

	  {
    if ($(window).width() < 992) { 
      $(".user-header").click(function() {
        $(".dropdown-user").slideToggle(200);
      });

    }
  }

	//слайдер

	$('.slider-billbord').slick({
		arrows: true,
		dots: true,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: ".controls-billbord",
		appendDots: ".controls-billbord",
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
	});

	$('.slider-videos').slick({
		arrows: true,
		dots: true,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: ".controls-videos",
		appendDots: ".controls-videos",
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-right"></i><div/>',
	});

	$('.slider-reviews').each(function(){
		var swiper = new Swiper(this, {
			direction: 'horizontal',
			navigation: {
				
			},
			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: true,
			},
			slidesPerView: 'auto',
			spaceBetwen: 30,
			slidesPerGroup: 1,
			loop: false,
		});

	});

	$('.text-inline').each(function() {
  var textLineCount = $(this)[0].getClientRects().length;
  var lineClampValue = $(this).parent().css('-webkit-line-clamp');
  if (textLineCount > lineClampValue) {
    $(this).parent().addClass('cut');
  }
});

	  $('.item-review__more a').click(function(event) {
		event.preventDefault();
		
		if ($(this).parent().siblings(".item-review__text").hasClass("active")) {
			$(this).html("Полный отзыв");
			$(this).parent().siblings(".item-review__text").removeClass('active');
		} else {
			$(this).html("Свернуть");
			$(this).parent().siblings(".item-review__text").addClass('active');
		}
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	$(".fancybox-auth").fancybox({
		 beforeShow : function(){
      $(".fancybox-wrap").addClass("fancybox-page");
      
    }
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

