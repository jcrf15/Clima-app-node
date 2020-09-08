const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c62a82e535cdb75dfe1192570659a5f6&units=metric`);

    return resp.data.main.temp;

}

module.exports = {

    getClima
}