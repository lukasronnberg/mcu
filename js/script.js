  var audio = new Audio("aux/cap1.mp3"); /* definerar variablen audio så den kan användas i funktionerna */

  function cap() {
    audio.pause(); /* stänger av något ljud som eventuellt spelas */
    window.audio = new Audio("aux/cap1.mp3"); /* sätter audio variablen till rätt ljud för rätt funktion */
    audio.play(); /* spelar ljudet */

  }

  function hawkeye() {
    audio.pause();
    window.audio = new Audio("aux/hawkeye1.mp3");
    audio.play();

  }

  function hulk() {
    audio.pause();
    window.audio = new Audio("aux/hulk1.mp3");
    audio.play();

  }

  function ironman() {
    audio.pause();
    window.audio = new Audio("aux/ironman1.mp3");
    audio.play();

  }

  function thor() {
    audio.pause();
    window.audio = new Audio("aux/thor1.mp3");
    audio.play();

  }

  function blackwidow() {
    audio.pause();
    window.audio = new Audio("aux/blackwidow1.mp3");
    audio.play();

  }

  function snap() {

    audio.pause();
    window.audio = new Audio("aux/snap.mp3");
    audio.play();

    setTimeout(function() {
      var image = document.getElementById("cap");
      image.src = "img/white.jpg"

      var image = document.getElementById("widow");
      image.src = "img/white.jpg"

      var image = document.getElementById("hulk");
      image.src = "img/white.jpg"

      var image = document.getElementById("zemo");
      image.src = "img/white.jpg"

      var image = document.getElementById("ultron");
      image.src = "img/white.jpg"

      var image = document.getElementById("hela");
      image.src = "img/white.jpg"
    }, 6000);

  }