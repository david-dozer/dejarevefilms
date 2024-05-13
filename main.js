const typed = new Typed('.text', {
    strings: ["Deja Reve.", "Already Dreamed."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// toggle icon navbar mobile 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onScroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset+height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// remove toggler icon and navbar when click navbar link (scroll)
menuIcon.classList.remove('bx-x');

// scroll reveal 
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

// // Function to handle form submission
// document.getElementById('news-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get form values
//     const title = document.getElementById('news-title').value;
//     const content = document.getElementById('news-content').value;
//     const date = document.getElementById('news-date').value;

//     // Call function to add news post
//     addNewsPost(title, content, date);

//     // Clear form inputs
//     document.getElementById('news-title').value = '';
//     document.getElementById('news-content').value = '';
//     document.getElementById('news-date').value = '';
// });

// // Function to add a new post to the news feed
// function addNewsPost(title, content, date) {
//     const newsFeed = document.getElementById('news-feed');

//     // Create news post elements
//     const newsPost = document.createElement('div');
//     newsPost.classList.add('news-post');

//     const titleElement = document.createElement('h3');
//     titleElement.textContent = title;

//     const contentElement = document.createElement('p');
//     contentElement.textContent = content;

//     const dateElement = document.createElement('p');
//     dateElement.classList.add('date');
//     dateElement.textContent = date;

//     // Append elements to news post
//     newsPost.appendChild(titleElement);
//     newsPost.appendChild(contentElement);
//     newsPost.appendChild(dateElement);

//     // Add the new post to the news feed
//     newsFeed.appendChild(newsPost);
// }

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-container .portfolio-box', {origin: 'bottom'});
ScrollReveal().reveal('.about-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .download img, .about-content', {origin: 'right'});
