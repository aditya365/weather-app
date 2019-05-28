const request = require('request');

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWRpdHlhMzY1IiwiYSI6ImNqdmo1Y3U2aTBjN2Q0NG1sYXFoZ2NqeXMifQ.HLB75uHw-WzqjQ11wLAWig`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            return callback('Unable to get the geocode', undefined);
        } else if (body.features[0].length === 0) {
            return callback('Location info not found', undefined);
        } else {
            const latitude = body.features[0].center[0];
            const longitude = body.features[0].center[1];
            callback(undefined, {
                latitude: latitude,
                longitude: longitude
            });
        }
    });
}

module.exports = geoCode