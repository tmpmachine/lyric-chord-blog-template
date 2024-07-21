let ui = (function() {
  
  let SELF = {
    SharePost,
  };
  
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