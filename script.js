function sayYes() {
  const popup = document.getElementById("popup");
  const song = document.getElementById("loveSong");

  popup.classList.add("show");

  song.currentTime = 0;
  song.volume = 0.8;
  song.play();
}