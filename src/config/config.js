import queryString from 'query-string';
import versionConstants from '../constants/version';

const DIV_NAME = 'NPC';
const rootDiv = document.getElementById(DIV_NAME);
const urlParams = queryString.parse(window.location.search || window.location.hash.substring(window.location.hash.indexOf('?')));
const VERSION = urlParams.version || rootDiv.getAttribute('version') || __APP_ENV__ || versionConstants.WEBAPP;

const config = {
  DIV_NAME,
  VERSION,
  DRAWER_WIDTH: 370,
};

export default config;
