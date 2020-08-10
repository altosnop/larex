class Modal {
    constructor() {
        this.openModal();
        this.closeModal();
    }

    openModal() {
        const menuButton = document.querySelector('.toggle-menu-btn');
        const modal = document.querySelector('.menu-modal');
        const menu = document.querySelector('.menu');
        const link = document.querySelectorAll('.menu-link');

        menuButton.addEventListener('click', () => {
            modal.style.display = 'block';
            menu.style.display = 'flex';
            menu.classList.add('mobile-menu');

            link.forEach(link => link.classList.add('mobile'));

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
        this.buttonsListeners();
    }

    scrollTo(element) {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: "smooth"
        })
    }

    buttonsListeners() {
        const homeBtn = document.querySelector('.home');
        const aboutBtn = document.querySelector('.about');
        const portfolioBtn = document.querySelector('.portfol');
        const serviceBtn = document.querySelector('.service');
        const contactBtn = document.querySelector('.contact');

        const header = document.querySelector('.header');
        const about = document.querySelector('#about');
        const portfolio = document.querySelector('#portfolio');
        const services = document.querySelector('#services');
        const contact = document.querySelector('#contact');

        homeBtn.addEventListener('click', () => {
            this.scrollTo(header);
        })

        aboutBtn.addEventListener('click', () => {
            this.scrollTo(about);
        })

        portfolioBtn.addEventListener('click', () => {
            this.scrollTo(portfolio);
        })

        serviceBtn.addEventListener('click', () => {
            this.scrollTo(services);
        })

        contactBtn.addEventListener('click', () => {
            this.scrollTo(contact);
        })
    }
}

new Modal();
new ScrollingTo();
