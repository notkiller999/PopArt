import { postData } from "../services/requests";

const drop = () => {
    const inputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        inputs.forEach(input => {
            input.addEventListener(eventName, preventDefault, false);
        });
    });

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function overInput(item) {
        item.closest('.file_upload').style.border = 'dashed yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }


    function leaveInput(item, bg) {
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.backgroundColor = bg;
    }

    ['dragenter', 'dragover', ].forEach(eventName => {
        inputs.forEach(input => {
            input.addEventListener(eventName, () => overInput(input), false);
            
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        inputs.forEach(input => {
            const bg = window.getComputedStyle(input.closest('.file_upload')).getPropertyValue('background-color');
            input.addEventListener(eventName, () => leaveInput(input, bg), false);
        });
    });

    inputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let formData = new FormData();
            for (let key in e.dataTransfer.files) {
                formData.append(key, e.dataTransfer.files[key]);
            }
            postData('assets/designer.php', formData)
                .then(res => console.log(res));
            
            const uploadName = input.files[0].name;
            let newName = '';
            uploadName.split('.')[0].length > 14 ? newName = uploadName.substr(0, 14) + '...' + uploadName.split('.')[1] :
                newName = uploadName;
            input.previousElementSibling.textContent = newName;
        })
    })


}

export default drop;