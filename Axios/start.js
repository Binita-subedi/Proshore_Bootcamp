const axios = require('axios');

axios.get('https://ccbackend.herokuapp.com/sanctum/csrf-cookie').then(resp => {

    console.log(resp.headers['set-cookie'][0]);
}).catch(error => console.log(error))



