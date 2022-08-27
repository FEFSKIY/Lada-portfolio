"use strict"
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};
// Устанвливаем класс touch устройствам с тачскрином, pc - без
if (isMobile.any()) {
   document.body.classList.add('_touch');

   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');

         });
      }
   }

} else {
   document.body.classList.add('_pc');
}

//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu-list');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

// Плавная прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
      }
   }
}
// Появление элементов при прокрутке
// Шапка сайта
window.addEventListener('scroll', () => {
   let scrollDistance = window.scrollY;

   const header = document.querySelector('.header');
   if (scrollDistance >= 500) {
      header.classList.add('scrolled');
   } else {
      header.classList.remove('scrolled');
   }
});
/*function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('scroll');
      } else {
         change.target.classList.remove('scroll');
      }
   });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('lowerheader__container');
for (let elm of elements) {
   observer.observe(elm);
} 
*/
