$(document).ready(function () {

  /* Lightbox setup */
  lightbox.option({
    alwaysShowNavOnTouchDevices: true,
    showImageNumberLabel: false,
    disableScrolling: true
  });

  /* Set up Portfolio Slider */
  $('.portfolio-slider').slick({
    accessibility: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });


  $('.portfolio-item').hover(function () {
    var moreInfo = $(this).find('.more-info');
    var moreInfoDsiplay = $(moreInfo).css('display');
    console.log(moreInfoDsiplay);
    if (moreInfoDsiplay === 'none') {
      showPortfolioInfo($(this));
    }
  });

  $('.more-info').click(function () {
    var portfolioItem = $(this).parent();
    showPortfolioInfo(portfolioItem);
  });

  function showPortfolioInfo(portfolioItem) {
    var itemImage = $(portfolioItem).find('.item-image');
    var itemHeader = $(portfolioItem).find('.item-header');
    var itemDescription = $(portfolioItem).find('.item-description');

    $(itemImage).toggleClass('item-grayscale');
    $(itemHeader).toggleClass('slide-down');
    $(itemDescription).toggleClass('slide-up');
  }

  /* Form Submit */

  $("form").submit(function () {
    if ($("input#phone").val().length != 0) {
      return false;
    } else {
      $.ajax({
        url: "cgi-sys/formmail.pl",
        data: $(this).serialize(),
        type: "POST",
        success: function () {
          $("form").css("display", "none");
          $("#success").text("Thanks for contacting me, I'll be in touch shortly.")
        }
      });
      return false;
    }
  });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  $('html, body').animate({ "scrollTop": "0px" }, 1000);
}

/* Set up Skills Charts */
// 1: Beginner
// 2: Intermediate
// 3: Advanced
// 4: Expert
let chartFrameworksData = {
  labels: ["Angular 7", "AngularJS", "Bootstrap", "Sass", "Lodash", "Redux"],
  series: [3, 4, 4, 4, 4, 2],
},
  chartFrameworksOptions = {
    labelOffset: 10,
    labelPosition: 'inside',
  };
new Chartist.Pie('#chartFrameworks', chartFrameworksData, chartFrameworksOptions);

let chartLanguagesData = {
  labels: ["HTML5", "CSS3", "JavaScript", "jQuery", "TypeScript"],
  series: [4, 4, 4, 4, 3]
},
  chartLanguagesOptions = {
    labelOffset: 10,
    labelPosition: 'inside',
  };
new Chartist.Pie('#chartLanguages', chartLanguagesData, chartLanguagesOptions);