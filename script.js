function sayYes() {
  document.body.style.background = "black";

  const popup = document.getElementById("popup");
  popup.classList.add("show");

  alert("YES CLICKED");

  const song = document.getElementById("loveSong");
  song.play();
}