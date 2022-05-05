import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger),
         parent = document.querySelector(wrapper);
    
    btn.addEventListener('click', function() {
        getResource('http://localhost:3000/styles')
            .then(res => {
                createCard(res);
            })
            .catch(error => console.log(error));
        this.remove();
    })

    function createCard(responce) {
        let i = 0;
        responce.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.style.animationDelay = `${i}s`;
            i += 0.3;
            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt=${title}>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
            
            parent.appendChild(card);
            
        })

    } 
    
}

export default showMoreStyles;