const ENV = require('../_env');
const g = window[ENV.projectName] = window[ENV.projectName] || {};

import log from '../_utils/log/log';
window.log = log;

import Main from './Main'
document.addEventListener('DOMContentLoaded', (e)=> { new Main(); });
