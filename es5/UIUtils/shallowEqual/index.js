"use strict";function checkShallowEquality(e,t){if(e===t)return!0;var r=getExactType(e);return r!==getExactType(t)||"[object Object]"!==r&&"[object Array]"!==r?!1:"[object Object]"===r?Object.keys(e).every(compareObjectKeys,t)&&Object.keys(t).every(compareObjectKeys,e):e.every(function(e){return-1!==t.indexOf(e)})&&t.every(function(t){return-1!==e.indexOf(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=checkShallowEquality;var getExactType=function(e){return Object.prototype.toString.call(e)},compareObjectKeys=function(e,t){return"undefined"!=typeof this[e]&&t[e]===this[e]};