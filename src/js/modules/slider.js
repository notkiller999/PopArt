const slider = (slides, dir, next, prev) => {
    const items = document.querySelectorAll(slides);
    let slideIndex = 1,
        paused = false;

    function showSlide(n) {
        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        })
        
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }
        items[slideIndex - 1].style.display = 'block';
    }

    showSlide(slideIndex);

    function changeSlide(n) {
        showSlide(slideIndex += n)
    }

    try {
        const nextBtn = document.querySelector(next),
            prevBtn = document.querySelector(prev);
        
        nextBtn.addEventListener('click', () => {
            changeSlide(1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        prevBtn.addEventListener('click', () => {
            changeSlide(-1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });

       

    } catch (e) { }
    
    function startAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                items.forEach(item => {
                    item.classList.add('slideInDown');
                });
                changeSlide(1);
            }, 3000)
        } else {
            paused = setInterval(() => {
                changeSlide(1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            }, 3000);
        }
    }
    
    startAnimation();
    
    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    })

    items[0].parentNode.addEventListener('mouseleave', () => {
        startAnimation();
    })

};

export default slider;