const modals = () => {

    let clicked;
    function bindModal(modalTriger, modalSelector, modalClose, removeTarget = false, clickOverlay = true) {
        const triger = document.querySelectorAll(modalTriger),
            modalOverlay = document.querySelector(modalSelector),
            close = document.querySelector(modalClose),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();
        
        const closeAllWindows = () => {
            windows.forEach(window => {
                window.style.display = 'none';
            });
        }

        function openModal(selector) {
            const modal = document.querySelector(selector);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }

        function closeModal(selector) {
            const modal = document.querySelector(selector);
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '';
        }

        triger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                closeAllWindows();
                if (e.target) {
                    e.preventDefault();
                }
                
                openModal(modalSelector);

                if (removeTarget) {
                    btn.remove();
                }
            });
        });

        close.addEventListener('click', () => {
            closeAllWindows();
            closeModal(modalSelector)
        });

        modalOverlay.addEventListener('click', (e) => {
            if (clickOverlay) {
                if (e.target === modalOverlay) {
                    closeAllWindows();
                    closeModal(modalSelector)
                }
            }
        });

        

    }

    function showModalByScroll(selector) {

        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            // openModal(selector)
            if (!clicked) {
                document.querySelector(selector).click();
                clicked = true;
            }
        }
    }

    window.addEventListener('scroll', () => showModalByScroll('.fixed-gift'));

    function showModalByTime(selector, time) {
        setTimeout(function () {

            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = true;
                }
            })

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
            
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.cssText = `
            width: 50px;
            height: 50px;
            overflow-y: scroll;
            visibility: hidden;
        `;

        document.body.appendChild(div);
        let scroll = div.offsetWidth - div.clientWidth;
        return scroll;
    }


    

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    // showModalByTime('.popup-gift', 60000);
    
}

export default modals;