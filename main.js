//Galeria suwana
$('.carousel').carousel({
  interval: 3000
})

//Responsywny navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Płynne przejścia do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//Więcej informacji w sekcji informacji nad partnerami (przycisk)
  var modal1 = document.getElementById('modal1');
  var modal2 = document.getElementById('modal2');
  var modal3 = document.getElementById('modal3');
  var btn1 = document.getElementById("more_info1");
  var btn2 = document.getElementById("more_info2");
  var btn3 = document.getElementById("more_info3");
  var span0 = document.getElementsByClassName("close")[0];
  var span1 = document.getElementsByClassName("close")[1];
  var span2 = document.getElementsByClassName("close")[2];
  btn1.onclick = function() {
    modal1.style.display = "block";
  }
  btn2.onclick = function() {
    modal2.style.display = "block";
  }
  btn3.onclick = function() {
    modal3.style.display = "block";
  }

  span0.onclick = function() {
    modal1.style.display = "none";
  }
  span1.onclick = function() {
    modal2.style.display = "none";
  }
  span2.onclick = function() {
    modal3.style.display = "none";
  }


  window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2 || event.target == modal3) {
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
    }
  }
