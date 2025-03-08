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

    createKey: async() => {
        await crypto.generateKey();
    }
}

module.exports = run