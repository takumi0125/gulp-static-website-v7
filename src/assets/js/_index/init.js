const ENV = require('../_env');
const g = window[ENV.projectName] = window[ENV.projectName] || {};

import Main from './Main'
document.addEventListener('DOMContentLoaded', (e)=> { new Main(); });
