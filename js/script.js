const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => { // Correção: alterei de loginLinkLink para loginLink
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Banener Rotativo

let currentIndex = 0;
const banner = document.querySelector('.banner');
const bannerItems = document.querySelectorAll('.banner-item');
const bannerIndicators = document.querySelectorAll('.banner-indicator');

function nextSlide() {
    currentIndex = (currentIndex + 1) % bannerItems.length;
    updateBanner();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + bannerItems.length) % bannerItems.length;
    updateBanner();
}

function updateBanner() {
    banner.style.transform = `translateX(-${currentIndex * 100}%)`;
    bannerIndicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

bannerIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateBanner();
    });
});

setInterval(nextSlide, 8000);
