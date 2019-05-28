const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//Taking the location from commandline through process
const location = process.argv[2];
if (location) {
    geoCode(location, (error, { latitude, longitude }) => {
        if (!error) {
            forecast(latitude, longitude, (error, { currently }) => {
                if (!error) {
                    console.log(currently.summary);
                } else {
                    console.log(error);
                }
            });
        } else {
            console.log(error);
        }
    });
} else {
    console.log('Provide location to get weather report');
}
