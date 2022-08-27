"use strict"
//! Инициализируем Swiper
let myImageSlider = new Swiper('.image-slider', {
   //* Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   //* Навигация
   //* Булеты, текущее положение, прогрессбар
   pagination: {
      // el: '.swiper-pagination',
      // //* Буллеты
      // clickable: true,
      // //* Динамические буллеты
      // dynamicBullets: true,
      // //* Кастомные буллеты
      // //* Цифра в буллете
      // renderBullet: function (index, className) {
      // 	return '<span class="' + className + '">' + (index + 1) + '</span>'
      // },
      //* Фракция
      // type: 'fraction',
      // // * Кастомный вывод фракции
      // renderFraction: function (currentClass, totalClass) {
      // 	return (
      // 		'Фото <span class="' +
      // 		currentClass +
      // 		'"></span>' +
      // 		' из ' +
      // 		'<span class="' +
      // 		totalClass +
      // 		'"></span>'
      // 	)
      // },
      type: "progressbar"
   },
   //* Скролл
   // scrollbar: {
   // 	el: '.swiper-scrollbar',
   // 	// Возможность перетаскивать скролл
   // 	draggable: true,
   // },


   //* Включение / отключение
   //* перетаскивания на ПК
   simulateTouch: true,
   // Чувствительность свайпа
   touchRation: 1,

   // Угол срабатывания вайпа/перетаскивания
   touchAngle: 45,

   // Курсор перетаскивания
   // grabCursor: true,

   // Переключение при клике на слайд
   // slideToClickedSlide: true,

   // Навигация по хешу
   hashNavigation: {
      // Отслеживать состояние
      watchState: true,
   },

   //* Управление клавиатурой
   keyboard: {
      // Включить \ выключить
      enabled: true,
      // Включить \ выключить
      // только когда слайдер
      // в пределах вьюпорта
      onlyInViewport: true,
      // Включить \ выключить
      // управление клавишами
      // PageUp, pageDown
      pageUpDonw: true,
   },

   //* Управление колесом мыши
   /* mousewheel: {
       // Чувствительность колеса мыши
       sensitivity: 1,
       // Класс объекта на котором
       // будет срабатывать прокрутка мышью.
       eventsTarget: '.image-slider',
    }, */

   //* Автовысота
   autoHeight: false,

   //* Количество слайдов для показа
   slidesPerView: 3,

   //* Отключение функционала
   // если слайдов меньше чем нужно
   // wachOverflow: true,

   //* Отступ между слайдами
   // spaceBetween: 30,

   //* Количество пролистываемых слайдов
   slidesPerGroup: 1, // пролистывается сразу 1 слайда

   //* Активный слайд по центру
   centeredSliders: false,

   //* Стартовый слайд
   initialSlide: 0,

   //* Бесконечный слайдер лучше делать без  скрола(зелен линия внизу)
   loop: true,
   //* Кол-во дублирующих слайдов
   loopedSlides: 0,

   //* Свободный режим, более удобное прокручивание
   // freeMode: true,

   //* Автопрокрутка
   autoplay: {
      // Пауза между прокруткой
      delay: 1500,
      // Закончить на последнем слайде
      //* Лучше ставить бесконечную прокрутку чем менять это на false
      stopOnLastSlide: true,
      // Отключить после ручного переключения
      disableOnInteraction: true,
   },

   //* Скорость переключения
   // Добавляет плавности
   speed: 1000,

   //* Вертикальный слайдер
   // direction:"vertical",

   //! Эффекты переключения слайдов.
   // Смена прозрачности
   // effect: 'fade',

   //* Дополнения к fade
   // fadeEffect: {
   // 	//* Параллельная Смена прозрачности
   // 	// 1 слайд плавно меняет другой
   // 	crossFade: true,
   // },

   // Переворот
   // effect: 'flip',

   //* Дополнения к flip
   // flipEffect: {
   // 	// Тень
   // 	slideShadows: true,
   // 	// Показ только активного слайда
   // 	limitRotation: true,
   // },

   //* Куб
   // effect: 'cube',

   //* Дополнения к cube
   // cubeEffect: {
   // 	// Настройка тени
   // 	slideShadows: true,
   // 	shadow: true,
   // 	shadowOffset: 20,
   // 	shadowScale: 0.94,
   // },

   //* Эффект потока
   effect: 'coverflow',

   //* Дополнение к coverflow
   coverflowEffect: {
      // Угол
      rotate: 20,
      // Наложение
      stretch: 50,
      // Тень
      slideShadows: true,
   },

   //! Адаптив
   //* Ширина экрана
   // breakpoints: {
   // 	320: {
   // 		slidesPerView: 1,
   // 	},
   // 	480: {
   // 		slidesPerView: 2,
   // 	},
   // 	992: {
   // 		slidesPerView: 3,
   // 	},
   // },

   //* Соотношение сторон
   // breakpoints: {
   // 	'@0.75': {
   // 		slidesPerView: 1,
   // 	},
   // 	'@1.00': {
   // 		slidesPerView: 2,
   // 	},
   // 	'@1.50': {
   // 		slidesPerView: 3,
   // 	},
   // },

   //! Нужно для оптимизации скорости загрузки сайта	 изучить более подробно в дальнейшем
   //* Отключить предзагрузку картинок
   // pleloadImages: false,
   // // Lazy Loading
   // // (подгрузка картинок)
   // lazy: {
   // 	//Подгружать на старте
   // 	// переключение слайдов
   // 	loadOnTransitionStart: false,
   // 	// Подгружать предыдущую
   // 	// и следующую картинки
   // 	loadPrevNext: false,
   // },

   // // Слежка за видимыми слайдами
   watchSlidesProgress: true,
   // Добавление класса видимым сладйам
   watchSlidesVisibility: true,

   //* Зум картинки
   zoom: {
      // Максимальное увеличение
      maxRatio: 5,
      // Минимальное увеличение
      minRation: 1,
   },

   //* Миниатюры(превью)
   // thumbs: {
   // 	// Свайпер с мениатюрами
   // 	// и его настройки
   // 	swiper: {
   // 		el: '.image-mini-slider',
   // 		slidesPerView: 5,
   // 	},
   // },
   nested: true,
});

//! Текстовой слайдер
// let myTextSlider = new Swiper('.text-slider', {
// 	// Количество слайдов для показа
// 	slidesPerView: 3,
// 	// Отступ между слайдами
// 	spaceBetween: 30,
// 	loop: true,
// })

//* Передача управления для 2 связанных слайдеров
// myImageSlider.controller.control = myTextSlider;
// myTextSlider.controller.control = myImageSlider;

//* Фракция (Цифры показывающие номер слайда)
// Объекты с общего кол-ва страниц
// let mySliderAllSliders = document.querySelector('.image-slider__total');
// // Объекты с текущей страницы страниц
// mySliderCurrentSlide = document.querySelector('.image-slider__current');
// // В  объект с общем кол-вом страниц помещаю кол-во слайдов
// mySliderAllSliders.innerHTML = myImageSlider.slides.length;
// // Событие, когда слайдер переключается
// myImageSlider.on("slideChange",function(){
// 	let currentSlide = ++myImageSlider.realIndex;
// 	// выводится значение
// 	mySliderCurrentSlide.innerHTML = currentSlide;
// })
// Определение устройства, с тачскрином или без
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