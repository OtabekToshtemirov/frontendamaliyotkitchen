import { categories } from './main/categories.js';
import { meals } from './main/mealsData.js';


document.addEventListener('DOMContentLoaded', () => {

    // Burger menu functionality
    const burger = document.querySelector('.burger-menu');
    burger.addEventListener('click', openNav);

    function openNav() {
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('active');
    }

    // Navigation links functionality
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            link.classList.add('active');
        });
    });

    // Display categories
    const menuCategoriesDiv = document.querySelector('.our-menu-categories');
    menuCategoriesDiv.innerHTML = categories.map(category => {
        return `<div class="category-item">
                    <h3>${category.name}</h3>
                    <p>${category.calories}</p>
                </div>`;
    }).join('');

    // Days of the week functionality
    const days = document.querySelectorAll('.our-menu-day');
    days.forEach(day => {
        day.addEventListener('click', () => {
            days.forEach(day => {
                day.classList.remove('active');
            });
            day.classList.add('active');
        });
    });

    // Slider menu functionality
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function renderCards() {
        meals.forEach(meal => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <span class="card-id">${meal.id}</span>
                <img src="${meal.img}" alt="${meal.name}">
                <h3 class="meal-type">${meal.type}</h3>
                <div class="card-content">
                    <p class="meal-name">${meal.name}</p>
                    <p>Fat - ${meal.fat}</p>
                    <p>Carbohydrates - ${meal.carbohydrates}</p>
                    <p>Energy - ${meal.energy}</p>
                    <p>Total weight - ${meal.weight}</p>
                </div>
            `;
            slider.appendChild(card);
        });

        // Clone first and last slides for infinite effect
        const firstClone = slider.firstElementChild.cloneNode(true);
        const lastClone = slider.lastElementChild.cloneNode(true);
        firstClone.classList.add('clone');
        lastClone.classList.add('clone');
        slider.appendChild(firstClone);
        slider.insertBefore(lastClone, slider.firstElementChild);
    }

    function updateSlider() {
        const cardWidth = document.querySelector('.card').offsetWidth;
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${(currentIndex + 1) * cardWidth}px)`;
    }

    function handleTransitionEnd() {
        const cards = document.querySelectorAll('.card');
        const cardWidth = cards[0].offsetWidth;

        if (cards[currentIndex + 1].classList.contains('clone')) {
            slider.style.transition = 'none';
            currentIndex = currentIndex === 0 ? meals.length - 1 : 0;
            slider.style.transform = `translateX(-${(currentIndex + 1) * cardWidth}px)`;
        }
    }

    prevBtn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.card');
        const cardWidth = cards[0].offsetWidth;

        if (currentIndex <= 0) {
            slider.style.transition = 'none';
            currentIndex = meals.length;
            slider.style.transform = `translateX(-${(currentIndex + 1) * cardWidth}px)`;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out';
                currentIndex--;
                updateSlider();
            }, 20);
        } else {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.card');
        const cardWidth = cards[0].offsetWidth;

        if (currentIndex >= meals.length - 1) {
            slider.style.transition = 'none';
            currentIndex = -1;
            slider.style.transform = `translateX(-${(currentIndex + 1) * cardWidth}px)`;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out';
                currentIndex++;
                updateSlider();
            }, 20);
        } else {
            currentIndex++;
            updateSlider();
        }
    });

    slider.addEventListener('transitionend', handleTransitionEnd);

    // Dragging functionality
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    const cards = document.querySelectorAll('.card');

    slider.addEventListener('mousedown', touchStart);
    slider.addEventListener('mouseup', touchEnd);
    slider.addEventListener('mouseleave', touchEnd);
    slider.addEventListener('mousemove', touchMove);

    slider.addEventListener('touchstart', touchStart);
    slider.addEventListener('touchend', touchEnd);
    slider.addEventListener('touchmove', touchMove);

    function touchStart(event) {
        isDragging = true;
        startPos = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        slider.style.transition = 'none';
    }

    function touchEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);

        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100 && currentIndex < meals.length - 1) {
            currentIndex++;
        }
        if (movedBy > 100 && currentIndex > 0) {
            currentIndex--;
        }

        setPositionByIndex();
    }

    function touchMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos;
        }
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function animation() {
        setSliderPosition();
        if (isDragging) {
            requestAnimationFrame(animation);
        }
    }

    function setSliderPosition() {
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }

    function setPositionByIndex() {
        currentTranslate = currentIndex * -cards[0].offsetWidth;
        prevTranslate = currentTranslate;
        updateSlider();
    }

    renderCards();
    setTimeout(() => {
        setPositionByIndex(); // Ensure the slider is set to the correct initial position
    }, 20); // Slight delay to allow for DOM update

    //faq section
    const faqItems = document.querySelectorAll('.faq-item');


    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            question.classList.toggle('active-question');
        });
    });


});



window.addEventListener('scroll', debounce(handleScroll, 100), { passive: true });

function handleScroll() {
    const leftMenu = document.querySelector('.left-menu');
    if (window.pageYOffset > 0) {
        leftMenu.style.bottom = '-60px'; // hides the menu
    } else {
        leftMenu.style.bottom = '0'; // shows the menu
    }
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

