const videos = document.querySelectorAll('.dance video');

videos.forEach(video => {
  video.addEventListener('loadeddata', function() {
    this.play();
  });
  
  video.addEventListener('click', function() {
    this.play();
  });
  
  video.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  });
});


function toggleMedia() {
  const video = document.querySelector('.dance');
  const image = document.querySelector('.picReplace');
  
    
  
   
  if (window.innerWidth < 768) {
      video.
     
  style.display = 'none';
      image.style.display = 'flex';
    } 
   
  else {
      video.style.display = 'flex';
      image.
     
  style.display = 'none';
    }
  }
  
window.addEventListener('load', toggleMedia);
window.addEventListener('resize', toggleMedia);
