let compoMain = (function() {
  
  let SELF = {
    Init,
  };
  
  function Init() {
    
    let feeder = BlogFeeds({
      blog: 'tmpcafe',
      blogId: '7950036845458384005',
    });
    feeder.init();
    
    let search = BlogSearch({
      inputEl: document.querySelector('._searchInput'),
      resultElDesktop: document.querySelector('._searchResult'),
      resultElMobile: document.querySelector('._searchResult'),
      resultTemplate: document.querySelector('#tmp-search-hint'),
      haystack: feeder.posts,
    });
    search.init();
    
  }
  
  return SELF;
  
})();