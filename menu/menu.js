document.addEventListener('DOMContentLoaded', () => {
    // Menu page days functionality
    console.log(" This row is working")
    const menuLinks = document.querySelectorAll('.menu-page-days a');
    console.log(menuLinks)

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove 'activelink' class from all links
            menuLinks.forEach(link => link.classList.remove('activelink'));

            // Add 'activelink' class to the clicked link
            this.classList.add('activelink');
        });
    });

    const modalCategories = document.querySelectorAll('.modal-categories a');

    modalCategories.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove 'activelink' class from all links
            modalCategories.forEach(link => link.classList.remove('activelink'));

            // Adding 'activelink' class to the clicked link
            this.classList.add('activelink');
        });
    })

//     close modal
    const closeBtn = document.querySelector('.close-btn');
    const modal = document.querySelector('.modal-container');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal-active')
    });

    // open modal
    const openModal = document.querySelectorAll('.meal-card-price button');
    openModal.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('modal-active')
        })
    });

    const settings = document.getElementById('settings');
    const menu = document.getElementById('menu');
    const settingSection = document.querySelector('.settings-page');
    const menuPage = document.querySelector('.menu-page');

    settings.addEventListener('click', () => {
        settingSection.classList.remove('hide')
        menuPage.classList.add('hide');
    });

    menu.addEventListener('click', () => {
        settingSection.classList.add('hide')
        menuPage.classList.remove('hide');
    });






} );