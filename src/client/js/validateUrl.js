const validUrl = require('valid-url');


const isValid = (url) => Boolean(validUrl.isWebUri(`${url}`));

module.exports = {
    isValid,
};