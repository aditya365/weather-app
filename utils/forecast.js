const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/9422c45d0cfb6369d780727f96b11cc5/${latitude},${longitude}`;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to get weather information', undefined);
        } else if (body.error) {
            callback(body.error, undefined);
        } else {
            callback(undefined, body);
        }
    })
};

module.exports = forecast