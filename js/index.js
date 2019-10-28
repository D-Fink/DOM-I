const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navElement = document.querySelector('nav');

const imFirst = document.createElement("a");
imFirst.textContent = "Im First";
navElement.prepend(imFirst);

const imLast = document.createElement("a");
imLast.textContent = "Im Last";
navElement.appendChild(imLast);

let anchor = document.querySelectorAll('a');
anchor[0].textcontent = "Im First";
anchor[1].textContent = siteContent["nav"]["nav-item-1"];
anchor[2].textContent = siteContent["nav"]["nav-item-2"];
anchor[3].textContent = siteContent["nav"]["nav-item-3"];
anchor[4].textContent = siteContent["nav"]["nav-item-4"];
anchor[5].textContent = siteContent["nav"]["nav-item-5"];
anchor[6].textContent = siteContent["nav"]["nav-item-6"];
anchor[7].textContent = "Im Last";
anchor.forEach(element => {
  element.style.color = 'green';
});


let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

document.querySelector('h1').innerHTML = siteContent['cta']['h1'].replace(/ /g, '<br>');
document.querySelector('button').textContent = siteContent['cta']['button'];

document.querySelector('.text-content:nth-child(2) h4').textContent = siteContent['main-content']['about-h4'];
document.querySelector('.text-content:nth-child(2) p').textContent = siteContent['main-content']['about-content'];
document.querySelector('.text-content:nth-child(1) h4').textContent = siteContent['main-content']['features-h4'];
document.querySelector('.text-content:nth-child(1) p').textContent = siteContent['main-content']['features-content'];

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

document.querySelector('.bottom-content div:nth-child(1) h4').textContent = siteContent['main-content']['services-h4'];
document.querySelector('.bottom-content div:nth-child(1) p').textContent = siteContent['main-content']['services-content'];
document.querySelector('.bottom-content div:nth-child(2) h4').textContent = siteContent['main-content']['product-h4'];
document.querySelector('.bottom-content div:nth-child(2) p').textContent = siteContent['main-content']['product-content'];
document.querySelector('.bottom-content div:nth-child(3) h4').textContent = siteContent['main-content']['vision-h4'];
document.querySelector('.bottom-content div:nth-child(3) p').textContent = siteContent['main-content']['vision-content'];

document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
document.querySelector('.contact p').textContent = siteContent['contact']['address'];
document.querySelector('.contact p:nth-of-type(2)').textContent = siteContent['contact']['phone'];
document.querySelector('.contact p:nth-of-type(3)').textContent = siteContent['contact']['email'];

document.querySelector('footer p').textContent = siteContent['footer']['copyright']
