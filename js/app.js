var pos = 0;

// Creates the objects and defines their attributes
function noun(de_g, de_s, de_p, en) {
  this.de_g = de_g;
  this.de_s = de_s;
  this.de_p = de_p;
  this.en = en;
}

function verb(de_inf, de_per, de_imper, en) {
  this.de_inf = de_inf;
  this.de_per = de_per;
  this.de_imper = de_imper;
  this.en = en;
}

function conjunction(de, en, isSub) {
  this.de = de;
  this.en = en;
  this.isSub = isSub;
}

function adjective(de, en) {
  this.de = de;
  this.en = en;
}

// Creates and adds words to the word type categories 
var nounArray = [
  new noun("die", "Tasse", "Tassen", "Cup"),
  new noun("der", "Apfel", "Äpfel", "Apple"),
  new noun("das", "Messer", "Messer", "Knife"),
  new noun("die", "Flasche", "Flaschen", "Bottle"),
  new noun("der", "Fuß", "Füße", "Foot"),
];
var verbArray = [
  //verb(de_inf, de_per, de_imper, en)
  new verb("gehen", "gegangen", "ging", "to go"),
  new verb("kommen", "gekommen", "kam", "to come"),
  new verb("machen", "gemacht", "machte", "to make/do"),
  new verb("arbeiten", "gearbeitet", "arbeitete", "to work"),
  new verb("spielen", "gespielt", "spielte", "to play"),
];
var adjArray = [
  // adjective(de, en)
  new adjective("müde", "tired"),
  new adjective("glücklich", "happy"),
  new adjective("sonnig", "sunny"),
  new adjective("traurig", "sad"),
  new adjective("missvergnügt", "annoyed"),
];
var conjArray = [
  //conjunction(de, en, isSub)
  new conjunction("und", "and", false),
  new conjunction("aber", "but", false),
  new conjunction("weil", "because", true),
  new conjunction("obwohl", "although", true),
  new conjunction("damit", "so that", true),
];

// Creates toString() override methods for all word types 
noun.prototype.toString = function nounToString() {
  var str = this.de_g + " " + this.de_s;
  return str;
}
verb.prototype.toString = function verbToString() {
  var str = this.de_inf + ", " + this.de_per + ", " + this.de_imper;
  return str;
}
adjective.prototype.toString = function adjectiveToString() {
  var str = this.de;
  return str;
}
conjunction.prototype.toString = function conjToString() {
  var str = this.de;
  return str;
}

// Adds all array elements together 
var tArray = nounArray.concat(verbArray, adjArray, conjArray); 

 


document.getElementById("deText_1");
document.getElementById("deText_2");
document.getElementById("deText_3");

// pos is the counter token
document.getElementById("deText_1");



// Event Listener for Next Button 
document.getElementById("nextBtn").addEventListener("click", next);
// Event Listener for Next Button 
document.getElementById("backBtn").addEventListener("click", back);
// Event Listener for Next Button 
document.getElementById("randomBtn").addEventListener("click", random);



// Function to get next object in array and push to text box 
function next() {
	console.log("test");
	document.getElementById("en_text").innerHTML = "test";
		if(pos < tArray.length) { // Checks to see if end of array is reached
			document.getElementById("en_text").innerHTML = tArray[pos].en;
			document.getElementById("de_text").innerHTML = tArray[pos];
			pos++; // Adds increment to position token
		}else{
			document.getElementById("en_text").innerHTML = "end of array";
			document.getElementById("de_text").innerHTML = "end of array";
		}

}
// Function to get previous object in array and push to text box 
function back() {
		if(pos > 0){ // Checks to see that number is not negative
			pos--;
			document.getElementById("en_text").innerHTML = tArray[pos].en;
			document.getElementById("de_text").innerHTML = tArray[pos];
			 // Adds negative increment to position token
		}else{
			document.getElementById("en_text").innerHTML = "end of array";
			document.getElementById("de_text").innerHTML = "end of array";
		}


}
// Function to get random object in array and push to text box 

function random() {
	var rObj = tArray[Math.floor	(Math.random()*		tArray.length	)	];

		document.getElementById("en_text").innerHTML = rObj.en;
		document.getElementById("de_text").innerHTML = rObj;

}

// Create Varialbes for elements that are being accessed 
var nounForm = document.getElementById("nounForm"); 
var der = document.getElementById("genderDer");
var die = document.getElementById("genderDie");
var das = document.getElementById("genderDas");

nounForm.addEventListener("submit" , function(event){
  event.preventDefault();
  console.log( der.checked, die.checked, das.checked )
}); 

console.log(nounForm);




