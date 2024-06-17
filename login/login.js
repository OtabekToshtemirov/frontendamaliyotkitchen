import {images} from "./images.js";

window.onload = function () {
    const imgElement = document.querySelector('.login-left img');

    // Function to generate a random index
    function getRandomIndex() {
        return Math.floor(Math.random() * images.length);
    }

    // Function to change the image
    function changeImage() {
        imgElement.src = images[getRandomIndex()];
        console.log(imgElement.src);
    }

    // Change the image when the page loads
    changeImage();

    const signinBtn = document.getElementById('signin');
    const signupBtn = document.getElementById('signup');
    const loginLogo = document.querySelector('.login-logo');
    const loginByPhone = document.querySelector('.login-by-phone');
    const loginByEmail = document.querySelector('.login-by-email');
    const byEmail = document.getElementById('byEmail');
    const byPhone = document.getElementById('byPhone');
    const loginSignUp = document.querySelector('.login-sign-up');
    const returnSignIn = document.querySelector('#returnSignIn');
    const returnSignUp = document.querySelector('#returnSignUp');
    const returnSignUp2 = document.querySelector('#returnSignUp2');


    signinBtn.addEventListener('click', () => {
        loginLogo.classList.add('hide');
        loginByPhone.classList.add('active');
        loginByEmail.classList.add('hide');
    });

    returnSignUp.addEventListener('click', () => {
        loginLogo.classList.remove('active');
        loginLogo.classList.add('hide');
        loginSignUp.classList.remove('hide');
        loginSignUp.classList.add('active');
        loginByPhone.classList.remove('active');
        loginByPhone.classList.add('hide');
        loginByEmail.classList.remove('active');
        console.log('returnSignUp')
    } );

    returnSignUp2.addEventListener('click', () => {
        loginLogo.classList.remove('active');
        loginLogo.classList.add('hide');
        loginSignUp.classList.remove('hide');
        loginSignUp.classList.add('active');
        loginByPhone.classList.remove('active');
        loginByPhone.classList.add('hide');
        loginByEmail.classList.remove('active');
        console.log('returnSignUp2')
    });

    returnSignIn.addEventListener('click', () => {
        loginLogo.classList.remove('active');
        loginByPhone.classList.remove('hide');
        loginByEmail.classList.remove('active');
        loginLogo.classList.add('hide');
        loginByPhone.classList.add('active');
        loginByEmail.classList.add('hide');
        loginSignUp.classList.remove('active');
    });

    signupBtn.addEventListener('click', () => {
        loginLogo.classList.remove('active');
        loginLogo.classList.add('hide');
        loginSignUp.classList.remove('active');
        loginByPhone.classList.remove('active');
        loginByEmail.classList.remove('active');

        loginSignUp.classList.add('active');

    });

    byEmail.addEventListener('click', () => {
        loginLogo.classList.remove('active');
        loginByPhone.classList.remove('active');
        loginByEmail.classList.remove('hide');
        loginLogo.classList.add('hide');
        loginByPhone.classList.add('hide');
        loginByEmail.classList.add('active');
        console.log('byEmail')
    });

    byPhone.addEventListener('click', () => {
        loginLogo.classList.remove('active');
        loginByPhone.classList.remove('hide');
        loginByEmail.classList.remove('active');
        loginLogo.classList.add('hide');
        loginByPhone.classList.add('active');
        loginByEmail.classList.add('hide');
    });


};
