function startMusic() {
  // const music = document.getElementById("bgMusic");
  // music.muted = false;
  const music = new Audio(
    "./audio/song.mp3"
  );
  music.play();
  console.log("kj");
}

const btnPlay = document.querySelector("button");
btnPlay.addEventListener("click", () => {
  startMusic();
});
