function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  document.getElementsByClassName("movie_card").onclick = function () {
    onclick=window.location.href='/pages/playpage.html';
};