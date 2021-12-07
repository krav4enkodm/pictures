import './styles/main';

window.addEventListener('DOMContentLoaded', () => {
    const pictures = document.querySelectorAll<HTMLDivElement>('.picture');

    pictures.forEach((picture) => {
        picture.addEventListener('click', (event) => {
            const input = picture.querySelector('input');
            if (!input) {
                return;
            }
            input.click();
            input.addEventListener('change', (event) => {
                console.log(event);
                const { files } = input;
                if (!files) {
                    return;
                }
                const reader = new FileReader();
                reader.addEventListener('load', (event) => {
                    picture.style.backgroundImage = `url('${event.target?.result}')`;
                });
                reader.readAsDataURL(files[0]);
            })
        });
    });
});
