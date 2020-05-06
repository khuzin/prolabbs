let defaultToday = new Date();
let defmonth = ['январь', 'февраль', 'март',  'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь',  'октябрь', 'ноябрь', 'декабрь'];
let defCurrentMonth = defmonth[defaultToday.getMonth()].toString();
$('#period_month').html('Период размещения <br> <span>'+defCurrentMonth.charAt(0).toUpperCase() + defCurrentMonth.slice(1)+'</span>');
$('.period_razm').html(defaultToday.getDate());

function formatMoney(number, decPlaces, decSep, thouSep) {
	return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
	}
	rayon = $(this).data('rayon');
	
	$( ".next_step #next" ).click(function() {
	
	
		if( $('#cityNn').hasClass('active') ){
			location.href='./niz/index.html';
		}
	
	  slide = $(this).data('slide');
	  slide_prev = slide-1;
	
	  if(rayon==parseInt(2) && slide==3)
	  {
	  $('.sl'+slide_prev).addClass('hidden');
	  $('.sl'+10).removeClass('hidden');
	
	  }
	 else
	 {
		 if (slide==3)
		 {
	let sli = document.getElementById('sl3');
	sli.style.backgroundImage = 'url(img/map.png) , url(img/kirov.png) , url(img/sov.png) , url(img/novosav.png) , url(img/vah.png) ';
		 }
	  $('.sl'+slide_prev).addClass('hidden');
	  $('.sl'+slide).removeClass('hidden');
	 }
	
	if (slide==10) {
		if (checkrayon() >=0){
			$('.sl'+10).addClass('hidden');
			$('.sl'+3).removeClass('hidden');
		}
		//console.log('Select rayon');
		raysel();
	}
	
	if(slide==4)
	{$('.irs-grid-text.js-grid-text-0').addClass('hidden');}
	
	
	$('.items ul li:nth-child('+slide_prev+')').addClass('active').removeClass('current');
	  $('.items ul li:nth-child('+slide+')').addClass('current');
	  $('.items ul li:nth-child('+slide+')').addClass('active');
	  if(slide==7){
	
	$('.show-modal-window-form').click(function(){	$(".b-modal-window.m-form").css("display", "block");	});
		$('.close-modal-window-form').click(function(){	$(".b-modal-window.m-form").removeAttr("style");	});
		$('.show-modal-window-thanks').click(function(){	$(".b-modal-window.m-thanks").css("display", "block");	});
		$('.close-modal-window-thanks').click(function(){	$(".b-modal-window.m-thanks").removeAttr("style");	});
	
	//console.log(new_price);
		$('.raschet,.next_step').addClass('hidden');
		$('.items').addClass('hidden');
		$(' .title span').html($('.sl2 .item.active .left .name').text());
		$('.pdf_redirect').attr('href','pdf.php?economy='+$('.raschet .ekonomia').html()+'&title= '+$('.raschet .title span').html()+
		'&price_contact='+$('.raschet .one_contact').html()+'&monitors='+$('.raschet .ekranu span').text()+'&howmany='+$('.sl4 .skidka .irs-single').text()+
		'&period='+$('.raschet .period span').text()+'&transplation='+$('.raschet .hronometraj span').text()+'&st_r='+$('.col-md-6  .new_price').html()+'&st_rdiscount='+$('.col-md-6  .old_price').html()
		+'&mediam_1_1='+$('.mediam_1 td:nth-child(3)').text()+'&mediam_1_1_d='+$('.mediam_1 td:nth-child(5)').text()+'&mediam_2_1='+$('.mediam_2 td:nth-child(2)').text()+'&mediam_2_2='+$('.mediam_2 td:nth-child(3)').text()+'&mediam_2_3='+$('.mediam_2 td:nth-child(4)').text()
		+'&mediam_2_4='+$('.mediam_2 td:nth-child(5)').text()+'&mediam_3_1='+$('.mediam_3 td:nth-child(2)').text()+'&mediam_3_2='+$('.mediam_3 td:nth-child(3)').text()+'&mediam_3_3='+$('.mediam_3 td:nth-child(4)').text()
		+'&mediam_3_4='+$('.mediam_3 td:nth-child(5)').text()+'&mediam_4_1='+$('.mediam_4 td:nth-child(2)').text()+'&mediam_4_2='+$('.mediam_4 td:nth-child(3)').text()+'&mediam_4_3='+$('.mediam_4 td:nth-child(4)').text()
		+'&mediam_4_4='+$('.mediam_4 td:nth-child(5)').text()+'&dopol='+$('.dop_yslugi .dd').html())
	
	
	
	
	
	  }
	});
	
	
	
	//слудующий слайд
	
	$( ".next_step #prev" ).click(function() {
		slide = $(this).data('slide');
		if(slide == 1) {
		$('.raschet').addClass('hidden');
		}
	
	  slide_prev = slide+1;
	  $('.sl'+slide_prev).addClass('hidden');
	  $('.sl'+slide).removeClass('hidden');
	if (slide==10)
	 {
	$('.sl'+10).addClass('hidden');
	$('.sl'+2).removeClass('hidden');
	$('.items ul li:nth-child('+2+')').addClass('current');
	$('.items ul li:nth-child('+3+')').removeClass('current');
	 }
	  $('.items ul li:nth-child('+slide+')').addClass('current');
	  $('.items ul li:nth-child('+slide_prev+')').removeClass('current');
	
	if(slide==2 && parseInt(2)==rayon)
	{
		//console.log("ПШЁЛ НЙ");
		$('.sl'+2).addClass('hidden');
		$('.sl'+10).removeClass('hidden');
	}
	
	});
	
	
	pid1='';
	pid2='';
	pid3='';
	pid4='';
		muha=0;
	
	function checkrayon(){
		let list = $('.sl10 input[type="checkbox"]');
		let array = list.map(function(number) {
			if (jQuery(list[number]).is(":checked")) {
				//console.log("AAA "+ list[number]);
				return true;
			} else {
				return false;
			}
	
		  });
	
		 // console.log("ss "+array.length);
	
		  return jQuery.inArray( true, array);
	
		//slide.();
	}
	
	$(".sl10 input[type=checkbox]").click( function(e) {
	
		let slide = document.getElementById('sl10');
		$('.sl10 .next_step #next.disabled').removeClass('disabled');
		if(slide.style.backgroundImage=='') {
			slide.style.backgroundImage = 'url(img/map.png)';
		}
		let x = event.target.name;
	
	
	
		switch(x) {
	
			case 'ray1':  // if (x === 'value1')
				if (jQuery(event.target).is(":checked")) {
					pid1 = ', url(img/kirov.png)';
					muha+=1;
	
				} else {
					muha-=1;
					pid1='';
					slide.style.backgroundImage ='url(img/map.png)'+pid2+pid3+pid4;
				}
			  break
	
			case 'ray2':  // if (x === 'value2')
			if (jQuery(event.target).is(":checked")) {
				pid2 = ', url(img/novosav.png)';
				muha+=1;
			} else {
				muha-=1;
				pid2='';
				slide.style.backgroundImage ='url(img/map.png)'+pid1+pid3+pid4;
			}
			  break
	
	
			case 'ray3':  // if (x === 'value2')
			if (jQuery(event.target).is(":checked")) {
				pid3 = ', url(img/sov.png)';
				muha+=1;
			} else {
				muha-=1;
				pid3='';
				slide.style.backgroundImage ='url(img/map.png)'+pid2+pid1+pid4;
			}
			  break
	
	
			case 'ray4':  // if (x === 'value2')
			if (jQuery(event.target).is(":checked")) {
				pid4 = ', url(img/vah.png)';
				muha+=1;
			} else {
				muha-=1;
				pid4='';
				slide.style.backgroundImage ='url(img/map.png)'+pid1+pid2+pid3;
			}
			  break
	
	
		  }
	
	
		  if(muha==0)
		{
			// $( ".sl10 .next_step a" ).addClass('hidden');
		}
		  else
		  {
			// $( ".sl10 .next_step a" ).removeClass('hidden');
		  }
	
		  slide.style.backgroundImage += pid1+pid2+pid3+pid4;
	
		  if (muha>3)
		  {
			  $( ".sl10 .wrap p" ).removeClass("hidden");
			  $('#radio24').prop('checked', false);
			  slide.style.backgroundImage = 'url(img/map.png), url(img/kirov.png), url(img/novosav.png), url(img/sov.png)';
			  muha=3;
			  pid4='';
		}
		else if(muha<3){
		$( ".sl10 .wrap p" ).addClass("hidden");
		}
	
	
		let sli = document.getElementById('sl3');
		sli.style.backgroundImage = slide.style.backgroundImage;
	
	});
	
	$(document).on('click', ".items ul li.active,.items ul li.current", function(e){
		slide = $(this).parent().children().index(this)+1;
	//	console.log(slide);
		slide_prev = slide+1;
		$('.slides>div').addClass('hidden');;
		$('.sl'+slide).removeClass('hidden');;
	
		$('.items ul li').removeClass('current');
		$('.items ul li:nth-child('+slide+')').addClass('current');
	});
	
	
	rmax=0;
	
	
	
	function raysel(){
	//	console.log('Ray sel');
	
		rmax = 15;
	
	
		ray1 = 0;
		if($('input[name="ray1"]').is(':checked'))
		{
		  ray1 = $("input[name=ray1]").val();
		}
	
		ray2 = 0;
		if($('input[name="ray2"]').is(':checked'))
		{
		 ray2 = $("input[name=ray2]").val();
		}
	
		ray3 = 0;
		if($('input[name="ray3"]').is(':checked'))
		{
		  ray3 = $("input[name=ray3]").val();
		}
	
		ray4 = 0;
		if($('input[name="ray4"]').is(':checked'))
		{
		 ray4 = $("input[name=ray4]").val();
		}
	
	
		rmax=parseInt(ray1)+parseInt(ray2)+parseInt(ray3)+parseInt(ray4);
	
		let my_range = $(".js-range-slider").data("ionRangeSlider");
	
		my_range.update({ max: rmax});
	
	
	
		if( rmax==15)
	  {
		$('.max_procent').html('0%');
		  my_range.update({ max: rmax});
	   }
	
	  if( rmax==30)
	  {
		$('.max_procent').html('4%');
		  my_range.update({ max: rmax});
	  }
	
	  if( rmax==45)
	  {
		$('.max_procent').html('8%');
		  my_range.update({ max: rmax});
	  }
	
	
	  slide.style.backgroundImage += pid1+pid2+pid3+pid4;
	
	
	}
	
	
	//raysel();
	
	  $('.raschet').addClass('hidden');
	
	
	$( ".sl1 .btns a" ).click(function(e) {
		let x = event.target;
		if (x.id == 'cityNn') {
			//$( ".sl1 .next_step a" ).attr("href", "/niz/");
			$("#cityKazan").removeClass('active');
			if(!$("#"+x.id).hasClass('active')){
				$("#"+x.id).addClass('active')
			}
	
		} else if (x.id == 'cityKazan'){
	
			$("#cityNn").removeClass('active');
			if(!$("#"+x.id).hasClass('active')){
				$("#"+x.id).addClass('active')
			}
		}
	
	
	
		totalPrice();
	
	
	
	
	
	  //$('.sl1 .btns a ').toogleClass('active');
	  $(this).addClass('active');
	
	  city_id = $(this).data('id');
	  // alert(city_id);
	
	  if(city_id == 1){
		$('.city_id').text('Вся Казань');
		$('.raschet .title span').text('Вся Казань');
	  }
	
	  if(city_id == 2){
		  $('.city_id').text('Весь Нижний Новгород');
		$('.raschet .title span').text('Весь Нижний Новгород');
	  }
	
	  totalPrice();
	});
	
	$( ".sl1 .next_step a" ).click(function() {
	  $('.raschet').removeClass('hidden');
	});
	
	
	
	
	$( ".sl2 .item" ).click(function()
	 {
	  $('.sl2 .item').removeClass('active');
	  $(this).addClass('active');
	
	  paket = $('.sl2 .item.active .left .name').text();
	  $('.raschet .title span').text(paket);
	
	  rayon = $(this).data('rayon');
	
	  $(".sl3 .js-range-slider").ionRangeSlider();
	  let my_range = $(".js-range-slider").data("ionRangeSlider");
	
	
	  if(rayon == parseInt(1) || rayon == parseInt(3))
	  {
		$('.max_procent').html('10%');
		my_range.update({max: 60});
	
	  }
	  totalPrice();
	});
	
	
	
	$( ".show_media .close" ).click(function() {
	  $('.popup').addClass('hidden');
	});
	$( "#mediametria" ).click(function() {
	  $('.popup').removeClass('hidden');
	});
	
	
	
	 $(".js-range-slider").ionRangeSlider({
		onChange: function (data) {
			left = $('.sl3 .irs-handle.single').css("left");
			$('.text_procent').css( "left", left );
			count = (data['from']);
			sl3_skidka(count);
			totalPrice();
		},
	});
	
	
	
	let val=15;
	
	$('.js-range-slider .text_procent').html('0%');
	
	  function sl3_skidka(count){
	
		period = $('.period_skidka .sec span').html();
		 chastotnost(1, parseInt(period), count);
	
		 $('input[name=kol_ek_text]').val(count);
		 val = $( "input[name=kol_ek_text]" ).val();
	
		 $('.mon span').html(val);
		 $('.ekranu span').html(val + ' шт');
	
		//console.log(val);
	
		if((val>=56) || (val>42 && val<=45) )
			{
			  $('.skidka .max_procent').addClass('hidden');
			}
			else
			{
			  $('.skidka .max_procent').removeClass('hidden');
			}
	
		 if(count <= 15){
			 $('.text_procent').html('0%');
			 $('.perc span').html('0%');
		 }
	
		 if(count >= 16 && count <= 20){
			 $('.text_procent').html('1%');
			 $('.perc span').html('1%');
		 }
		 if(count >= 21 && count <= 24){
			 $('.text_procent').html('2%');
			 $('.perc span').html('2%');
		 }
		 if(count >= 25 && count <= 28){
			 $('.text_procent').html('3%');
			 $('.perc span').html('3%');
		 }
		 if(count >= 29 && count <= 32){
			 $('.text_procent').html('4%');
			 $('.perc span').html('4%');
		 }
		 if(count >= 33 && count <= 36){
			 $('.text_procent').html('5%');
			 $('.perc span').html('5%');
		 }
		 if(count >= 37 && count <= 41){
			 $('.text_procent').html('6%');
			 $('.perc span').html('6%');
		 }
		 if(count >= 42 && count <= 44){
			 $('.text_procent').html('7%');
			 $('.perc span').html('7%');
		 }
		 if(count >= 45 && count <= 50){
			 $('.text_procent').html('8%');
			 $('.perc span').html('8%');
		 }
		 if(count >= 51 && count <= 55){
			 $('.text_procent').html('9%');
			 $('.perc span').html('9%');
		 }
		 if(count >= 56 && count <= 60){
			 $('.text_procent').html('10%');
			 $('.perc span').html('10%');
		 }
	 }
	
	
		$( "input[name=kol_ek_text]" ).change(function()
		 {
			let my_range = $(".js-range-slider").data("ionRangeSlider");
			val = $( "input[name=kol_ek_text]" ).val();
			if(rayon == parseInt(2))
			{
				my_range.update({ max: rmax});
			}
	
	
	
	
	   if(val <= 15)
		{
			val = 15;
		}
	
	
		if(rayon == parseInt(2) && val>=rmax)
		{
			val = rmax;
	
		}
	
		if((rayon != parseInt(2)) && val >= 60)
		{
			val = 60;
		}
	
	
	
	
	
	
		sl3_skidka(val);
	
		my_range.update({
			from: val
		});
	
		left = $('.irs-handle.single').css("left");
		$('.text_procent').css( "left", left );
	
		totalPrice();
	});
	
	
	
	
	
	$( "input[name=hrono]" ).click(function() {
		$('.hronometraj span').html($("input[name=hrono]:checked").val() + ' сек');
		totalPrice();
	});
	
	
	
	var counts = '';
	
	 $(".chast_pokaza").ionRangeSlider({
		 onStart: function (data) {
				window.counts = data['from'];
		},
		onChange: function (data) {
			left = $('.sl4 .irs-handle.single').css("left");
			$('.text_procent2').css( "left", left );
			count = data['from'];
			window.counts = data['from'];
			ravil=count;
			sl4_skidka(count);
			totalPrice();
		},
	});
	
	
	$( "input[name=second]" ).click(function() {
		//console.log(window.counts);
		sl4_skidka(window.counts);
		totalPrice();
	});
	
	
	hrch=0;
	
	
	function sl4_skidka(chastota){
		sec = $("input[name=second]:checked").val();
	
		ekranu = parseInt($('.ekranu span').html());
		
	
		$('.hronometraj span').html(sec+' сек');
		$('.skidka2 .sec span').html(sec);
		period = $('.period_skidka .sec span').html();
		chastotnost(chastota, parseInt(period), ekranu);
		
		if(chastota == 1){
			setCircleTo(20);
			$('.circle-chart__percent').html(1+' выход');
			$('.irs-grid-text.js-grid-text-0').addClass('hidden');
	
		}
		else
		{
			$('.irs-grid-text.js-grid-text-0').removeClass('hidden');
		}
		if(chastota == 2){
			setCircleTo(40);
			$('.circle-chart__percent').html(2+' выхода');
			$('.irs-grid-text.js-grid-text-1').addClass('hidden');
	
		}
		else
		{
			$('.irs-grid-text.js-grid-text-1').removeClass('hidden');
		}
		if(chastota == 3){
			setCircleTo(60);
			$('.circle-chart__percent').html(3+' выхода');
			$('.irs-grid-text.js-grid-text-2').addClass('hidden');
		}
		else
		{
			$('.irs-grid-text.js-grid-text-2').removeClass('hidden');
		}
		if(chastota == 4){
			setCircleTo(80);
			$('.circle-chart__percent').html(4+' выхода');
			$('.irs-grid-text.js-grid-text-3').addClass('hidden');
		}
		else
		{
			$('.irs-grid-text.js-grid-text-3').removeClass('hidden');
		}
		if(chastota == 5){
			setCircleTo(100);
			$('.circle-chart__percent').html(5+' выходов');
			$('.irs-grid-text.js-grid-text-4').addClass('hidden');
		}
		else
		{
			$('.irs-grid-text.js-grid-text-4').removeClass('hidden');
		}
	
		if(sec == 5){
	
			if(chastota == 1){
				$('.text_procent2').html('0%');
				hrch=0;
	
			}
			if(chastota == 2){
				$('.text_procent2').html('7%');
				hrch=7;
			}
			if(chastota == 3){
				$('.text_procent2').html('9%');
				hrch=9;
			}
			if(chastota == 4){
				$('.text_procent2').html('12%');
				hrch=12;
			}
			if(chastota == 5){
				$('.text_procent2').html('15%');
				hrch=15;
			}
	
		}
		if(sec == 10){
	
			if(chastota == 1){
				$('.text_procent2').html('7%');
				hrch=7;
			}
			if(chastota == 2){
				$('.text_procent2').html('12%');
				hrch=12;
			}
			if(chastota == 3){
				$('.text_procent2').html('15%');
				hrch=15;
			}
			if(chastota == 4){
				$('.text_procent2').html('15%');
				hrch=15;
			}
			if(chastota == 5){
				$('.text_procent2').html('15%');
				hrch=15;
			}
		}
		if(sec == 15){
	
			if(chastota == 1){
				$('.text_procent2').html('9%');
				hrch=9;
			}
			if(chastota == 2){
				$('.text_procent2').html('15%');
				hrch=15;
			}
			if(chastota == 3){
				$('.text_procent2').html('15%');
				hrch=15;
			}
			if(chastota == 4){
				$('.text_procent2').html('15%');
							hrch=15;
	
			}
			if(chastota == 5){
				$('.text_procent2').html('20%');			hrch=20;
	
			}
	
		}
	
		$('.skidka2 .proc span').html($('.text_procent2').html());
         
	     ////////////////////////////////////////АЛО/////////////////////////////////////////////////////////////
		//alert(chastota);
	}
	
	
	function setCircleTo(percent)
	{
	
		$('.circle-chart').addClass('hidden');
		//console.log('#circle-chart_'+percent);
	
		$('#circle-chart_'+percent).removeClass('hidden');
	
		var chk = $('.select_hron input:checked').val();
	
		if(chk==5){
		  adjustedLen = 2.5;
		}
		if(chk==10){
		  adjustedLen = 4;
		}
		if(chk==15){
		  adjustedLen = 7;
		}
		$('.circle-chart__circle').each(function(index,element){
		  $(element).get(0).setAttribute('stroke-dasharray', adjustedLen+' '+100);
		});
	
	
	
	}
	
	( function( factory ) {
		if ( typeof define === "function" && define.amd ) {
			define( [ "../widgets/datepicker" ], factory );
		} else {
	
			factory( jQuery.datepicker );
		}
	}( function( datepicker ) {
	
		datepicker.regional.ru = {
		closeText: "Закрыть",
		prevText: "◀",
		nextText: "▶",
		currentText: "Сегодня",
		monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
		"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
		monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
		"Июл","Авг","Сен","Окт","Ноя","Дек" ],
		dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
		dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
		dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
		weekHeader: "Нед",
		dateFormat: "mm.dd.yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
		datepicker.setDefaults( datepicker.regional.ru );
	
		return datepicker.regional.ru;
	
	} ) );
	
	
	function date_skidka(date){
		$('.period_skidka .sec span').html(date);
	
		if(date==1 || date==21 || date==31){$('.period_skidka .sec label').html('день');}
		else if((date>=2 && date<=4) || (date>=22 && date<=24) ){$('.period_skidka .sec label').html('дня');}
		else $('.period_skidka .sec label').html('дней');
	
		if(date >= 1 && date <= 2){
			 $('.period_skidka .proc span').html('0%');
		 }
	
		 if(date >= 3 && date <= 7){
			 $('.period_skidka .proc span').html('5%');
		 }
	
		 if(date >= 8 && date <= 13){
			 $('.period_skidka .proc span').html('10%');
		 }
		 if(date >= 14 && date <= 20){
			 $('.period_skidka .proc span').html('15%');
		 }
		 if(date >= 21 && date <= 29){
			 $('.period_skidka .proc span').html('16%');
		 }
		 if(date >= 30){
			 $('.period_skidka .proc span').html('17%');
		 }
	
	}
	
	
	//выбор периода ...............................
	$(function() {
	  $('#date_period').datepicker({
		maxDate: '+90d',
		minDate: '+1d',
		  showOtherMonths: false,
		range: 'period', // режим - выбор периода
		numberOfMonths: 1,
		onSelect: function(dateText, inst, extensionRange) {
		  var date1 = new Date(extensionRange.startDateText);
		  var date2 = new Date(extensionRange.endDateText);
		  var daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) + 1;
	
		$('.period span').html(daysLag + ' дней');
		  $('.period_days').html(daysLag);
	
		  $('#period_month').html('Период размещения <br> <span>Июлю</span>');
	
		  date_skidka(daysLag);
	
	
		  period = $('.period_skidka .sec span').html();
	
	
		  ekranu = parseInt($('.skidka_2 .mon span').html());
	
		  chastotnost(window.counts, period, ekranu);
	
		  totalPrice();
	
		  period_dat(extensionRange.startDateText, extensionRange.endDateText);
	
		}
	
	  });
	  // объект расширения (хранит состояние календаря)
	  var extensionRange = $('#date_period').datepicker('widget').data('datepickerExtensionRange');
	  $('#date_period').datepicker( "option", "defaultDate", +7 );
	}
	
	);
	 //.................................
	
	function period_dat(start_date, end_date){
		
		month_start = start_date.slice(0, -8);
		month_end = end_date.slice(0, -8);
	
		month = month_start +' - '+ month_end;
	
		day_start = start_date.slice(3, -5);
		day_end = end_date.slice(3, -5);
	
		day = day_start +' - '+ day_end;
	
		$('.period_razm').html(day);
	
	
		var date_s = new Date(start_date);
		date_s = date_s.getMonth();
	
		var date_e = new Date(end_date);
		date_e = date_e.getMonth();
	
		if(date_s == date_e){
			month = back_month(date_s+1);
			$('#period_month span').html(month);
		}else{
			month1 = back_month(date_s+1);
			month2 = back_month(date_e+1);
			$('#period_month span').html(month1 + ' - ' + month2);
		}
	
	
	}
	
	function back_month(month){
		month = parseInt(month);
		if(month == 1){
			return 'январь';
		}
		if(month == 2){
			return 'февраль';
		}
		if(month == 3){
			return 'март';
		}
		if(month == 4){
			return 'апрель';
		}
		if(month == 5){
			return 'май';
		}
		if(month == 6){
			return 'июнь';
		}
		if(month == 7){
			return 'июль';
		}
		if(month == 8){
			return 'август';
		}
		if(month == 9){
			return 'сентябрь';
		}
		if(month == 10){
			return 'октябрь';
		}
		if(month == 11){
			return 'ноябрь';
		}if(month == 12){
			return 'декабрь';
		}
	}
	
	//выбор по дням ...............................
	$(function() {
	  $('#date_range').datepicker({
		minDate: '+1d',
		maxDate: '+45d',
		range: 'multiple', // режим - выбор нескольких дат
		showOtherMonths: false,
		onSelect: function(dateText, inst, extensionRange) {
		  $('.period span').html(extensionRange.datesText.length + ' дней');
		  $('.period_days').html(extensionRange.datesText.length);
		  date_skidka(extensionRange.datesText.length);
	
		  period = $('.period_skidka .sec span').html();
	
	
		  ekranu = parseInt($('.skidka_2 .mon span').html());
	
		  chastotnost(window.counts, period, ekranu);
		  totalPrice();
		  var str = '';
	
			let i = 0;
	
			while (i < extensionRange.datesText.length) {
			  //console.log(extensionRange.datesText[i]);
	
			  str += back_d(extensionRange.datesText[i])+ "<br>";
			  i++;
			}
	
	
			$('#period_month').html('Период размещения');
			$('.period_razm').html(str);
	
		}
	});
	 //.................................
	
	  var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');
	});
	
	function back_d(date){
	
		day = month_end = date.slice(3, -5);
		month = month_end = date.slice(0, -8);
		return day +'.'+month;
	}
	
	
	$( "input[name=date_chenge]").click(function() {
			$(".date_pick .d-flex .sp1").toggleClass('yellow');
			$(".date_pick .d-flex .sp2").toggleClass('yellow');
	
			$("#date_range").toggleClass('hidden');
			$("#date_period").toggleClass('hidden');
	
	//		$(".date_pick .text").toggleClass('hidden');
	
		//	$(".date_pick .text2").toggleClass('hidden');
	
	});
	
	$(document).on('mouseenter','.sp1',function(){
			  $(".date_pick .text").removeClass('hidden');
			  $(".date_pick .text2").addClass('hidden');
	});
	$(document).on('mouseout','.sp1',function(){
			  $(".date_pick .text").addClass('hidden');
			  $(".date_pick .text2").addClass('hidden');
	});
	
	
	$(document).on('mouseenter','.sp2',function(){
			  $(".date_pick .text2").removeClass('hidden');
			  $(".date_pick .text").addClass('hidden');
	});
	$(document).on('mouseout','.sp2',function(){
			  $(".date_pick .text2").addClass('hidden');
			  $(".date_pick .text").addClass('hidden');
	});
	
	
	function chastotnost(chast, period, ekranu){
	  console.log("chastotnost  "+ chast);
		sytki = 24*60*60/300*chast;
		$('#sytki').html(sytki); //кол-во выходов за сутки на экран
		sytki60 = sytki * 60;
		$('#sytki60').html(sytki60); //кол-во выходов за сутки на 60 экранов
	
		dney14 = sytki * 14;
		$('#dney14').html(dney14); //кол-во выходов за 14 дней на 1 экран
	
		dney14_60 = sytki60 * 14;
		$('#dney14_60').html(dney14_60); //кол-во выходов за 14 дней на 1 экран
	
	
		//количество выходов расчет
	
		kol_ekranov = $('.raschet .data .ekranu span').html(); //кол-во экроанов
		kol_dney = $('.raschet .data .period span').html(); //кол-во дней
	
		result = sytki * parseInt(kol_ekranov) * parseInt(kol_dney);
		$('.chastotnost').html(formatNumber(result)); //кол-во выходов вывод расчета
	
	
		sec = parseInt($("input[name=second]:checked").val());
	
		efir_vr_1 = sytki * sec;
		$('#efir_vr_1').html(efir_vr_1); //эфирное время 1 экран 1 день
	
		efir_vr_60 = sytki60 * sec;
		$('#efir_vr_60').html(efir_vr_60); //эфирное время 60 экранов 1 день
	
	
		efir_day_14 = dney14 * sec;
		$('#efir_day_14').html(efir_day_14); //эфирное время 1 экран 14 день
	
		efir_day_14_60 = dney14_60 * sec;
		$('#efir_day_14_60').html(efir_day_14_60); //эфирное время 1 экран 14 день
	
	
	
	
		efir_vr = result * sec;
		$('.efir_vr').html(formatNumber(efir_vr));
	
	
	
	
		if(sec == 5){
			coef = 1;
		}
		if(sec == 10){
			coef = 2;
		}
		if(sec == 15){
			coef = 3;
		}
	
		pot_kon_4 = 123;
	
		//kontaktu = (45/5*ekranu*period*chast)*1000*coef;
	
	
		kontaktu = (45/5*parseInt(kol_ekranov)*window.counts * parseInt(kol_dney)) *1000* coef;
	
		$('.kontaktu').html(formatNumber(kontaktu));
	
		//45/5*E17*E20*E19)*1000*E33
	}
	
	
	$( ".sl6 label" ).click(function() {
		$(this).next( ".price" ).toggleClass('yellow');
		$(this).toggleClass('yellow');
	
		totalPrice();
	});
	
	$( ".btn-tooltip" ).hover(function() {
		$(this).toggleClass('vis');
	});
	
	
	$( ".sl6 label" ).hover(function() {
		totalPrice();
	});
	
	function formatNumber(num) {
	  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
	}
	function totalPrice(){
		paket = parseInt($('.sl2 .item.active').data('rayon'));
		koef = 0.65;
	
		if(paket == 1){
			paket = 35;
			koef = 0.65;
		}
	
		if(paket == 2){
			paket = 30;
			koef = 0.7;
		}
		if(paket == 3){
			paket = 25;
			koef = 0.75;
		}
		//расчет скидки от пакета-----------------------------------
	
		kol_rk = parseInt($('.sl3 .skidka_2 span').html()); //количество РК
		kol_rk_skidka = parseInt($('.sl3 .skidka_2 .perc span').html()); //количество РК скидка
	
	
		hron = parseInt($('.sl4 .skidka2 .sec span').html()); //хронометраж
		chust = window.counts;//частотн67ость выхода на экран
		hron_plus_chust = parseInt($('.sl4 .skidka2 .proc span').html()); //хронометраж и частотность
	
		kol_dney = parseInt($('.sl5 .wrap .period_skidka .sec span').html());
		if (kol_dney>90)
		{
			kol_dney=90;
			alert('Вы можете выбрать не более 90 дней! Пожалуйста выберите заново!')
		}
		kol_dney_skidka = parseInt($('.sl5 .wrap .period_skidka .proc span').html()); //количетсво дней
	
		skidka = paket+kol_rk_skidka+hron_plus_chust+kol_dney_skidka; //скидка в процентах
	
		old_price = 0.396*hron*288*kol_dney*kol_rk*chust; //расчет старого прайса
		old_price = old_price.toFixed(0);
	
		$('.raschet .price_block .old').html(formatNumber(old_price)); //старый прайс запись в блок
	
		//new_price = old_price - (old_price * .5);
	
		new_price = old_price - (old_price * skidka / 100); //новый прайс
		new_price = new_price.toFixed(0); //новый прайс
	
		//$('.raschet .price_block .new').html(new_price + ' руб.'); //новый прайс запись в блок
	
		ekonomia = old_price - new_price; //экономия
		$('.ekonomia').html(formatMoney((ekonomia), " ", " "," ") + ' руб.');
		$('.ekonomia-procent').html(Math.round(((100/old_price)*ekonomia)) + '%');
		$('.raschet .price_block .new').html(formatMoney((new_price), " ", " "," ") + ' руб.'); //новый прайс запись в блок
		$('.col-md-6  .new_price').html(formatMoney((new_price), " ", " "," ") + ' руб.');
		dop_ysl(kol_rk,new_price, old_price);
	
	
		pot_kont = $('.data2 .kontaktu').html();
	
		one_contact =  parseInt(new_price) / kontaktu;
	
		$('.one_contact').html(one_contact.toFixed(2) + ' руб.');
	
	
	
	  var count_see = (24*60*60/300*parseInt($('.chast_pokaza').val()));
	  var count_see_monitors = (count_see*parseInt($('input[name="kol_ek_text"]').val()));
	  var count_see_period_days_1 = (count_see*parseInt($('.raschet .data .period span').text()));
	  var count_see_period_days_many = (count_see_monitors*parseInt($('.raschet .data .period span').text()));
	
	
	  var efire_time_1 = (count_see*parseInt($('input[name="second"]:checked').val()));
	  var efire_time_2 = (count_see_monitors*sec);
	  var efire_time_3 = (count_see_period_days_1*parseInt($('input[name="second"]:checked').val()));
	  var efire_time_4 = (count_see_period_days_many*parseInt($('input[name="second"]:checked').val()));
	
	  var contacts_4 = kontaktu;
	  var contacts_3 = parseInt(contacts_4/parseInt(val));
	  var contacts_2 = parseInt(contacts_4/parseInt($('.raschet .data .period span').text()));
	  var contacts_1 = parseInt(contacts_3/parseInt($('.raschet .data .period span').text()));
	
	  $('.period_days').text(parseInt($('.raschet .data .period span').text()));
	  $('.mediam_1 td:nth-child(3)').text('на '+parseInt(val)+' экранах');
	  $('.mediam_1 td:nth-child(5)').text('на '+parseInt(val)+' экранах');
	
	  $('.mediam_2 td:nth-child(2)').text(formatMoney((count_see), " ", " "," "));
	  $('.mediam_2 td:nth-child(3)').text(formatMoney((count_see_monitors), " ", " "," "));
	  $('.mediam_2 td:nth-child(4)').text(formatMoney((count_see_period_days_1), " ", " "," "));
	  $('.mediam_2 td:nth-child(5)').text(formatMoney((count_see_period_days_many), " ", " "," "));
	
	
	  $('.mediam_3 td:nth-child(2)').text(formatMoney((efire_time_1), " ", " "," "));
	  $('.mediam_3 td:nth-child(3)').text(formatMoney((efire_time_2), " ", " "," "));
	  $('.mediam_3 td:nth-child(4)').text(formatMoney((efire_time_3), " ", " "," "));
	  $('.mediam_3 td:nth-child(5)').text(formatMoney((efire_time_4), " ", " "," "));
	
	
	
	  $('.mediam_4 td:nth-child(2)').text(formatMoney((contacts_1), " ", " "," "));
	  $('.mediam_4 td:nth-child(3)').text(formatMoney((contacts_2), " ", " "," "));
	  $('.mediam_4 td:nth-child(4)').text(formatMoney((contacts_3), " ", " "," "));
	  $('.mediam_4 td:nth-child(5)').text(formatMoney((contacts_4), " ", " "," "));
	
	}
	
	  totalPrice();
	
	$(document).on('change','input[name="second"]',function()
	{
	
	  totalPrice();
	});
	
	$(document).on('click','.select_hron',function()
	{
	
	  totalPrice();
	});
	
	function dop_ysl(kol_rk,new_price, old_price)
	{
		multcheck=1;
		mult = 0;
		str = '';
	
		if($('input[name="mult"]').is(':checked'))
		{
		  mult = 4000;
		  str += '<div class="d-flex justify-content-between"><div class="name">Мультисюжетность</div><div class="count">4 000руб.</div></div>'
		  multcheck*=2;
		}
	
		target = 0;
		if($('input[name="target"]').is(':checked'))
		{
		  target = 2500;
		  str += '<div class="d-flex justify-content-between"><div class="name">Таргетирование по времени</div><div class="count">2 500руб.</div></div>'
	
		}
	
		foto = 0;
		if($('input[name="foto"]').is(':checked'))
		{
		  foto = 50;
		  foto*=kol_rk*multcheck;
		  str += '<div class="d-flex justify-content-between"><div class="name">Фотоотчет</div><div class="count">50 руб.</div></div>'
		}
	
		maket = 0;
		if($('input[name="maket"]').is(':checked'))
		{
		  maket =4000;
		  str += '<div class="d-flex justify-content-between"><div class="name">Разработка динамичного ролика</div><div class="count">4 000руб.</div></div>'
		}
	
		adapt = 0;
		if($('input[name="adapt"]').is(':checked'))
		{
		  adapt = 1500;
		  str += '<div class="d-flex justify-content-between"><div class="name">Адаптация макета</div><div class="count">1 500руб.</div></div>'
	
	
		}
		anim = 0;
		if($('input[name="anim"]').is(':checked'))
		{
		  anim = 2000;
		  str += '<div class="d-flex justify-content-between"><div class="name">Анимация статичного макета</div><div class="count">2 000руб.</div></div>'
	
	
		}
	
	
	
	$('.dop_yslugi .dd').html(str);
	
	
	
	
		new_price = parseInt(new_price) + parseInt(mult) + parseInt(target) + parseInt(foto) + parseInt(maket) + parseInt(adapt)+ parseInt(anim);
	
		ekonomia = parseInt(old_price) - parseInt(new_price); //экономия
		$('.ekonomia').html(formatMoney((ekonomia), " ", " "," ") + ' руб.');
		$('.ekonomia-procent').html(Math.round(((100/parseInt(old_price))*ekonomia)) + '%');
		$('.raschet .price_block .new').html(formatMoney((new_price), " ", " "," ") + ' руб.'); //новый прайс запись в блок
		$('.col-md-6 .old_price').html(formatMoney((old_price), " ", " "," ") + ' руб.');
		$('.col-md-6  .new_price').html(formatMoney((new_price), " ", " "," ") + ' руб.');
	
	//console.log(new_price+"1");
	
	}
	
	
	
	
	/********************************************************************************************** */
	
	
	
	function ajaxForm(el) {
		var msg   = $(el).serialize();
		 $.ajax({ type: 'POST', url: '/new/php/ajax.php', data: msg, success: function(data)
			 {
					 $(".b-modal-window.m-thanks").css("display", "block");
					 $(".b-modal-window.m-form").css("display", "none");
			 }, error:  function(xhr, str){ alert('Возникла ошибка: ' + xhr.responseCode); } });
	}
	