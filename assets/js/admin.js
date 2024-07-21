(function() {
    let $ = document.querySelector.bind(document);

    function editPost() {
        if (!isAuthorized()) return;
        
        let isConfirm = window.confirm('Edit this post?');
        if (!isConfirm) return;
        
        $('._postLink a')?.click();
    }

    function isAuthorized() {
        return $('._adminChecker')?.offsetHeight === 1;
    }

    
    
    // ctrl+enter
    window.addEventListener('keydown', function(event) {
      if (!event.target.tagName == "TEXTAREA") return;
      
      if (event.ctrlKey && event.key == 'e') {
        event.preventDefault();
        editPost();
      }
    });


    // show edit post tooltip
    $('._editTipsDialog')?.show();
    window.setTimeout(() => {
        $('._editTipsDialog')?.close();
    }, 3000);
    
})();