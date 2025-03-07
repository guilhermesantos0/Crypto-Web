const axios = require('axios');

// axios.post('http://localhost:3000/api/encrypt?text=teste')
// .then(res => {console.log(res.data)})
// .catch(err => console.log(err))

axios.post('http://localhost:3000/api/decrypt?text=J4B9GkIpydkhFhcXJA3taY2')
.then(res => console.log(res.data))
.catch(err => console.log(err))