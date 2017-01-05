const packageConfig = require('./package.json')

const formatMoment = (moment) => (moment < 10) ? "0" + "" + moment : moment;

function getVersionDate() {
    var year = new Date().getFullYear(),
        month = new Date().getMonth() + 1,
        day = new Date().getDate(),
        hour = new Date().getHours(),
        minute = new Date().getMinutes(),
        second = new Date().getSeconds();

    const versionDate = formatMoment(year) + '' + formatMoment(month) + '' + formatMoment(day) + '' + formatMoment(hour) + '' + formatMoment(minute) + '' + formatMoment(second)
    return versionDate
}

module.exports = 'v' + packageConfig.version + '-' + getVersionDate()