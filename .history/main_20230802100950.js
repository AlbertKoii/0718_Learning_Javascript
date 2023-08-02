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
  const video = document.getElementsByClassName('dance');
  const image = document.getElementsByClassName('replace');

  if (window.innerWidth < 768) {
    video.style.display = 'none';
    image.style.display = 'block';
  } else {
    video.style.display = 'block';
    image.style.display = 'none';
  }
}

// Call the function on page load and whenever the window is resized
window.addEventListener('load', toggleMedia);
window.addEventListener('resize', toggleMedia);
</script>
