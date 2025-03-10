const createKey = document.querySelector('#createkey');
const successNotify = document.querySelector('#success');

createKey.addEventListener('click', async () => {
    const res = await fetch('/api/createkey');
    console.log(res)

    const _keysAmount = await res.json();
    const keysAmount = _keysAmount.amount;

    successNotify.innerHTML = `Chave criada! ${keysAmount} chaves no total!`
    successNotify.style.marginTop = 0;
    setTimeout(() => {
        successNotify.style.marginTop = '-50vw';
    },2000)
})

const backup = document.querySelector('#backup');

backup.addEventListener('click', async () => {
    const res = await fetch('/api/backup')
    const file = await res.blob();

    const link = document.createElement('a');
    const url = window.URL.createObjectURL(file);
    link.href = url;
    link.download = 'backup.json';
    link.click();
    window.URL.revokeObjectURL(url);

})