const encryptButton = document.querySelector('#encrypt');
const copyButton = document.querySelector('#copy');

const outputArea = document.querySelector('#output');
const inputArea = document.querySelector('#input');

let encryptedText;

encryptButton.addEventListener('click', async () => {
    const textInput = inputArea.value

    const res = await fetch(`/api/encrypt?text=${textInput}`, {
        method: "POST"
    });

    encryptedText = await res.text();

    outputArea.innerHTML = encryptedText;
    outputArea.style.display = 'block';

    encryptButton.style.display = 'none';
    copyButton.style.display = 'flex';
})  

copyButton.addEventListener('click', async () => {
    navigator.clipboard.writeText(encryptedText)
})