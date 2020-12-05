window.setInterval(function() {
	clockFunction();
}, 1000);

function clockFunction() {

	var date = new Date();
	var month = date.toLocaleString('default', { month: 'long' });
	var day = date.toLocaleString('en-us', {  weekday: 'long' });
	var hours= date.getHours();
	if (hours == 0){ hours = 12};
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	document.getElementById("time").innerHTML = hours+ ':' + minutes + ':' + seconds;
	document.getElementById("date").innerHTML = month + ' ' + date.getDate() + ', ' + date.getFullYear() + ', ' + day;

}

function circumference() {
	var radius = document.getElementById('radius').value;
	result = 2*3.14*radius;
	console.log(2*3.14*radius);
	document.getElementById('Circumference').innerText = "The Circumference is : " + result;
	
}

var place = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];
var place_1, place_2;

window.onload = function(){
	array_of_places();
}

function array_of_places(){

		document.getElementById('display_array_elements').innerHTML =  `<label><b>Original Array:</b>` + '\xa0\xa0' + 
																		place + '<br>' + '<b>LENGTH= ' + place.length + 
																		'</b>' + '</label>';
		document.getElementById('add_places').innerHTML = `<button onclick="places();">ADD PLACE</button>`;
		
	
}

function places() {

		document.getElementById('add_places').innerHTML = `<input type="text" id = "place1" placeholder="place1">
															<input type="text" id = "place2" placeholder="place2">
															<button onclick="addplace();">ADD</button></div>`;		
}

function addplace() {

		place_1 = document.getElementById('place1').value;
		place_2 = document.getElementById('place2').value;
		place.push(place_1, place_2);
		document.getElementById('add_places').innerHTML =  `<label><b>After adding places:</b>` + '\xa0\xa0' + place + '<br>' +
															'<b>LENGTH=' + place.length + '</b>'
															+ '</label>';
		document.getElementById('remove').innerHTML = `<button onclick = remove();> REMOVE Kathmandu</button>`;
}

function remove() {

		place.splice(3,1);
		document.getElementById('remove').innerHTML = `<label><b>Resulting Array:</b>` + '\xa0\xa0' + place + '<br>' +
																  '<b>LENGTH=' + place.length + '</b>'
																	+ `</label>`;
}

function tip_calculator() {

		var total_bill = document.getElementById('total_bill').value;
		var tip_percentage = document.getElementById('tip_percentage').value;
		var tip = (tip_percentage / 100) * total_bill;
		document.getElementById('tip').innerHTML = '<label><b>TIP = ' + tip + 'Rs. </b>' + '</label>';
}