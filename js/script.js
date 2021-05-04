  var audio = new Audio("aux/cap1.mp3");

  function cap() {
    audio.pause();
    window.audio = new Audio("aux/cap1.mp3");
    audio.play();

  }