const videos = document.querySelectorAll('.mp4');

videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
    video.play();
});

  // Cuando el mouse sale
    video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; 
    });
});