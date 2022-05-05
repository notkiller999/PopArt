const pictureSize = (selector) => {

    const pictures = document.querySelectorAll(selector);

    function showPicture(elem) {
        const img = elem.querySelector('img');
        img.classList.add('animated', 'fadeIn');
        
        elem.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
            item.style.display = 'none';
        })
        let src = img.getAttribute('src').split('.')[0] + '-1.png';
        img.setAttribute('src', src);
    }

    function hidePicture(elem) {
        
        const img = elem.querySelector('img');
        img.classList.remove('animated', 'fadeIn');
        elem.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
            item.style.display = 'block';
        })
        let src = img.getAttribute('src').slice(0, -6) + '.png';
        img.setAttribute('src', src);
        console.log(src);
    }

    pictures.forEach(picture => {
        picture.addEventListener('mouseover', () => {
            showPicture(picture);
        })

        picture.addEventListener('mouseout', () => {
            hidePicture(picture);
        })

    })
}

export default pictureSize;