const subtitle = document.querySelector('#subtitle');
const keysArea = document.querySelector('#keys-area');

const createKeyEl = async (keyId) => {
    const li = document.createElement('li');
    li.classList.add('key');

    const a = document.createElement('a');
    a.href = `/keys/${keyId}`;
    a.textContent = keyId

    li.appendChild(a);
    keysArea.appendChild(li);
}

const getKeys = async () => {
    const JSONresult = await fetch('/api/getkeys');
    const result = await JSONresult.json();

    subtitle.innerHTML = `${result.keysAmount} chaves registradas`

    result.keys.forEach(key => {
        createKeyEl(key)
    })

}

document.addEventListener('DOMContentLoaded', () => {
    getKeys();
})