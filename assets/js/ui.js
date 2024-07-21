let ui = (function() {
  
  let SELF = {
    SharePost,
    Init,
  };
  
  function Init() {
    uiSong.Init();
  }
  
  function SharePost() {
    let postTitle = document.title;
    let postUrl = location.origin + location.pathname;
    
    window.navigator.share({
      title: postTitle,
      url: postUrl,
    });
  }
  
  return SELF;
  
})();