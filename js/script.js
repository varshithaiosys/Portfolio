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
  /*---- fixed header ends here -----*/

  /*---- nav bar starts from here -----*/
  $('ul li.menus-child a, ul li.footer-menu a').click(function(){
    $('li.menus-child a, li.footer-menu a').removeClass("active");
    $(this).addClass("active");
  });

  /*---- nav bar ends here ------*/

  /*---- mobile header starts from here -------*/

  $(".bar, .close-btn ").click(function(){
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
  var countersMod = $('#counters-mod');
  if (countersMod.length === 0) {
    return; // Exit if the element is not found
  }

  var oTop = countersMod.offset().top - window.innerHeight;
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

/*----- isotope starts from here ------*/

$('.isotope-section .filter-links:first-child').addClass('active');
$(document).ready( function() {   

  $('.grid-image-main').isotope({
    itemSelector: '.grid-images',
  });

  // filter items on button click
  $('.filter-button-group').on( 'click', 'div', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid-image-main').isotope({ filter: filterValue });
    $('.filter-button-group div').removeClass('active');
    $(this).addClass('active');
  });
})

/*---- isotope ends here -----*/

/*---- isotope mobile view starts from here ---*/

function dropdown() {
  $('.mob-tabs').on('click',function(){
    $('.dropdown-menu').slideToggle();
  });

  $('.filter-links').on('click',function(){
    let targetText = $(this).find('p').text().toLowerCase();
    $('.mob-tabs h5').html();
    $('.mob-tabs h5').html(targetText);
    $('.dropdown-menu').slideUp();

  });
}
var win = $(window);
function resizeHandler() {
  dropdown();
}
win.resize(resizeHandler());

/*---- isotope mobile view ends here -----*/

/*---- Timeline starts from here ----*/

var elements = document.querySelectorAll('.elStoryColumn');
console.log("elements --- ", elements);
// Function to check for fade effect on scroll and resize
function checkForFade() {
var windowHeight = window.innerHeight;
elements.forEach(function (element) {
    var elementHeight = element.offsetHeight;
    var elementOffset = element.getBoundingClientRect().top;
    var space = windowHeight - (elementHeight + elementOffset - window.pageYOffset);

    if (space < 80) {
    element.classList.add('non-focus');
    } else {
    element.classList.remove('non-focus');
    }
});
}

// Add event listeners for scroll and resize and call the checkForFade function
window.addEventListener('scroll', checkForFade);
window.addEventListener('resize', checkForFade);

// Trigger the scroll event on initial load
window.dispatchEvent(new Event('scroll'));

/*---- Timeline ends here ----*/

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
