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
      danceVideo.style = 'none';
      picReplace.style = 'block';
  } else {
      danceVideo.style = 'inline-block';
      picReplace.style = 'none';
  };
};

toggleMedia();
window.addEventListener('resize', toggleMedia);
