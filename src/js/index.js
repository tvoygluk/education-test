import '../scss/styles.scss';
import '../../node_modules/swiper/css/swiper.css';
import Swiper from 'swiper';

let swiper = null;
const SLIDER_WIDTH_SWITCH = 830;

let btn = document.querySelector('.nav__open-btn');
let wrapGroup = document.querySelector('.nav__wrap-group');
let groupAbout = document.querySelector('.nav__group-about');
let singInUp = document.querySelector('.nav__sing-in-up');

const onBtnClick = () => {
    btn.classList.toggle('nav__open-btn--active');
    if (getComputedStyle(wrapGroup).display !== 'grid') {
        wrapGroup.classList.toggle('display-flex');
    }
    groupAbout.classList.toggle('display-flex');
    singInUp.classList.toggle('display-flex');
}

const initSlider = () => {
    if (innerWidth <= SLIDER_WIDTH_SWITCH && (!swiper || swiper.destroyed)) {
        swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: false,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
            }
        });
    } else if (innerWidth > SLIDER_WIDTH_SWITCH && swiper && !swiper.destroyed) {
        swiper.destroy();
    }
}

initSlider();

btn.addEventListener('click', onBtnClick);

window.addEventListener("resize", function() {
    initSlider();

    if (btn.classList.contains('nav__open-btn--active')) {
        btn.classList.remove('nav__open-btn--active');
        if (getComputedStyle(wrapGroup).display !== 'grid') {
            wrapGroup.classList.remove('display-flex');
        }
        groupAbout.classList.remove('display-flex');
        singInUp.classList.remove('display-flex');
    }
}, false);