window.addEventListener('scroll', function() {
    var navbar = document.querySelector(".navbar");
    var navHome = document.querySelector(".nav-home");
    var navMovies = document.querySelector(".nav-movies");
    var navTv = document.querySelector(".nav-tv");
    var navAbout = document.querySelector(".nav-about");
    navbar.classList.toggle('transparent', window.scrollY > 10);
    navHome.classList.toggle('red-text', window.scrollY < 560);
    navMovies.classList.toggle('black-text', window.scrollY > 540 && window.scrollY < 1200);
    navTv.classList.toggle('red-text', window.scrollY > 1180 && window.scrollY < 1550);
    navAbout.classList.toggle('red-text', window.scrollY > 1520);
})

function updateClock() {
  var currentDate = new Date();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var day = days[currentDate.getDay()];
  var month = months[currentDate.getMonth()];
  var date = currentDate.getDate();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();

  var time = hours + '.' + (minutes < 10 ? '0' : '') + minutes;
  var datetimeElement = document.getElementById('time');
  datetimeElement.innerHTML = day + ', ' + month + ' ' + date + ' - ' + time;
}
setInterval(updateClock, 1000);
updateClock();



const backgrounds = [
  "chappie.jpg",
  "Dark_Skies.png", 
  "deep-blue-sea.jpg", 
  "inception.jpg", 
  "planet51.jpg"
];

const colors = [
  "black",
  "white", 
  "white", 
  "black", 
  "black"  
];

let indx = 0;
let ind = 0;

const navColorTexts = document.querySelectorAll(".changedColor");
const bannerBackground = document.getElementById("banner");
const mobileBanner = document.getElementById("mobile-banner-img");

function changedBanner() {
    bannerBackground.style.backgroundImage = `url(../img/${backgrounds[indx]})`;
    mobileBanner.style.backgroundImage = `url(../img/${backgrounds[indx]})`

  navColorTexts.forEach((navColorText) => {
      navColorText.style.color = colors[ind];
  });

  indx = (indx + 1) % backgrounds.length;
  ind = (ind + 1) % colors.length;
}
changedBanner()
setInterval(changedBanner, 5000);

const navText = document.getElementById("navText");
navColorTexts.forEach((navColorText) => {
    navColorText.addEventListener("mouseover", () => {
        navColorText.style.color = "#e50914"; 
    });

    navColorText.addEventListener("mouseout", () => {
        navColorText.style.color = colors[ind];
    });
});

const listed = document.getElementById("listed");
const details = document.getElementById("details");
const description = document.getElementById("description");
const title = document.getElementById("title");

const listedArr = [
  `
  <li>Action & Adventure</li>
                <li>Sci-Fi</li>
                <li>Fantasy</li>
  `,
  `
  <li>Horror Movies</li>
                <li>Sci-Fi</li>
                <li>Fantasy</li>
  `,
  `
  <li>Action & Adventure</li>
                <li>Sci-Fi</li>
                <li>Horror Movies</li>
  `,
  `
  <li>Action & Adventure</li>
                <li>Thrillers</li>
                <li>Sci-Fi</li>
  `,
  `
  <li>Family Movies</li>
                <li>Sci-Fi</li>
                <li>Fantasy</li>
  `
]
const titleArr = [
  "Chappie",
  "Dark Skies",
  "Deep Blue Sea",
  "Inception",
  "Planet 51"
]
const release = [
  `
  <li>2015</li>
                <li>DIRECTOR: <span>Neill Blomkamp</span></li>
                <li>duration: <span>121 min</span></li>
  `,
  `
  <li>2013</li>
                <li>DIRECTOR: <span>Scott Stewart</span></li>
                <li>duration: <span>97 min</span></li>
  `,
  `
  <li>1999</li>
                <li>DIRECTOR: <span>Renny Harlin</span></li>
                <li>duration: <span>105 min</span></li>
  `,
  `
  <li>2010</li>
                <li>DIRECTOR: <span>Christopher Nolan</span></li>
                <li>duration: <span>148 min</span></li>
  `,
  `
  <li>2009</li>
                <li>DIRECTOR: <span>Jorge Blanco</span></li>
                <li>duration: <span>91 min</span></li>
  `
]
const desc = [
  "In a futuristic society where an indestructible robot police force keeps crime at bay, a lone droid evolves to the next level of artificial intelligence.",
  "A family’s idyllic suburban life shatters when an alien force invades their home, and as they struggle to convince others of the deadly threat.",
  "Scientists conduct research on sharks in search of an Alzheimer's cure. But a dangerous shortcut leads to huge sharks with near-human intelligence.",
  "A troubled thief who extracts secrets from people's dreams takes one last job: leading a dangerous mission to plant an idea in a target's subconscious.",
  "After landing on a planet reminiscent of 1950s suburbia, a human astronaut tries to avoid capture, recover his spaceship and make it home safely."
]

var indexDesc = 0;
function changeDesc() {
  listed.innerHTML = listedArr[indexDesc];
  title.innerHTML = titleArr[indexDesc];
  details.innerHTML = release[indexDesc];
  description.innerHTML = desc[indexDesc];

  indexDesc = (indexDesc + 1) % Math.min(
    listedArr.length, titleArr.length, release.length, desc.length);
}
changeDesc();
setInterval(changeDesc, 5000);

function toSearchPage() {
  window.location.href = "../html/search.html"
}
function toMoviesSearch() {
  window.location.href = "../html/movies.html"
}
function toAboutPage() {
  window.location.href = "../html/about.html"
}