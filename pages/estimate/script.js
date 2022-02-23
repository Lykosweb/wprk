history.replaceState(null, null, ' ');

function prices() {
	$('html, body').animate({
    scrollTop: $(".tH").offset().top - 40
  }, 700);
}


function toTop() {
	$('html, body').animate({
    scrollTop: $("html").offset().top - 0
  }, 800);
  history.replaceState(null, null, ' ');
}


function doMth() {
	prices();
	let d = document.querySelector('input[name="domainType"]:checked').value;
	let e = document.querySelector('input[name="emailS"]:checked').value;
	let database = document.querySelector('input[name="database"]:checked').value;


	document.getElementById('initial').innerHTML = Math.round((Number(d)+Number(database))/5+Number(e)+20.00);

	document.getElementById('host').innerHTML = String(Number(d)+Number(database)) + ' monthly';

	document.getElementById('hostYear').innerHTML = (Number(d)+Number(database))*11;
	document.getElementById('hostYear').innerHTML +=  ' yearly';


	document.getElementById('initial').innerHTML = '$' + String(document.getElementById('initial').innerHTML)
	document.getElementById('host').innerHTML = '$' + document.getElementById('host').innerHTML;
	document.getElementById('hostYear').innerHTML = '$' + document.getElementById('hostYear').innerHTML;

	document.getElementById('hostA').innerHTML = document.getElementById('host').innerHTML;
}

doMth();
prices();

/*


document.querySelector('input[name="domainType"]:checked').value;

*/
