// Simple function to clear localStorage
function resetVideoWatchState() {
  localStorage.removeItem('hasWatchedVideo');
  console.log('Video watch state has been reset. Please refresh the page.');
}
 
// Log a message about how to use this debug function
console.log('To reset the video state and see the intro video again, run: resetVideoWatchState()'); 