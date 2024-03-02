document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.querySelector('.profile-container');
    contentDiv.style.transform = 'translateX(0)';
});

function goLink(link) {
    window.location.href = link;
}

window.addEventListener('scroll', function() {
    var line = document.getElementById('timeline');
    var boxes = document.querySelectorAll('.box');
    var scrollY = window.scrollY;

    if (scrollY > 300) {
        line.classList.add('animate');
        boxes.forEach(function(box) {
            box.classList.add('start');
        });
    } else {
        line.classList.remove('animate');
        boxes.forEach(function(box) {
            box.classList.remove('start');
        });
    }
});