import * as singleSpa from 'single-spa';

singleSpa.registerApplication('app-1', () => import ('../app1/app1.js'), pathPrefix('/app1'), {domElementGetter: getApp1DomEl});
singleSpa.registerApplication('app-2', () => import ('../app2/app2.js'), pathPrefix('/app2'), {domElementGetter: getApp2DomEl});

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}

function getApp1DomEl() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app1');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app1';
    document.body.appendChild(el);
  }

  return el;
}

function getApp2DomEl() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app2');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app2';
    document.body.appendChild(el);
  }

  return el;
}
