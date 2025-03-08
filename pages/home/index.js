const createKey = document.querySelector('#createkey');
const successNotify = document.querySelector('#success');

createKey.addEventListener('click', async () => {
    const res = await fetch('/api/createkey');
    
    const keysAmount = await res.text();

    successNotify.innerHTML = `Chave criada! ${keysAmount} chaves no total!`
    successNotify.style.marginTop = 0;
    setTimeout(() => {
        successNotify.style.marginTop = '-50vw';
    },2000)
})