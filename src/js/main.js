// Custom scripts
// Mobile menu burger
// navbar
//All Pages
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)


//Main Page Scripts

  //SWIPER
  const swiper = new Swiper('.swiper__innovation', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // loop: true,
    autoplay: {
      delay: 3000, // Затримка між слайдами (у мілісекундах)
      disableOnInteraction: false, // Вимкнути автопрокрутку після взаємодії користувача (за замовчуванням включено)
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1.2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1.4,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 1.8,
        spaceBetween: 30
      },
      1000: {
        slidesPerView: 2.2,
        spaceBetween: 30
      },
      1100: {
        slidesPerView: 2.7,
        spaceBetween: 30
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 70
      },
      1450: {
        slidesPerView: 3.5,
        spaceBetween: 130
      },
    }
  });



//Counter About Brands


const counterElements = document.querySelectorAll('.cards__item-title');
let isCounterActivated = false;

function activateCounter() {
  if (!isCounterActivated) {
    counterElements.forEach(element => {
      let targetValue = parseFloat(element.textContent);
      let startValue, increment;

      if (element.parentElement.classList.contains('cards__item--third')) {
        startValue = 0.1;
        targetValue = 1.3;
        increment = (targetValue - startValue) / 100;
      } else {
        startValue = 0;
        increment = targetValue / 100;
      }

      let currentValue = startValue;

      const interval = setInterval(() => {
        currentValue += increment;

        if (currentValue >= targetValue) {
          clearInterval(interval);
          currentValue = targetValue;
        }

        if (element.parentElement.classList.contains('cards__item--third')) {
          element.textContent = currentValue.toFixed(1) + 'M';
        } else {
          element.textContent = Math.floor(currentValue);
        }
      }, 18);
    });

    isCounterActivated = true;
  }
}

function handleScroll() {
  const cardsElement = document.querySelector('.cards');
  const rect = cardsElement.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect && (rect.top <= windowHeight && rect.bottom >= 0)) {
    activateCounter();
    window.removeEventListener('scroll', handleScroll);
  }
}

const cardsElement = document.querySelector('.cards');
if (cardsElement) {
  window.addEventListener('scroll', handleScroll);
}

  
