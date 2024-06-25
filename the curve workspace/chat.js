document.addEventListener("DOMContentLoaded", function() {
  const videoPlayer = document.getElementById("videoPlayer");
  const video1Button = document.getElementById("video1Button");
  const video2Button = document.getElementById("video2Button");
  const video3Button = document.getElementById("video3Button");

  // function to play the video
  function playVideo(videoSrc) {
    videoPlayer.src = videoSrc;
    videoPlayer.play();
  }

  video1Button.addEventListener("click", function() {
    playVideo("videos/jack01.mp4");
  });

  video2Button.addEventListener("click", function () {
    playVideo("videos/jack05.mp4");
  });

  video3Button.addEventListener("click", function() {
    playVideo("videos/jack03.mp4");
  });
});
