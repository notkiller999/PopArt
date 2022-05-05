const filter = () => {

    const btnWrapper = document.querySelector('.portfolio-menu'),
        items = btnWrapper.querySelectorAll('li'),
        elems = document.querySelectorAll('.portfolio-wrapper > div'),
        portfolioWrapper = document.querySelector('.portfolio-wrapper'),
        portfolioNo = document.querySelector('.portfolio-no');
    
    portfolioWrapper.style.minHeight = window.getComputedStyle(elems[0]).getPropertyValue('height');

    btnWrapper.addEventListener('click', (e) => {
        let target = e.target;
        
        if (target && target.tagName == 'LI') {
            portfolioFilter(target.className);
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });

    function portfolioFilter(selector) {
        if (selector.indexOf('active') == -1) {  
            let i = 0;
            elems.forEach(element => {
                element.style.display = 'none';
                element.classList.remove('animated', 'fadeInRight');
                portfolioNo.classList.remove('animated', 'fadeIn');
                portfolioNo.style.display = 'none';
                element.style.animationDelay = '0s';
                if (element.classList.contains(selector)) {
                    portfolioWrapper.style.display = 'flex';
                    setTimeout(() => {
                                            element.classList.add('animated', 'fadeInRight')
                                            element.style.display = 'block';
                                            portfolioNo.style.display = 'none';

                                            element.style.animationDelay = `${i}s`;
                                            i += 0.1;
                    }, 10)

                } else if (selector == 'grandmother' || selector == 'granddad') {
                    portfolioWrapper.style.display = 'none';
                    portfolioNo.style.display = 'block';
                    portfolioNo.classList.add('animated', 'fadeIn');
                }
            });
        }

    }
}

export default filter;