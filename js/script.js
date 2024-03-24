$(document).ready(function () {

  /*----- fixed header starts here -----*/

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    var header = document.getElementById("fixed-header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }
  /*---- fixed haedaer ends here -----*/

  /*---- mobile header starts from here -------*/

  $(".bar, .close-btn ").click(function(){
    // Toggle the body class
    $("body").toggleClass("menu-opened");
});

  /*---- mobile header ends here -------*/

    /*----- progressive bar starts here -------*/

    let numberPercent = document.querySelectorAll('.counter-values')
    let getPercent = Array.from(numberPercent)

    getPercent.map((items) => {
        let startCount = 0
        let progressBar = () => {
            startCount++
            items.innerHTML = `<p>${startCount}%</p>`
            items.style.width = `${startCount}%`
            if (startCount == items.dataset.count) {
                clearInterval(stop)
            }
        }
        let stop = setInterval(() => {
            progressBar()
        }, 40)
    })

 /*----- progressive bar ends here -------*/


/*----- counter starts here --------*/


var a = 0;
$(window).scroll(function() {
  var oTop = $('#counters-mod').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
                 {
        duration: 2000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    a = 1;
    $(function() {
      $('.chart').easyPieChart({
        trackColor:"#ce1446",
        scaleColor: "",
        lineWidth: 5,
        lineCap: 'round',
        barColor: '#c9f31d',
        size: 140,
        animate: 2000
      });
    });
  }
});

/*----- counter ends here --------*/

/*----- testimonial slider starts here ------*/

$(".testi-slider").slick( {
  dots: false,
  arrows: true,
  speed:1200,
  infinite: true,
  autoplay: true,
  slidesToShow:1,
  slidesToScroll:1,
  prevArrow:'<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow:'<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  responsive:[ {
      breakpoint:1024,
      settings: {
          slidesToShow:1,
          slidesToScroll:1
      }
  },
  {
      breakpoint:991,
      settings: {
          slidesToShow:1,
          slidesToScroll:1
      }
  },
  {
      breakpoint:767,
      settings: {
          slidesToShow:1,
          slidesToScroll:1
      }
  }
  ]
});


/*------ testimonial slider ends here --------*/

/*------ Blog slider starts here -----*/

$('.flex-boxes').slick({
  dots: true,
  arrows: false,
  autoplay: false,
  infinite: true, // Looping
  slidesToShow: 2, // Show 2 slides at a time
  slidesToScroll: 1, // Scroll 1 slide at a time
  responsive: [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2 // Show 1 slide at a time on smaller screens
          }
      },
      {
        breakpoint:480,
        settings: {
            slidesToShow:1,
            slidesToScroll:1
        }
    }
  ]
});
/*----- Blog slider ends here ------*/

/*---- fancybox popup starts from here ----*/

$('.video-popup a.popups').fancybox({
  caption : function( instance, item ) {
    return $(this).parent().find('.btn-text').html();
  }
});;

/*---- fancybox popup ends here -----*/


/*----- footer backtotop starts here ------*/

  var btn = $('#back-top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '800');
  });


/*----- footer backtotop ends here ------*/

});
