$(document).ready(function(){
    var dcWebsites = [
        {
            title: "#1 - Background Color Change",
            url: "http://ingridtartaglia.github.io/bgcolor/",
            img: "imgs/day01.png",
            date: "3rd October, 2015",
            description: "Change the background color clicking on a button.",
            labels: ["HTML", "CSS", "jQuery"]
        },
        {
            title: "#2 - Fortune Cookie",
            url: "http://ingridtartaglia.github.io/fortune-cookie/",
            img: "imgs/day02.png",
            date: "4th October, 2015",
            description: "Click on the cookie to see your fortune!",
            labels: ["HTML", "CSS", "jQuery", "Animate.css"]
        },
        {
            title: "#3 - Paint Online",
            url: "http://ingridtartaglia.github.io/paint-online",
            img: "imgs/day03.png",
            date: "5th October, 2015",
            description: "Click on the pallete to fill the squares.",
            labels: ["HTML", "CSS", "jQuery"]
        },
        {
            title: "#4 - Tarot Cards",
            url: "http://ingridtartaglia.github.io/tarot-cards/",
            img: "imgs/day04.png",
            date: "6th October, 2015",
            description: "Click on the card to reveal your daily tarot.",
            labels: ["HTML", "CSS", "Bootstrap", "jQuery", "Animate.css"]
        },
        {
            title: "#5 - Wally",
            url: "http://ingridtartaglia.github.io/wally",
            img: "imgs/day05.png",
            date: "7th October, 2015",
            description: "The best dog in the world <3",
            labels: ["HTML", "CSS", "Bootstrap"]
        },
        {
            title: "#6 - 30-Days Challenge",
            url: "http://ingridtartaglia.github.io/30-days-challenge",
            img: "imgs/day06.png",
            date: "8th October, 2015",
            description: "This page shows all the webpages made by myself during 30 days.",
            labels: ["HTML", "CSS", "Bootstrap", "jQuery", "WOW.js", "Animate.css"]
        },
        {
            title: "#7 - Forecast",
            url: "http://ingridtartaglia.github.io/forecast",
            img: "imgs/day07.png",
            date: "9th October, 2015",
            description: "Know the current forecast based on your actual location.",
            labels: ["HTML", "CSS", "Bootstrap", "jQuery", "Geolocation API", "Forecast.io API"]
        },
        {
            title: "#8 - Mapping Places",
            url: "http://ingridtartaglia.github.io/mapping-places",
            img: "imgs/day08.png",
            date: "10th October, 2015",
            description: "Search a location and discover where are its best spots.",
            labels: ["HTML", "CSS", "Bootstrap", "jQuery", "Google Places API"]
        },
        {
            title: "#9 - Memory Game",
            url: "http://ingridtartaglia.github.io/memory-game",
            img: "imgs/day09.png",
            date: "11st October, 2015",
            description: "Play this awesome game!",
            labels: ["HTML", "CSS", "Bootstrap", "AngularJS", "Lodash"]
        },
        {
            title: "#10 - Converter",
            url: "http://ingridtartaglia.github.io/converter",
            img: "imgs/day10.png",
            date: "12nd October, 2015",
            description: "",
            labels: ["HTML", "CSS", "AngularJS", "Bootstrap"]
        },
        {
            title: "#11 - Funny Quiz",
            url: "http://ingridtartaglia.github.io/funny-quiz",
            img: "imgs/day11.png",
            date: "13rd October, 2015",
            description: "What kind of drink you are?",
            labels: ["HTML", "CSS", "AngularJS", "Bootstrap", "Lodash"]
        },
        {
            title: "#12 - Calculator",
            url: "http://ingridtartaglia.github.io/calculator",
            img: "imgs/day12.png",
            date: "14th October, 2015",
            description: "",
            labels: ["HTML", "CSS", "AngularJS", "Bootstrap"]
        },
        {
            title: "#13 - Jokenpo",
            url: "http://ingridtartaglia.github.io/jokenpo",
            img: "imgs/day13.png",
            date: "15th October, 2015",
            description: "Rock, paper or scissors?",
            labels: ["HTML", "CSS", "AngularJS", "Bootstrap", "Animate.css"]
        },
        {
            title: "#14 - Hangman",
            url: "http://ingridtartaglia.github.io/hangman",
            img: "imgs/day14.png",
            date: "16th October, 2015",
            description: "",
            labels: ["HTML", "CSS", "AngularJS", "Bootstrap"]
        },
        {
            title: "#15 - Color Picker",
            url: "http://ingridtartaglia.github.io/",
            img: "imgs/day15.png",
            date: "17th October, 2015",
            description: "",
            labels: ["HTML", "CSS", "AngularJS"]
        },
        {
            title: "#16 - Instapopular",
            url: "http://ingridtartaglia.github.io/instapopular",
            img: "imgs/day16.png",
            date: "18th October, 2015",
            description: "See the most popular photos trending at this moment in Instagram.",
            labels: ["HTML", "CSS", "AngularJS", "Bootstrap", "Instagram API"]
        },
        {
            title: "#17 - E-commerce",
            url: "http://ingridtartaglia.github.io/e-commerce",
            img: "imgs/day17.png",
            date: "19th October, 2015",
            description: "Order your favorite drinks in this landing page.",
            labels: ["HTML", "SASS", "AngularJS", "Bootstrap", "Bower"]
        },
        {
            title: "#18 - Contact List",
            url: "http://ingridtartaglia.github.io/contact-list",
            img: "imgs/day18.png",
            date: "20th October, 2015",
            description: "Save your contacts in this app.",
            labels: ["HTML", "SASS", "AngularJS", "Angular Bootstrap", "Bower", "Firebase"]
        },
        {
            title: "#19 - Comments",
            url: "http://ingridtartaglia.github.io/comments",
            img: "imgs/day19.png",
            date: "21st October, 2015",
            description: "Leave a comment and vote in other comments in this blog post.",
            labels: ["HTML", "SASS", "AngularJS", "Angular Material", "Bower", "Firebase"]
        },
        {
            title: "#20 - Sun Salutation",
            url: "http://ingridtartaglia.github.io/sun-salutation/www",
            img: "imgs/day20.png",
            date: "22nd October, 2015",
            description: "Learn the sun salutation with this incredible Ionic app.",
            labels: ["HTML", "CSS", "AngularJS", "Ionic"]
        },
        {
            title: "#21 - Bus Line",
            url: "http://ingridtartaglia.github.io/bus-line/www",
            img: "imgs/day21.png",
            date: "23rd October, 2015",
            description: "Search for a bus line in Rio de Janeiro.",
            labels: ["HTML", "CSS", "AngularJS", "Ionic", "Google Maps API", "Rio Bus API"]
        },
        {
            title: "#22 - Restaurant App",
            url: "http://ingridtartaglia.github.io/restaurant-app/www",
            img: "imgs/day22.png",
            date: "24th October, 2015",
            description: "Ingrid's: the best spot in this town.",
            labels: ["HTML", "SASS", "AngularJS", "Ionic"]
        },
        {
            title: "#23 - Music Likes",
            url: "http://ingridtartaglia.github.io/music-likes/www",
            img: "imgs/day23.png",
            date: "25th October, 2015",
            description: "What kind of music do you like in Facebook?",
            labels: ["HTML", "CSS", "AngularJS", "Ionic", "Facebook API"]
        },
        {
            title: "#24 - Video Playlist",
            url: "http://ingridtartaglia.github.io/video-playlist/www",
            img: "imgs/day24.png",
            date: "26th October, 2015",
            description: "Search videos in this app using the Youtube API.",
            labels: ["HTML", "SASS", "AngularJS", "Ionic", "Youtube API"]
        },
        {
            title: "#25 - Memes",
            url: "http://ingridtartaglia.github.io/",
            img: "imgs/day25.png",
            date: "27th October, 2015",
            description: "",
            labels: ["HTML", "SASS", "AngularJS", "Ionic"]
        },
        {
            title: "#26 - About Me",
            url: "http://ingridtartaglia.github.io/about-me",
            img: "imgs/day26.png",
            date: "28th October, 2015",
            description: "This is the first part of my portfolio.",
            labels: ["HTML", "SASS", "Bootstrap", "Bower", "Gulp"]
        },
        {
            title: "#27 - Conference",
            url: "http://ingridtartaglia.github.io/conference/www",
            img: "imgs/day27.png",
            date: "29th October, 2015",
            description: "",
            labels: ["HTML", "SASS", "AngularJS", "Ionic"]
        },
        {
            title: "#28 - Shop List",
            url: "http://ingridtartaglia.github.io/shop-list/www",
            img: "imgs/day28.png",
            date: "30th October, 2015",
            description: "Select what you want to shop with this app.",
            labels: ["HTML", "SASS", "AngularJS", "Ionic", "Firebase"]
        },
        {
            title: "#29 - Insta Cards",
            url: "http://ingridtartaglia.github.io/insta-cards/www",
            img: "imgs/day29.png",
            date: "31st October, 2015",
            description: "Like Tinder, swipe right if you like a popular photo in Instagram and swipe left if you dislike it.",
            labels: ["HTML", "SASS", "AngularJS", "Ionic"]
        },
        {
            title: "#30 - The End",
            url: "http://ingridtartaglia.github.io/the-end",
            img: "imgs/day30.png",
            date: "1st November, 2015",
            description: "Last day of the challenge!",
            labels: ["HTML", "SASS", "Bower", "SVG"]
        },
    ];

    for (i = 0; i < dcWebsites.length; i++){
        $(".dc-placeholder").prepend(
            "<div class='media wow fadeIn'><div class='media-left media-img text-center'><a href='" + dcWebsites[i].url +
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
