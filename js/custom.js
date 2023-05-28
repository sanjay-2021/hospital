$('.testi-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    dots:false
  });

  jQuery('.toggle-btn').click(function() {
    jQuery("body").toggleClass('menu-open');
  });
  
 

