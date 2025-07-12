const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');

let isPlaying = false;

playButton.addEventListener('click', function() {

  if (isPlaying) {
    audioPlayer.pause();
    playButton.textContent = 'Play';

  }else {
    audioPlayer.play();
    playButton.textContent = 'Pause';

  }
  
  isPlaying = !isPlaying;

});