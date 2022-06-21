'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for ( let i = 0; i < btnsOpenModal.length; i++ ) btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if ( e.key === 'Escape' && !modal.classList.contains('hidden') ) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', (e) => {
  section1.scrollIntoView({behavior: 'smooth'});
});

////////////////////////////////////////////////////////////////////////////////////////////////
// Page Navigation

document.querySelector('.nav__links')
  .addEventListener('click', function (e) {
    e.preventDefault();
    if ( e.target.classList.contains('nav__link') ) {
      const id = e.target.getAttribute('href');
      document.querySelector(id)
        .scrollIntoView({behavior: 'smooth'});
    }
  });

//old style
// document.querySelectorAll('.nav__link')
//   .forEach(function (el) {
//     el.addEventListener('click', function (e) {
//       e.preventDefault();
//
//       const id = this.getAttribute('href');
//       document.querySelector(id)
//         .scrollIntoView({behavior: 'smooth'});
//     });
//   });

// Tabbed Component

tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');

  if ( !clicked ) {
    return;
  }
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList
    .add('operations__content--active');

});

// Menu fade animation

const handleHover = function (e) {
  if ( e.target.classList.contains('nav__link') ) {
    const link = e.target;
    const siblings = link.closest('.nav')
      .querySelectorAll('.nav__link');
    const logo = link.closest('.nav')
      .querySelector('img');

    siblings.forEach(el => {
        if ( el !== link ) {
          el.style.opacity = this;
        }
      },
    );
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky

// const initialCoords = section1.getBoundingClientRect();
//
// window.addEventListener('scroll', () => {
//   if ( window.scrollY > initialCoords.top ) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
//
// const obsOptions = {
//   root: null,
//   threshold: [0, 1, 0.2],
// };
//
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if ( !entry.isIntersecting ) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal section

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if ( !entry.isIntersecting ) {
    return;
  }
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);

};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
//
// document.getElementById('section--1');
//
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
//
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'we use cookies';
// message.innerHTML = `we use cookies
// <button class="btn btn--close-cookie">got it</button>
// `;
// header.append(message);
// document.querySelector('.btn--close-cookie')
//   .addEventListener('click', () => {
//     return message.remove();
//   });
//
// message.style.backgroundColor = '#37383D';
// message.style.width = '107%';
// message.style.height = Number.parseFloat(getComputedStyle(message).height + 10) + 30 + 'px';
// document.documentElement.style.setProperty('--color-primary','orangered')
//
//
// // Attributes
//
// const logo=document.querySelector('.nav__logo')

//Events

// const h1=document.querySelector('h1')
// h1.addEventListener('mouseenter',(e)=>{
//   alert('heading')
// })
/*
 DOM Traversing

 const h1=document.querySelector('h1')

 downward

 console.log(h1.querySelectorAll('.highlight'));
 console.log(h1.childNodes);
 console.log(h1.children);

 upward

 console.log(h1.parentNode);
 console.log(h1.parentElement);

 h1.closest('.header').style.background='var(--gradient-secondary)'

 */

// Git done?

