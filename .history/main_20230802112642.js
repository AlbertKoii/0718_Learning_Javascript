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
  const danceVideos = document.getElementsByClassName('.dance');
  const picReplace = document.getElementsByClassName('.picReplace');

  if (window.innerWidth < 768) {
      danceVideos.style.display = 'none';
      picReplace.style.display = 'inline-block';
  } else {
      danceVideos.style.display = 'inline-block';
      picReplace.style.display = 'none';
  }
}

toggleMedia();
window.addEventListener('resize', toggleMedia);
