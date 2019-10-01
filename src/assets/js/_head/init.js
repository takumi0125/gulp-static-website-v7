import WebFont from 'webfontloader'

const ENV = require('../_env');
const g = window[ENV.projectName] = window[ENV.projectName] || {};

import checkDevice from '../_modules/utils/ua/checkDevice';
g.md = checkDevice();

if(g.md.tablet()) {
  g.isTablet = true;
  const _WIDTH = 1200;
  if(window.innerWidth < _WIDTH) {
    const initilScale = window.innerWidth / _WIDTH;
    document.querySelector('meta[name="viewport"]').setAttribute('content', `width=${_WIDTH},initial-scale=${initilScale}`);
  }
} else if(g.md.mobile()) {
  g.isMobile = true;
} else {
  g.isDesktop = true;
}

const html = document.querySelector('html');

import isiOS from '../_modules/utils/ua/isiOS';
g.isiOS = isiOS;

import isAndroid from '../_modules/utils/ua/isAndroid';
g.isAndroid = isAndroid;

import isIE11 from '../_modules/utils/ua/isIE11';
g.isIE11 = isIE11;
if(g.isIE11)  html.classList.add('is-ie11');

import isEdge from '../_modules/utils/ua/isEdge';
g.isEdge = isEdge;
if(g.isEdge)  html.classList.add('is-edge');

import isWindows from '../_modules/utils/ua/isWindows';
g.isWindows = isWindows;
if(g.isGoogleBot)  html.classList.add('is-windows');

import isChrome from '../_modules/utils/ua/isChrome';
g.isChrome = isChrome;

g.isGoogleBot = navigator.userAgent.toLowerCase().indexOf('googlebot') >= 0;
if(g.isGoogleBot)  html.classList.add('is-googlebot');

if(isWindows && isChrome) {
  html.classList.add('is-winchrome');
}

// get params
g.params = {};
const paramsStr = location.search.replace('?', '').split('&').forEach((str)=> {
  let key, value;
  [ key, value ] = str.split('=');
  g.params[key] = value;
});

g.loadFontPromise = new Promise((resolve, reject)=> {
  console.log('loading fonts...');
  WebFont.load({
    google: {
      families: [ 'Noto Sans' ]
    },

    timeout: 5000,

    fontactive: ()=> {
      console.log('fontactive', arguments);
    },

    active: ()=> {
      console.log('all fonts loaded');
      // this.store.commit('addLoadingCurrent');
      resolve();
    },

    inactive: ()=> {
      console.error('font inactive');
      // this.store.commit('addLoadingCurrent');
      resolve('load fonts error');
    }
  });
});