const burgerBtn = document.querySelector('.nav-mobile__burger-btn');
const barBtn = document.querySelector('.nav-mobile__bar--menu');
const xBtn = document.querySelector('.nav-mobile__bar--xbtn');
const nav = document.querySelector('.nav-mobile');
const navItems = document.querySelectorAll('.nav-mobile__item');
const navDesktop = document.querySelector('.nav-desktop');
const topBtn = document.querySelector('.top-btn');
const meetMeBtn = document.querySelector('.header__aboutme');
const footerDate = document.querySelector('.footer__date');
let topNav = window.scrollY;

const showMenu = () => {
	if (xBtn.classList.contains('hide')) {
		nav.style.transform = 'translateX(0)';
		burgerBtn.style.transform = 'translate(-110px)';
	} else {
		nav.style.transform = 'translateX(-101%)';
		burgerBtn.style.transform = 'translateX(0)';
	}

	barBtn.classList.toggle('hide');
	xBtn.classList.toggle('hide');

	navItems.forEach((element) => {
		element.addEventListener('click', () => {
			nav.style.transform = 'translateX(-101%)';
			barBtn.classList.remove('hide');
			xBtn.classList.add('hide');
			burgerBtn.style.transform = 'translateX(0)';
		});
	});
};

const bgDesktopMenu = () => {
	if (window.scrollY > 200) {
		navDesktop.classList.add('nav-blur');
		meetMeBtn.classList.add('disappear');
	} else {
		navDesktop.classList.remove('nav-blur');
		meetMeBtn.classList.remove('disappear');
	}
};

const showTopBtn = () => {
	if (window.scrollY > 800) {
		topBtn.classList.remove('disappear');
	} else {
		topBtn.classList.add('disappear');
	}
};

const hideDesktopMenu = () => {
	let currentScroll = window.scrollY;

	if (topNav < currentScroll) {
		navDesktop.classList.add('hide-nav');
	} else {
		navDesktop.classList.remove('hide-nav');
	}

	topNav = currentScroll;
};

const addFooterDate = () => {
    let year = new Date()

    footerDate.textContent = year.getFullYear()
}


burgerBtn.addEventListener('click', showMenu);
addEventListener('scroll', bgDesktopMenu);
addEventListener('scroll', showTopBtn);
addEventListener('scroll', hideDesktopMenu);
addEventListener('DOMContentLoaded', addFooterDate)
