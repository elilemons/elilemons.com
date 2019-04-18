//Frameworks
var ctx = document.getElementById('chartFrameworks').getContext('2d');
var chartFrameworks = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                3,
                4,
                4,
                4,
                4,
                2,
            ],
            backgroundColor: [
                "#B279F2",
                "#99FF88",
                "#FFF689",
                "#75B1FF",
                "#FFA774",
                "#FF5C6D",
            ],
            borderWidth: [
                5,
                5,
                5,
                5,
                5,
                5,
                5,
            ],
            borderColor: [
                "#222",
                "#222",
                "#222",
                "#222",
                "#222",
                "#222",
            ]
        }],
        labels: [
            "Angular 7",
            "AngularJS",
            "Bootstrap",
            "Sass",
            "Lodash",
            "Redux"
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
            usePointStyle: true,
            labels: {
                boxWidth: 10,
                fontFamily: "'Roboto', sans-serif",
                fontSize: 14,
                fontColor: "#FFF",
                fontStyle: "lighter",
            }
        },
        title: {
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