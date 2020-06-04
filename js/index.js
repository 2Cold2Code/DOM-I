const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "./img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "./img/header-img.png"
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

//Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = './img/logo.png';

function spaceToBreak(selector, splitBy, insert, prop1, prop2, spacing){
  const element = document.querySelector(selector);
  const elementArr = 
  siteContent[prop1][prop2].split(splitBy).map(item => item.replace(item, item + insert)).join('');
  element.innerHTML = elementArr;
  element.style.lineHeight=`${spacing}`;
  return element;
}

const ctaHead = spaceToBreak('.cta-text h1', ' ', '<br/>', 'cta', 'h1', '1.5');

const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.className = "button";
ctaBtn.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.className = "cta-img";
ctaImg.src = siteContent["cta"]["img-src"];

const nav = document.querySelector('nav');
const anchors = Array.from(nav.children);
const keyContent = Object.values(siteContent.nav);
anchors.forEach(a => {
    a.textContent = keyContent.shift();
    a.style.color = 'green';
});

const faq = document.createElement('a');
faq.textContent = 'FAQ';
faq.setAttribute('href', '#');
faq.style.color = 'green';
nav.appendChild(faq);

const more = document.createElement('a');
more.textContent = 'More';
more.setAttribute('href', '#');
more.style.color = 'green';
nav.prepend(more);

const featuresTitle = document.querySelectorAll('.text-content h4')[0];
featuresTitle.textContent = siteContent['main-content']['features-h4'];

const featuresContent = document.querySelectorAll('.text-content p')[0];
featuresContent.textContent = siteContent['main-content']['features-content'];

const aboutTitle = document.querySelectorAll('.text-content h4')[1];
aboutTitle.textContent = siteContent['main-content']['about-h4'];

const aboutContent = document.querySelectorAll('.text-content p')[1];
aboutContent.textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];
              
const servicesTitle = document.querySelectorAll('.text-content h4')[2];
servicesTitle.textContent = siteContent['main-content']['services-h4'];

const servicesContent = document.querySelectorAll('.text-content p')[2];
servicesContent.textContent = siteContent['main-content']['services-content'];

const productTitle = document.querySelectorAll('.text-content h4')[3];
productTitle.textContent = siteContent['main-content']['product-h4'];

const productContent = document.querySelectorAll('.text-content p')[3];
productContent.textContent = siteContent['main-content']['product-content'];

const visionTitle = document.querySelectorAll('.text-content h4')[4];
visionTitle.textContent = siteContent['main-content']['vision-h4'];

const visionContent = document.querySelectorAll('.text-content p')[4];
visionContent.textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];

const contactArr = [];

const contactAddress = spaceToBreak('.contact p', 'Street', '<br/>', 'contact', 'address', '2');

const contactPhone = document.querySelectorAll('.contact p')[1];
contactPhone.textContent = siteContent['contact']['phone'];

const contactEmail = document.querySelectorAll('.contact p')[2];
contactEmail.textContent = siteContent['contact']['email'];

const footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent['footer']['copyright'];

const header = document.querySelector('header');
header.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'lavender';
    event.target.style.flexDirection = 'column';
});
