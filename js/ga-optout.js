var gaProperty = 'UA-162970659-1';

var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}

function gaOptout() {
  document.cookie = disableStr + '=true; domain=verewygt.github.io; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  window[disableStr] = true;
}
