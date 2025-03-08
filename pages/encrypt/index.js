const encryptButton = document.querySelector('#encrypt');
const copyButton = document.querySelector('#copy');

const outputArea = document.querySelector('#output');
const inputArea = document.querySelector('#input');

const errorNotify = document.querySelector('#error');
const successNotify = document.querySelector('#success');

let encryptedText;

encryptButton.addEventListener('click', async () => {
    const textInput = inputArea.value

    if(textInput == "") {
        errorNotify.style.marginTop = 0;
        setTimeout(() => {
            errorNotify.style.marginTop = '-50vw';
        },2000)
        return
    }

    const res = await fetch(`/api/encrypt?text=${textInput}`, {
        method: "POST"
    });

    encryptedText = await res.text();

    outputArea.innerHTML = encryptedText;
    outputArea.style.display = 'block';

    copyButton.style.display = 'flex';

    document.querySelector('.buttonsarea').classList.add('active')
})  

copyButton.addEventListener('click', async () => {
    navigator.clipboard.writeText(encryptedText);
    successNotify.style.marginTop = 0;
    setTimeout(() => {
        successNotify.style.marginTop = '-50vw';
    },2000)
})

