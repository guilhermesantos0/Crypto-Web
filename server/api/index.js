const crypto = require('../crypto/crypto');

const run = async (endpoint, args) => {
    const result = await apiManager[endpoint](args)
    return result
}

const apiManager = {
    encrypt: async (text) => {
        const result = await crypto.encryptText(text);
        return result;
    },

    decrypt: async (text) => {
        const result = await crypto.decryptText(text);
        return result;
    },

    createkey: async() => {
        await crypto.generateKey();
        const keysAmount = crypto.getKeysAmount();
        return keysAmount;
    },
    
    getkeys: async() => {
        const keys = await crypto.getKeys();
        const keysAmount = crypto.getKeysAmount();

        return { keys, keysAmount }
    }
}

module.exports = run