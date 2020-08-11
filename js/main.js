class Modal {
    constructor() {
        this.openModal();
        this.closeModal();
    }

    openModal() {
        const menuButton = document.querySelector('.toggle-menu-btn');
        const modal = document.querySelector('.menu-modal');
        const menu = document.querySelector('.menu-mobile');

        menuButton.addEventListener('click', () => {
            modal.style.display = 'block';
            menu.style.display = 'flex';

            modal.append(menu);
        })
    }

    closeModal() {
        const modalWindow = document.querySelector('.menu-modal');
        const close = document.createElement('span');

        close.classList.add('close');
        close.addEventListener('click', () => {
            modalWindow.style.display = 'none';
        })

        modalWindow.append(close);
    }
}

class ScrollingTo {
    constructor() {
        this.buttonsListenersDesktop();
        this.buttonListenersMobile();
    }

    header = document.querySelector('.header');
    about = document.querySelector('#about');
    portfolio = document.querySelector('#portfolio');
    services = document.querySelector('#services');
    contact = document.querySelector('#contact');

    scrollTo(element) {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: "smooth"
        })
    }

    buttonsListenersDesktop() {
        const homeBtn = document.querySelector('.home');
        const aboutBtn = document.querySelector('.about');
        const portfolioBtn = document.querySelector('.portfol');
        const serviceBtn = document.querySelector('.service');
        const contactBtn = document.querySelector('.contact');

        homeBtn.addEventListener('click', () => {
            this.scrollTo(this.header);
        })

        aboutBtn.addEventListener('click', () => {
            this.scrollTo(this.about);
        })

        portfolioBtn.addEventListener('click', () => {
            this.scrollTo(this.portfolio);
        })

        serviceBtn.addEventListener('click', () => {
            this.scrollTo(this.services);
        })

        contactBtn.addEventListener('click', () => {
            this.scrollTo(this.contact);
        })
    }

    buttonListenersMobile() {
        const homeBtnMob = document.querySelector('.home-mob');
        const aboutBtnMob = document.querySelector('.about-mob');
        const portfolioBtnMob = document.querySelector('.portfol-mob');
        const serviceBtnMob = document.querySelector('.service-mob');
        const contactBtnMob = document.querySelector('.contact-mob');

        homeBtnMob.addEventListener('click', () => {
            this.scrollTo(this.header);
        })

        aboutBtnMob.addEventListener('click', () => {
            this.scrollTo(this.about);
        })

        portfolioBtnMob.addEventListener('click', () => {
            this.scrollTo(this.portfolio);
        })

        serviceBtnMob.addEventListener('click', () => {
            this.scrollTo(this.services);
        })

        contactBtnMob.addEventListener('click', () => {
            this.scrollTo(this.contact);
        })
    }
}

new Modal();
new ScrollingTo();
