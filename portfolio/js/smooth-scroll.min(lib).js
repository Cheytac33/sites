// Smooth Scroll https://github.com/cferdinandi/smooth-scroll

// new SmoothScroll('a[href*-"#"]')
// // Все анимации займут ровно 500 мс
// var scroll = new SmoothScroll('a[href*="#"]', {
// 	speed: 500,
// 	speedAsDuration: true
// });

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
