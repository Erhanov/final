// require('es6-promise').polyfill();
// import 'nodelist-foreach-polyfill';
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let calc = require('./parts/calc.js'),
      modal = require('./parts/modal.js'),
      tabs = require('./parts/tabs.js'),
      slider = require('./parts/slider.js'),
      timer = require('./parts/timer.js');

  calc();
  modal();
  slider();
  tabs();
  timer();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}