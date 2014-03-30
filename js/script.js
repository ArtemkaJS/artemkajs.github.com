$(document).ready(function($) {
	
	var tumbler = new Tumbler({
		outer: $('#onOffBtnBox'),
		inner: $('#onOffBtn')
	});

	var slider1 = new LongSlider({
		longSlide: $('#longSlide'),
		sliderBtn: $('#sliderBtn')
	});

	var slider2 = new FillVolumeSlider({
		longSlide: $('#volumeSlider'),
		longSlideInFill: $('#volumeSliderBtn'),
		sliderBtn: $('#volumeBtnPic')
	});

	var list = new List({
		btnList: $('#center'),
		list: $('#centerList')
	});

	var equalizer1 = new Equalizer({
		longSlide: $('#eq1'),
		sliderBtn: $('#eq1Btn')
	});
	var equalizer2 = new Equalizer({
		longSlide: $('#eq2'),
		sliderBtn: $('#eq2').children()
	});
	var equalizer3 = new Equalizer({
		longSlide: $('#eq3'),
		sliderBtn: $('#eq3').children()
	});
	var equalizer4 = new Equalizer({
		longSlide: $('#eq4'),
		sliderBtn: $('#eq4').children()
	});
	var equalizer5 = new Equalizer({
		longSlide: $('#eq5'),
		sliderBtn: $('#eq5').children()
	});
	var equalizer6 = new Equalizer({
		longSlide: $('#eq6'),
		sliderBtn: $('#eq6').children()
	});
	var equalizer7 = new Equalizer({
		longSlide: $('#eq7'),
		sliderBtn: $('#eq7').children()
	});
	var equalizer8 = new Equalizer({
		longSlide: $('#eq8'),
		sliderBtn: $('#eq8').children()
	});
	var equalizer9 = new Equalizer({
		longSlide: $('#eq9'),
		sliderBtn: $('#eq9').children()
	});
	var equalizer10 = new Equalizer({
		longSlide: $('#eq10'),
		sliderBtn: $('#eq10').children()
	});

	var raiting1 = new Raiting({
		star: $('#horror ul li')
	});
	var raiting2 = new Raiting({
		star: $('#fantasy ul li')
	});
	var raiting3 = new Raiting({
		star: $('#comedy ul li')
	});
	var raiting4 = new Raiting({
		star: $('#drama ul li')
	});
	var raiting5 = new Raiting({
		star: $('#animation ul li')
	});
	var raiting6 = new Raiting({
		star: $('#document ul li')
	});

/*----------------*/

function LongSlider(obj){
	var $longSlide = obj.longSlide;
	var $sliderBtn = obj.sliderBtn;
	var $count = $sliderBtn.children();
	$count.hide();

	var widthSlide = $longSlide.width();
	var widthBtn = $sliderBtn.width();
	var maxLeft = widthSlide - Math.round(widthBtn);

	$sliderBtn.on("mousedown", onMouseDown);
	$(document).on("mouseup", onMouseUp);

	$longSlide.on("click", onMouseClick);

	function onMouseClick(e1){
		var mouseX1 = e1.offsetX ? e1.offsetX : e1.originalEvent.layerX;

		if($(e1.target).attr('id') == $sliderBtn.attr('id')){
			return false;
		}
		if(mouseX1 < widthBtn/2){
			newLeft1 = 0;
		}else if(mouseX1 > maxLeft + Math.round( widthBtn/2 )){
			var newLeft1 = maxLeft;
		}else{
			var newLeft1 = mouseX1 - Math.round( widthBtn/2 );

		}
		$sliderBtn.css("left",  newLeft1);
	}

	function onMouseUp() {
		$(document).off("mousemove");
		$count.fadeOut();
	}
	function onMouseDown(e1) {
		left = parseInt($sliderBtn.css("left"));

		e1.stopPropagation();

		var newLeft = left;
		var percent = Math.round( (newLeft*100)/maxLeft );
		$count.fadeIn();	
		$count.text(percent + '%');

		$(document).on("mousemove", function(e2){
			onMouseMove(e1, e2);
		});

		return false;
	};
	function onMouseMove(e1, e2) {
			var mouseX1 = e1.pageX; /* Coord of mouseX click */
			var mouseX2 = e2.pageX; /* Coord of mouseX */
			var newLeft = parseInt(left) + (mouseX2 - mouseX1);
			if(newLeft < 0){
				newLeft = 0;
			}
			if(newLeft > maxLeft){
				newLeft = maxLeft;
			}
			$sliderBtn.css("left",  newLeft);	
			percent = Math.round( (newLeft*100)/maxLeft );
			$count.text(percent + '%');
	}

}

function Equalizer(obj) {
	var $longSlide = obj.longSlide;
	var $sliderBtn = obj.sliderBtn;

	var heightSlide = $longSlide.height();
	var heightBtn = $sliderBtn.height();
	var maxTop = heightSlide - Math.round(heightBtn);

	$sliderBtn.on("mousedown", onMouseDown);
	$(document).on("mouseup", onMouseUp);
	$longSlide.on("click", onMouseClick);

	function onMouseClick(e1){
		var mouseY1 = e1.offsetY ? e1.offsetY : e1.originalEvent.layerY;
		if($(e1.target).attr('id') == $sliderBtn.attr('id')){
			return false;
		}
		if(mouseY1 < heightBtn/2){
			newTop1 = 0;
		}else if(mouseY1 > maxTop + Math.round( heightBtn/2 )){
			var newTop1 = maxTop;
		}else{
			var newTop1 = mouseY1 - Math.round( heightBtn/2 );
		}
		$sliderBtn.css("top",  newTop1);
	}

	function onMouseUp() {
		$(document).off("mousemove");
	}
	function onMouseDown(e1) {
		top1 = parseInt($sliderBtn.css("top"));
		var newTop = top1;
		var percent = Math.round( (newTop*100)/maxTop );

		$(document).on("mousemove", function(e2){
			onMouseMove(e1, e2);
		});

		return false;
	};
	function onMouseMove(e1, e2) {
			var mouseY1 = e1.pageY; /* Coord of mouseX click */
			var mouseY2 = e2.pageY; /* Coord of mouseX */
			var newTop = parseInt(top1) + (mouseY2 - mouseY1);

			if(newTop < 0){
				newTop = 0;
			}
			if(newTop > maxTop){
				newTop = maxTop;
			}
			$sliderBtn.css("top",  newTop);	
			percent = Math.round( (newTop*100)/maxTop );
	}

}

function FillVolumeSlider(obj) {
	var $longSlide = obj.longSlide;
	var $longSlideInFill = obj.longSlideInFill;
	var $sliderBtn = obj.sliderBtn;
	var $count = $('#volumeCount');
	var maxWidth = $longSlide.width();
	var widthBtn = $sliderBtn.width();


	var width = parseInt($longSlideInFill.css("width"));
	var percent = Math.round( (width*100)/maxWidth );
	$count.text(percent + '%');


	$sliderBtn.on("mousedown", onMouseDown);
	$(document).on("mouseup", onMouseUp);



	$longSlide.on("click", onMouseClick);

	function onMouseClick(e1){
		var mouseX1 = e1.offsetX ? e1.offsetX : e1.originalEvent.layerX;
		console.log(mouseX1);
		console.log(e1);
		if($(e1.target).attr('id') == $sliderBtn.attr('id')){
			return false;
		}
		if(mouseX1 < widthBtn/2){
			newWidth = 0;
		}else if(mouseX1 > maxWidth + Math.round( widthBtn/2 )){
			var newWidth = maxWidth;
		}else{
			var newWidth = mouseX1 + Math.round( widthBtn/3 );
		}
		var percent = Math.round( (newWidth*100)/maxWidth );
		$count.text(percent + '%');
		$longSlideInFill.css("width",  newWidth);
	}



	function onMouseDown(e1) {
		width = parseInt($longSlideInFill.css("width"));
		var newWidth = width;
		var percent = Math.round( (newWidth*100)/maxWidth );
		$count.text(percent + '%');


		$(document).on("mousemove", function(e2){
			onMouseMove(e1, e2);
		});
		return false;
	}
	function onMouseMove (e1, e2) {
		var mouseX1 = e1.clientX;
		var mouseX2 = e2.clientX;
		var newWidth = parseInt(width) + (mouseX2 - mouseX1);

		if(newWidth > maxWidth){
			newWidth = maxWidth;
		}
		if(newWidth < 0){
			newWidth = 0;
		}
		$longSlideInFill.css("width", newWidth);
		var percent = Math.round( (newWidth*100)/maxWidth );
	
		$count.text(percent + '%');
	}
	function onMouseUp() {
		$(document).off("mousemove");
	}
}

function Tumbler(obj){
	var $onOffBtnBox = obj.outer;
	var $onOffBtn = obj.inner;
	var flag = true;

	$onOffBtnBox.on('click', onBtnClick);

	function onBtnClick(e1) {
		if(flag){
			onClick1(this);
			flag = false;
		}else{
			onClick2(this);
			flag = true;
		}
	}
	function onClick1(target) {
		$(target).children().animate({
			'left':'35px'
		}, 100).removeClass('btnOff').addClass('btnOn');

	}
	function onClick2(target) {
		$(target).children().animate({
			'left':'4px'
		}, 100).removeClass('btnOn').addClass('btnOff');;
	}

}

function List(obj) {
	var $btnList = obj.btnList;
	var $ulList = obj.list;
	var $list = $ulList.children();

	$btnList.on("click", onBtnClick);
	var isOpen = false;

	function onBtnClick(e1) {
		e1.preventDefault();
		e1.stopPropagation();
		toggle();
		$list.one('click', onListClick);
		$(document).on('click', onDocumentClick);
	}

	function onListClick(e1) {
		e1.stopPropagation();
		var text = $(e1.target).text();
		$btnList.children('span').text(text);
		close();
	}

	function onDocumentClick(e1) {
    	var isInside = $(e1.target).closest($btnList).length;
    	if (!isInside) close();
    }

    function close() {
    	$ulList.css('display', 'none');
    	$(document).off('click', onDocumentClick);
    	isOpen = false;
    }

    function open() {
		$ulList.css('display', 'block');
		isOpen = true;
	}

	function toggle() {
	    if (isOpen) close()
	    else open();
	}

}

function Raiting(obj) {
	var $star = obj.star;
	var self = this;

	this.numDef = $star.filter('.fillStar').length-1;

	$star.on('click', onStarClick);
	$star.on('mouseover', onStarMouseOver);

	function onStarClick(e) {
		var liLength = $star.length;
		var num = $(this).index();
		self.numDef = $(this).index();

		for (var i = 0; i <= num; i++) {
			$star.eq(i).addClass('fillStar');
		};
		for (var i = num+1; i < liLength; i++) {
			$star.eq(i).removeClass('fillStar');
		};
	}

	function onStarMouseOver(e) {
		var liLength = $star.length;
		var num = $(this).index();

		for (var i = 0; i <= num; i++) {
			$star.eq(i).addClass('fillStar');
		};
		for (var i = num+1; i < liLength; i++) {
			$star.eq(i).removeClass('fillStar');
		};

		$(this).on('mouseleave', function(e) {
			onStarMouseLeave(e, liLength, num);
		})
	}

	function onStarMouseLeave(e, liLength, num) {

		for (var i = 0; i <= self.numDef; i++) {
			$star.eq(i).addClass('fillStar');
		};
		for (var i = self.numDef+1; i < liLength; i++) {
			$star.eq(i).removeClass('fillStar');
		};

	}

};

var raiting1 = new Raiting({
	star: $('#horror ul li')
});

});




