$(document).ready(function() {

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

    $("form").submit(function() {
        if ($("input#phone").val().length != 0) {
            return false;
        } else {
            $.ajax({
                url: "cgi-sys/formmail.pl",
                data: $(this).serialize(),
                type: "POST",
                success: function() {
                    $("form").css("display", "none");
                    $("#success").text("Thanks for contacting me, I'll be in touch shortly.")
                }
            });
            return false;
        }
    });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
    $('html, body').animate({"scrollTop": "0px"}, 1000);
};

/* Set up Skills Charts */

var levelString = function(value, index, values) {
    var level = "";
    switch (value) {
        case 1:
            level = "Beginner";
            break;
        case 2: 
            level = "Intermediate";
            break;
        case 3:
            level = "Advanced";
            break;
        case 4: 
            level = "Expert";
            break;                                
    }
    return level;
}

//Frameworks
var ctx = document.getElementById('chartFrameworks').getContext('2d');
var chartFrameworks = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                4,
                3,
                2,
                1
            ],
            backgroundColor: [
                "#FFF689",
                "#75B1FF",
                "#99FF88",
                "#FF5C6D"
            ],
            borderWidth: [
                5,
                5,
                5,
                5
            ],
            borderColor: [
                "#222",        
                "#222",        
                "#222",        
                "#222"  
            ]
        }],
        labels: [
            "Bootstrap",
            "ASP.NET",
            "MVC3",
            "MEAN Stack"
        ]
    },
    options: {
        responsive: true,
        cutoutPercentage: 25,         
            tooltips: {
                bodyFontFamily: "'Roboto', sans-serif",
                callbacks: {
                    label: function(tooltipItem, data){
                        var skillIndex = tooltipItem.index;
                        var levelNumber = data.datasets[0].data[skillIndex];
                        var label = data.labels[skillIndex];
                        return label + ": " + levelString(levelNumber);
                    }
                }
        },                          
        legend: {            
            position: 'right',
            labels: {
                boxWidth: 10,
                fontFamily: "'Roboto', sans-serif",
                fontSize: 14,
                fontColor: "#FFF",                    
                fontStyle: "lighter",
            }
        },
        title: {
            display: false,
            text: 'Frameworks',
            fontFamily: "'Shadows Into Light', cursive",
            fontSize: 35,
            fontColor: "#FFF",
            fontStyle: "lighter"
        },
    }
} );

//Languages
var ctx2 = document.getElementById('chartLanguages').getContext('2d');
var chartLanguages = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                4,
                4,
                3,
                4,
                3,
                2,
                2
            ],
            backgroundColor: [
                "#FFF689",
                "#75B1FF",
                "#99FF88",
                "#FF5C6D",
                "#B279F2",
                "#FFA774",
                "#FFFFFF"              
            ],
            borderWidth: [
                5,
                5,
                5,
                5,
                5,
                5,
                5                   
            ],
            borderColor: [
                "#222",        
                "#222",        
                "#222",        
                "#222",
                "#222",        
                "#222",        
                "#222"                    
            ]
        }],
        labels: [
            "HTML5",
            "CSS3",
            "C#",
            "VB.NET",
            "javaScript",
            "jQuery",
            "SQL"
        ]
    },
    options: {
        responsive: true,
        cutoutPercentage: 25,
        tooltips: {
            bodyFontFamily: "'Roboto', sans-serif",
            callbacks: {
                label: function(tooltipItem, data){
                    var skillIndex = tooltipItem.index;
                    var levelNumber = data.datasets[0].data[skillIndex];
                    var label = data.labels[skillIndex];
                    return label + ": " + levelString(levelNumber);
                }
            }
        },            
        legend: {            
            position: 'right',
            labels: {
                    boxWidth: 10,
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 14,
                    fontColor: "#FFF",                        
                }
        },
        title: {
            display: false,
            text: "Languages",
            fontFamily: "'Shadows Into Light', cursive",
            fontSize: 35,
            fontColor: "#FFF",
            fontStyle: "lighter"
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
} );

//Software
var ctx3 = document.getElementById('chartSoftware').getContext('2d');
var chartSoftware = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                2,
                2,
                3,
                4,
                3
            ],
            backgroundColor: [                
                "#75B1FF",
                "#99FF88",
                "#FF5C6D",
                "#B279F2",
                "#FFF689"          
            ],
            borderWidth: [
                5,
                5,
                5,
                5,
                5                 
            ],
            borderColor: [      
                "#222",        
                "#222",        
                "#222",
                "#222",      
                "#222"                  
            ]
        }],
        labels: [
            "Photoshop",
            "Illustrator",
            "Webflow",
            "Marketo",
            "Shopify"
        ]
    },
    options: {
        responsive: true,
        cutoutPercentage: 25,
        tooltips: {
            bodyFontFamily: "'Roboto', sans-serif",
            callbacks: {
                label: function(tooltipItem, data){
                    var skillIndex = tooltipItem.index;
                    var levelNumber = data.datasets[0].data[skillIndex];
                    var label = data.labels[skillIndex];
                    return label + ": " + levelString(levelNumber);
                }
            }
        },
        legend: {            
            position: 'right',
            labels: {
                    boxWidth: 10,
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 14,
                    fontColor: "#FFF",
                    fontSTyle: "lighter"
                }
        },
        title: {
            display: false,
            text: "Software",
            fontFamily: "'Shadows Into Light', cursive",
            fontSize: 35,
            fontColor: "#FFF",
            fontStyle: "lighter"
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
} );    