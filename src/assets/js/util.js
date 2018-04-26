'use strict';

function secondToTime(result) {
  let m = Math.floor((result / 60 % 60));
  m = m < 10 ? "0" + m : m;
  let s = Math.floor((result % 60));
  s = s < 10 ? "0" + s : s;
  return m + ":" + s;
}


export default {
  secondToTime
}