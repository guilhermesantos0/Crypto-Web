const axios = require('axios');

// axios('http://localhost:3000/api/getkeys').then(res => console.log(res.data)).catch(err => console.log(err))
axios('http://localhost:3000/api/getkeyinfos?keyId=J4B9G').then(res => console.log(res.data)).catch(err => console.log(err))