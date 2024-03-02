const header = document.getElementById('header');
const nav = document.getElementById('nav');
const title = document.getElementById("title-container")
function ind() {
    header.innerHTML = "tentang saya";
    nav.innerHTML = `
    <li><a href="index.html">beranda</a></li>
    <li><a href="portfolio.html">portofolio</a></li>
    <li><a href="#">hubungi</a></li>
    <li><a href="#">tentang</a></li>`;
    title.innerHTML = `
    <h2 class="hello">haloo disana!</h2>
    <h1 class="title">saya Alvin - frontend developer</h1>
    <p class="sub">saya Muhamad Alvin Hidayat, saya senang mendesain web dengan kode pemrograman</p>
    <div class="social-media">
    <div onclick="goLink('https://wa.me/+6287899567081')" class="circle"><a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></div>
    <div onclick="goLink('#')"  class="circle"><i class="fa fa-linkedin"></i></div>
    <div onclick="goLink('https://www.instagram.com/mhavin_d?igsh=Y2NoMWhzMXhzeWVz')"  class="circle"><i class="fa fa-instagram"></i></div>
    </div>
    `;
}
function eng() {
    header.innerHTML = "about me";
    nav.innerHTML = `
    <li><a href="index.html">home</a></li>
    <li><a href="portfolio.html">portfolio</a></li>
    <li><a href="#">contact</a></li>
    <li><a href="#">about</a></li>`;
    title.innerHTML = `
    <h2 class="hello">hii there!</h2>
    <h1 class="title">i'm Alvin - frontend developer</h1>
    <p class="sub">I am Muhamad Alvin Hidayat, I like designing web with programming code</p>
    <div class="social-media">
    <div onclick="goLink('https://wa.me/+6287899567081')" class="circle"><a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></div>
    <div onclick="goLink('#')"  class="circle"><i class="fa fa-linkedin"></i></div>
    <div onclick="goLink('https://www.instagram.com/mhavin_d?igsh=Y2NoMWhzMXhzeWVz')"  class="circle"><i class="fa fa-instagram"></i></div>
    </div>
    `;
}
