history.replaceState(null, null, ' ');

function prices() {
	$('html, body').animate({
    scrollTop: $(".tH").offset().top - 40, behavior: 'smooth'
  }, 700);
}


function toTop() {
	$('html, body').animate({
    scrollTop: $("html").offset().top - 0, behavior: 'smooth'
  }, 800);
  history.replaceState(null, null, ' ');
}


let d;
let e;
let database;
function doMth() {
	prices();
	d = document.querySelector('input[name="domainType"]:checked').value;
	e = document.querySelector('input[name="emailS"]:checked').value;
	database = document.querySelector('input[name="database"]:checked').value;
	
	
	let p = 3; //hosting profit

	
	document.getElementById('initial').innerHTML = (20.00).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	if (document.getElementById('initial').innerHTML.includes(".00")) {
		document.getElementById('initial').innerHTML = document.getElementById('initial').innerHTML.replace(".00", "");
	}
	document.getElementById('host').innerHTML = (p+Number(d)+Number(database)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	if (document.getElementById('host').innerHTML.includes(".00")) {
		document.getElementById('host').innerHTML = document.getElementById('host').innerHTML.replace(".00", "");
	}
	document.getElementById('host').innerHTML +=  ' monthly';

	document.getElementById('hostYear').innerHTML = ((p+Number(d)+Number(database))*12).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	if (document.getElementById('hostYear').innerHTML.includes(".00")) {
		document.getElementById('hostYear').innerHTML = document.getElementById('hostYear').innerHTML.replace(".00", "");
	}
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
