const accordion = (trigger) => {
    const btns = document.querySelectorAll(trigger);

    btns.forEach(btn => {
        let content = btn.nextElementSibling;
        // content.style.display = 'none';
        btn.addEventListener('click', function () {
            
            if (!btn.classList.contains('ui-accordion-header-active')) {
                btns.forEach(btn => {
                    btn.nextElementSibling.classList.remove('ui-accordion-content-active');
                    btn.classList.remove('ui-accordion-header-active');
                })
            }
            
            btn.classList.toggle('ui-accordion-header-active');
            content.classList.toggle('ui-accordion-content-active')
        })
    });
}

export default accordion;