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
  let danceVideo = document.getElementsByClassName('.dance');
  let picReplace = document.getElementsByClassName('.picReplace');

  if (window.innerWidth < 768) {
      danceVideo.style.display = 'none';
      picReplace.style.display = 'block';
  } else {
      danceVideo.style.display = 'block';
      picReplace.style.display = 'none';
  };
};

toggleMedia();
window.addEventListener('resize', toggleMedia);
