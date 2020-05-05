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

let headimg = document.getElementById("cta-img");
headimg.setAttribute('src', siteContent["cta"]["img-src"]);

let mainimg = document.getElementById("middle-img");
mainimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const keys = Object.keys(siteContent.nav);

document.querySelectorAll('a').forEach((a, index) => {
a.textContent = siteContent.nav[keys[index]]
});


const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;

const btn = document.querySelector('button');
btn.textContent = siteContent.cta.button;


const fh4 = document.querySelector(".top-content h4:nth-child(1)");
fh4.textContent = siteContent["main-content"]["features-h4"];

const fp = document.querySelector(".top-content p:nth-child(2)");
fp.textContent = siteContent["main-content"]["features-content"];

const ah4 = document.querySelector(".top-content h4:nth-child(3)");
ah4.textContent = siteContent["main-content"]["about-h4"];

const ap = document.querySelector(".top-content p:nth-child(4)");
ap.textContent = siteContent["main-content"]["about-content"];

const sh4 = document.querySelector(".bottom-content h4:nth-child(1)");
sh4.textContent = siteContent["main-content"]["services-h4"];

const sp = document.querySelector(".bottom-content p:nth-child(2)");
sp.textContent = siteContent["main-content"]["services-content"];

const ph4 = document.querySelector(".bottom-content h4:nth-child(3)");
ph4.textContent = siteContent["main-content"]["product-h4"];

const pp = document.querySelector(".bottom-content p:nth-child(4)");
pp.textContent = siteContent["main-content"]["product-content"]

const vh4 = document.querySelector(".bottom-content h4:nth-child(5)");
vh4.textContent = siteContent["main-content"]["vision-h4"];

const vp = document.querySelector(".bottom-content p:nth-child(6)");
vp.textContent = siteContent["main-content"]["vision-content"];


const ch4 = document.querySelector(".contact h4:nth-child(1)");
ch4.textContent = siteContent["contact"]["contact-h4"];

const caddress = document.querySelector(".contact p:nth-child(2)");
caddress.textContent = siteContent["contact"]["address"];

const cphone = document.querySelector(".contact p:nth-child(3)");
cphone.textContent = siteContent["contact"]["phone"];

const cemail = document.querySelector(".contact p:nth-child(4)");
cemail.textContent = siteContent["contact"]["email"];

const foot = document.querySelector('p');
foot.textContent = siteContent.footer.copyright;

const navA = document.querySelectorAll('a')
navA.forEach(link => link.style.color = 'green');

const link1 = {
  href: '#',
  textContent: 'Help',
}

const link2 = {
  href: '#',
  textContent: 'Fun',
}

const newLink1 = document.createElement('a');
const newLink2 = document.createElement('a');

newLink1.href = link1.href;
newLink1.textContent = link1.textContent;

newLink2.href = link2.href;
newLink2.textContent = link2.textContent;

nav.appendChild(newLink1);
nav.appendChild(newLink2);