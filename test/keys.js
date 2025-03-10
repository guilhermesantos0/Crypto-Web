const axios = require('axios');

axios('http://localhost:3000/api/getkeys').then(res => console.log(res.data)).catch(err => console.log(err))