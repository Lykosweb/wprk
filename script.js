history.replaceState(null, null, ' ');

function info() {
	$('html, body').animate({
    scrollTop: $(".text").offset().top - 30
  }, 700), window.location.hash = 'info';
}

function prices() {
	$('html, body').animate({
    scrollTop: $("#prices").offset().top - 0
  }, 700), window.location.hash = 'prices';
}


function toTop() {
	$('html, body').animate({
    scrollTop: $("html").offset().top - 0
  }, 800);
  history.replaceState(null, null, ' ');
}



// function hide() {
// 	document.getElementById("")
// }