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


// function toggleMedia() {
//   const danceVideos = document.querySelector('.media-wrapper .dance-video');
//   const picReplace = document.querySelector('.picReplace');

//   if (window.innerWidth < 768) {
//       danceVideos.style.display = 'none';
//       picReplace.style.display = 'flex';
//   } else {
//       danceVideos.style.display = 'block';
//       picReplace.style.display = 'none';
//   }
// }

// // Call the function on page load and whenever the window is resized
// toggleMedia();
// window.addEventListener('resize', toggleMedia);
