$(document).on('click','.preventRight ul li a' ,function(){
	$('.preventRight ul li a').removeClass('active');
	$(this).addClass('active');
});

// Fixed Header Start

$(window).scroll(function () {

    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedHeader');
    } else {
        $('.header').removeClass('fixedHeader');
    }
});

// Fixed Header Start



// Home Banner Slider Start

$('.homeSlider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: false,
});

// Home Banner Slider End




//   Sidebar Start

$('.navbar-toggler').click(function () {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
        $('.navbar-expand-md .navbar-collapse').css('left', '-275px');
    } else {
        $('.navbar-expand-md .navbar-collapse').css('left', '0px');
    }
});

//   Sidebar End

//   Navbar Button Style Start

$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });
});

$('a.topArrow').click(function () {
    $('html, body').animate({
        scrollTop:0
    }, 1000);
    return false;
});

$(document).on('click' ,'.messageBox' ,function(){
	$('.chatBox').slideToggle();
});
$(document).on('click' ,'.chatHead a' ,function(){
	$('.chatBox').hide();
});

$(document).on('click' ,'a .prifileHome' ,function(){
	$('.profileAll').slideToggle();
});
document.addEventListener("mousedown", function (event) {
    if (event.target.closest(".profileAll ,.prifileHome"))
        return;
    $('.profileAll').slideUp();
});

$(document).on('click' ,'a.notAll' ,function(){
	$('.notificationAll').slideToggle();
});
document.addEventListener("mousedown", function (event) {
    if (event.target.closest(".notificationAll ,.notAll"))
        return;
    $('.notificationAll').slideUp();
});

// Add / Remove Product Start

$(".plus_btn").click(function () {
    var $n = $(this).parent(".vaulebox").find(".qty");
    $n.val(Number($n.val()) + 1);
});

$(".minus_btn").click(function () {
    var $n = $(this).parent(".vaulebox").find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
        $n.val(amount - 1);
    }
});

// $(".minus_btn").click(function () {
//      var prodCount = $('.vaulebox').find('.qty').val();
//      if($(prodCount < 1)){
//         $('.categoriesInner').find('.bookNowbox').css('display','none');
//      }
// });

// Add / Remove Product End

// Add product button show Start

$(document).ready(function () {
    $('.productAdd').click(function () {
        $(this).parents('.vaulebox').find('.minus_btn').css('display', 'block');
        $(this).parents('.vaulebox').find('.qty').css('display', 'block');
        $(this).parents('.vaulebox').find('.productAdd').css('display', 'none');
        $(this).parents('.categoriesInner').find('.bookNowbox').css('display', 'block');
    });
});

// Add product button show End


$(document).on('click', '.productDetailLeft ul li a', function () {
    $('.productDetailLeft ul li').removeClass('active');
	$('.productDetailLeft ul li a').removeClass('active');
    $(this).parent('li').addClass('active');
	 $(this).addClass('active');
	
	if($('.productDetailLeft ul li a').hasClass('active')){
	var x = $(this).children('ul li a img').attr('src');
		$('.productImg img').attr('src' , x);
}	
});
$(document).on('click','.productbuy ul li a' ,function(){
	$('.productbuy ul li a').removeClass('active');
	$(this).addClass('active');
});

//jyoti js//
//password//
function myFunction() {
  var x = document.getElementById("textPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
// input js
$(document).on('focus' ,'input , textarea' ,function(){
$('.prfl_form .form-group,.createOp .form-group').each(function(){
var labelVal = $(this).children('label').text();
if(labelVal != ''){
$(this).children('input').attr('placeholder' ,labelVal);
$(this).children('label').text('');
}
});
var placeholder = $(this).attr('placeholder');
$(this).siblings('label').text(placeholder);
$(this).attr('placeholder' ,'');
});
$(document).on('click' ,'.orderView ul li a' ,function(){
	$('.orderView ul li a').removeClass('active');
	$(this).addClass('active');
});
//document.addEventListener("mousedown", function (event) {
//    if (event.target.closest(".input ,.notAll"))
//        return;
//    $('.notificationAll').slideUp();
//});

