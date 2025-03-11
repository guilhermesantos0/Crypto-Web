const idContent = document.querySelector('#id-content');
const replacesContent = document.querySelector('#replaces-content');
const spaceContent = document.querySelector('#space-content')

const getKeyInfos = async () => {
    const response = await fetch(`/api/getkeyinfos?keyId=${id}`);
    const keyInfos = await response.json();

    console.log(keyInfos)

    const keyId = keyInfos.id;
    const replaces = keyInfos.replaces;
    const space = keyInfos.space;

    let spaceTxt = `${space.join(' | ')}`

    for (let [k,v] of Object.entries(replaces)) {
        const charEl = document.createElement('li');
        charEl.textContent = `${k} -> ${v.join(' | ')}`
        replacesContent.appendChild(charEl)
    }

    idContent.innerHTML = keyId;
    spaceContent.innerHTML = spaceTxt;
    // console.log(keyId)
    // console.log(replacesTxt)
    // console.log(spaceTxt)

}

document.addEventListener('DOMContentLoaded', () => {
    getKeyInfos();
})