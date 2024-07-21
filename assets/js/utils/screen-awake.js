let screenAwake = (function() {
  
  let toggler = null;
  let wakeLock = null;
  
  const requestWakeLock = async () => {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => {
        isAwake = false;
      });
    } catch (err) {
      // console.error(`${err.name}, ${err.message}`);
    }
  };
   
  async function wake() {
    if (wakeLock === null) {
      await requestWakeLock();
    } else {
      wakeLock.release();
      wakeLock = null;
    }
    const handleVisibilityChange = () => {
      if (wakeLock !== null && document.visibilityState === 'visible') {
        requestWakeLock();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }
  
  function initToggler() {
    if ('wakeLock' in navigator) {
      toggler = document.getElementById('awake-toggler');
      toggler.addEventListener('change', wake);
    } else {
      document.getElementById('feature-awake').style.display = 'none';
    }
  }
  
  return {
    initToggler,
  };
  
})();