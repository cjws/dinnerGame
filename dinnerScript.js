function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function revealDinners(){
	var words = ['Steak Sandwich',
	'Chicken Noodle Soup',
	'Fried Chicken',
	'Potato Heaven',
	'Easy Pasta',
	'Chilli',
	];
	var randInt = randomInteger(0, words.length - 1);
	var item = words[randInt];
	document.getElementById("dinnerList").innerHTML = item;
}


function revealMessage() {
	        document.getElementById("hiddenMessage").style.display = 'block';
}
