$(document).ready(function(){
    var dcWebsites = [
        {
            title: "#1 - Background Color Change",
            url: "http://ingridtartaglia.github.io/bgcolor/",
            img: "imgs/day01.png",
            date: "3rd October, 2015",
            description: "Change the background color clicking on a button in this website.",
            labels: ["HTML", "CSS", "jQuery"]
        },
        {
            title: "#2 - Fortune Cookie",
            url: "http://ingridtartaglia.github.io/fortune-cookie/",
            img: "imgs/day02.png",
            date: "4rd October, 2015",
            description: "Click on the cookie to see your fortune!",
            labels: ["HTML", "CSS", "jQuery", "Animate.css"]
        },
        {
            title: "#3 - Paint Online",
            url: "http://ingridtartaglia.github.io/paint-online",
            img: "imgs/day03.png",
            date: "5rd October, 2015",
            description: "Click on the pallete to fill the squares.",
            labels: ["HTML", "CSS", "jQuery"]
        },
        {
            title: "#4 - Tarot Cards",
            url: "http://ingridtartaglia.github.io/tarot-cards/",
            img: "imgs/day04.png",
            date: "6rd October, 2015",
            description: "Click on the card to reveal your daily tarot.",
            labels: ["HTML", "CSS", "Bootstrap", "jQuery", "Animate.css"]
        },
        {
            title: "#5 - Wally",
            url: "http://ingridtartaglia.github.io/wally",
            img: "imgs/day05.png",
            date: "7rd October, 2015",
            description: "The best dog in the world <3",
            labels: ["HTML", "CSS", "Bootstrap"]
        },
        {
            title: "#6 - 30-Days Challenge",
            url: "http://ingridtartaglia.github.io/30-day-challenges",
            img: "imgs/day06.png",
            date: "8rd October, 2015",
            description: "This page shows all the webpages made by myself during 30 days.",
            labels: ["HTML", "CSS", "Bootstrap", "jQuery", "WOW.js", "Animate.css"]
        },
    ];

    for (i = 0; i < dcWebsites.length; i++){
        $(".dc-placeholder").prepend(
            "<div class='media wow fadeIn'><div class='media-left'><a href='" + dcWebsites[i].url +
            "'><img src='" + dcWebsites[i].img +
            "'></a></div><div class='media-body'><h4 class='media-heading'><a href='"+ dcWebsites[i].url +
            "'>" + dcWebsites[i].title +
            "</a></h4><p class='dc-description'>" + dcWebsites[i].description +
            "</p></div>"
        );
    };
});

var wow = new WOW(
   {
     offset: 150
   }
)
wow.init();
