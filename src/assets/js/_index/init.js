const ENV = require('../_env');
const g = window[ENV.projectName] = window[ENV.projectName] || {};

import log from '../_utils/log/log';
window.log = log;

import checkDevice from '../_utils/ua/checkDevice';
g.md = checkDevice();

import Index from './Index'
document.addEventListener('DOMContentLoaded', (e)=> { new Index(); });
