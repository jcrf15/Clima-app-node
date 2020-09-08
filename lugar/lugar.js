const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({

        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,

        headers: {
            'x-rapidapi-key': '23f7043f4fmsh09ad23501e013a5p18fc7bjsn64ee0bdc3e5e'
        }
        // host: {
        //     'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        // }

    });


    const resp = await instance.get();


    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);

    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    return {

        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng

}