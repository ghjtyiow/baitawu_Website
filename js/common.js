
$(function(){
  //banner轮播
  var mySwiper = new Swiper ('.swiper-container',{
      autoplay:3000,
      speed:800,
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable: true
  })
  
  //左右固定层
  var w =$(window).width();
  var postion = (w-1200)/2;
  var left = postion-150;
  var right = postion-191;
  $('.floatBar_left').css('right',right);
  if (w<=1440) {
    $('.floatBar_left').css('right','10px');
  };
  // $('.floatBar_right').css('right',right);
})

//ToggleBar切换
$('.toggleMenu').on('click', 'dd', function(){
  var index = $(this).index();
  $(this).addClass('corrent').siblings().removeClass()
  $('.toggleUl ul').eq(index).fadeIn(200).siblings().fadeOut(200);
});

//返回顶部
$('.backTop').on('click',function(){
  $("html,body").animate({scrollTop: $('#wrapper').offset().top}, 1000);
});

//二级菜单显示
$('.nav').hover(function() {
  $('.subNnav').slideDown(500)
}, function() {
  $('.subNnav').slideUp(500)
});

//服务规范切换
$('.serviceList').on('click', 'li', function(){
  var index = $(this).index();
  $('.serviceBox > div').eq(index).fadeIn(300).siblings().fadeOut(300);
  $(this).append('<b></b>').siblings().find('b').remove();
});

