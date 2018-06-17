const helper_v1_0 = require('../helper/helper_v1_0');

const TOKEN = process.env.SOLARTIS_TOKEN;
const USERNAME = process.env.SOLARTIS_USERNAME || 'travelagent';

module.exports = new helper_v1_0(USERNAME, TOKEN);