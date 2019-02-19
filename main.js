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


//Więcej informacji w sekcji informacji nad partnerami
//Wawer
document.getElementById("more_info_1").onclick = function() {
  document.getElementById('modal_1').style.display = "block";
}

span.onclick = function() {
  document.getElementById('modal_1').style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById('modal_1')) {
    document.getElementById('modal_1').style.display = "none";
  }
}

//Bemowo
document.getElementById("more_info_2").onclick = function() {
  document.getElementById('modal_2').style.display = "block";
}

span.onclick = function() {
  document.getElementById('modal_2').style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById('modal_2')) {
    document.getElementById('modal_2').style.display = "none";
  }
}
//Mokotów
document.getElementById("more_info_3").onclick = function() {
  document.getElementById('modal_1').style.display = "block";
}

span.onclick = function() {
  document.getElementById('modal_3').style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById('modal_3')) {
    document.getElementById('modal_3').style.display = "none";
  }
}
