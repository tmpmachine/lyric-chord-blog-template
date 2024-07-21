let uiSong = (function() {

  let $ = document.querySelector.bind(document);
  
  let SELF = {
    Init,
  };

  let local = {
    postBody: $('._postBody'),
    postBodyCloneEl: null,
    selTransposeKeyEl: $('._inSelTransposeKey'),
  }
  
  function Init() {
    initShadowContainer();
    initChordy();
    initSongElements();
  }

  function initChordy() {
    defaultSongContent = local.postBody.textContent;
    chordy.init(local.postBodyCloneEl);
    chordy.init(local.postBody);
  }

  function initShadowContainer() {
    let shadowContainer = document.createElement('div');
    shadowContainer.style.display = 'none';
    local.postBodyCloneEl = local.postBody.cloneNode(true);
    // postBodyCloneEl.classList.remove('post-body');
    shadowContainer.append(local.postBodyCloneEl);
    document.body.append(shadowContainer);
  }
  
  function initSongElements() {
    // $('#in-tampilan').checked = Boolean(Number(getViewMode()));
    resetTransposeOptions();
    chordy.updateTransposer(local.postBody);
  }

  function resetTransposeOptions() {
    for (let optEl of local.selTransposeKeyEl.options) {
      optEl.textContent = optEl.textContent.replace('**', '');
    }
    local.selTransposeKeyEl.value = local.postBody.data.transposer._baseKey;
    local.selTransposeKeyEl.options[local.postBody.data.transposer._baseKey].textContent += '**';
    
    chordy.transposer.transpose(Number(local.selTransposeKeyEl.value), local.postBody);
    chordy.transposer.transpose(Number(local.selTransposeKeyEl.value), local.postBodyCloneEl);
  }
  
  return SELF;
  
})();