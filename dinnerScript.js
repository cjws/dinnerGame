// Produces a random number between given values
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Reveals a random dinner from the curated list
function revealDinners(){
	// Curated list of dinners
	var dinners = {
	"Steak Sandwich":["Steak"," Bread"," Onion"," Pickles"],
	"Chicken Noodle Soup":[" Chicken"," Noodles"," Soup" ],
	"Fried Chicken":["Chicken"," Jalapenos"," Pickles"," Slaw"],
	"Easy Pasta":["Packet tortolini "," Cherry tomatoes"],
	"Chilli":[],
	"'Lemongrass' Beef":["Chuck steak"," Yellow curry paste"," Snow peas"," Carrot"],
	"Chicken Caesar":["Crumbed chicken"," Bacon"," Cos lettuce"," Parmesan cheese"," Caesar dressing"]
	};

	// Returns a random dinner from the curated list
	var randomDinner = function (obj) {
		var keys = Object.keys(obj);
		var randomKeyInt = keys.length * Math.random() << 0;
		var dinnerName = keys[randomKeyInt]; // This is the meal name
		var dinnerIngredients = obj[keys[ randomKeyInt]]; // This is the corresponding ingredients
    var paragraph = document.getElementById("combinedIngredientsList");
    document.getElementById("dinnerList").innerHTML =
    var text = document.createTextNode(" "+dinnerIngredients);
    paragraph.appendChild(text);
		return(dinnerName + ': ' + dinnerIngredients);
	};

	document.getElementById("dinnerList").innerHTML = randomDinner(dinners);
}
