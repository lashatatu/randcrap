'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  section1.scrollIntoView({behavior: 'smooth'});
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
//
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

