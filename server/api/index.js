const crypto = require('../crypto/crypto');
const path = require('path');
const fs = require('fs');

const run = async (endpoint, args = null) => {
    const result = await apiManager[endpoint](args)
    return result
}

const apiManager = {
    encrypt: async ({ text }) => {
        const result = await crypto.encryptText(text);
        return result;
    },

    decrypt: async ({ text }) => {
        const result = await crypto.decryptText(text);
        return result;
    },

    createkey: async () => {
        await crypto.generateKey();
        const keysAmount = crypto.getKeysAmount();
        return { amount: keysAmount };
    },
    
    backup: async () => {
        const backupData = require('../crypto/keys.json');
        
        const backupPath = path.join(__dirname, 'backup.json');
        fs.writeFileSync(backupPath, JSON.stringify(backupData, null, null));
        
        return backupPath
    },

    getkeys: async () => {
        const keys = await crypto.getKeyIds();
        const keysAmount = crypto.getKeysAmount();

        return { keys, keysAmount }
    },

    getkeyinfos: async ({ keyId }) => {
        const keyInfos = await crypto.getKeyById(keyId);
        return keyInfos
    }
}

module.exports = run