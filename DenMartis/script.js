
  $('.slider-hor').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    responsive: [
      {
        breakpoint:812,
        settings: {
          arrows:false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 380,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.about-me').on('click',function() {
    $('.hidden-block').slideToggle(500);
    return false;
  });
  $('.text-contacts').on('click',function() {
    $('.contacts').slideToggle(500);
    return false;
  });
