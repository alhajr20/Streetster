const menu = (menuSelector, hamburgerSelector, closeSelector, overlaySelector) => {
    const menu = document.querySelector(menuSelector),
          showMenu = document.querySelector(hamburgerSelector),
          closeMenu = document.querySelector(closeSelector),
          overlay = document.querySelector(overlaySelector);

    console.log('hello');

    showMenu.addEventListener('click', () => {
        menu.classList.add('active');
        overlay.classList.add('overlayShow');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('overlayShow');
    });
    
    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('overlayShow');
    });
};

export default menu;