import { loadScripts } from './script-loader.js';

(function() {

  loadScripts([
    {
      urls: [
        "/utils/blogfeeds.js",
        "/utils/blogsearch.js",
        "/main-component.js",
      ],
      callback: function() {
        compoMain.Init();
      }
    },
    {
      urls: [
        '/utils/screen-awake.js'
      ],
      callback: function() {
        screenAwake.initToggler();
      }
    }
  ], {
    basePath: document.body.dataset.jsAssetsPath,
  });
  
})();