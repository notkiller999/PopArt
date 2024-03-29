const mask = (selector) => {

    let setCursorPoint = (pos, elem) => {
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos)
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    function createMask(event) {
        let matrix = '+38 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');
        
        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;    
        });

        if (event.type === 'blur') {
            if (this.value.length == 3) {
                this.value = '';
            }
        } else {
            setTimeout(() => {
                setCursorPoint(this.value.length, this);
            }, 0);
            
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    })
}

export default mask;