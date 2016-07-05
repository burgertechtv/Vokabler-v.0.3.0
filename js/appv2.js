/**
 * @author Developer
 */
console.log("js loaded");

//Definition of Noun Word Type
function noun(de_g, de_s, de_p, en) {
  this.de_g = de_g; // de Gender
  this.de_s = de_s; // de Singular
  this.de_p = de_p; // de Plural
  this.en = en;		// en Definition
}

// Create an array[] of nouns
var nounArray = [
  new noun("die", "Tasse", "Tassen", "Cup"),
  new noun("der", "Apfel", "Äpfel", "Apple"),
  new noun("das", "Messer", "Messer", "Knife"),
  new noun("die", "Flasche", "Flaschen", "Bottle"),
  new noun("der", "Fuß", "Füße", "Foot"),

  new noun("der", "Bus", "Büsse", "Bus"),
  new noun("der", "Zug", "Züge", "Train"),
  new noun("das", "Auto", "Autos", "Car"),
  new noun("das", "Flugzeug", "Flugzeuge", "Plane"),
  new noun("die", "Flughafen", "Flughäfen", "Airport"),

  new noun("die", "Bushaltestelle", "-", "Bus Stop"),
  new noun("der", "Fuß", "Bahnhöfe", "Train Station"),
  new noun("der", "Hauptbahnhof", "Hauptbahnhöfe", "Main Station"),
  new noun("das", "Gleis", "Gleise", "Train Track"),
  new noun("die", "Fahrkarte", "Fahrkarten", "Train/Bus Ticket"),
  new noun("die", "Flugkarte", "Flugkarten", "Plane Ticket"),
  new noun("die", "Abfahrt", "Abfahrten", "Departure"),
  new noun("der", "Ankunft", "Ankünfte", "Arrival"),
];

//Create tArray == nounArray
var tArray = nounArray;

//Add Event Listeners for Click Events on Buttons
document.getElementById("nextBtn").addEventListener("click", next);
document.getElementById("backBtn").addEventListener("click", back);
document.getElementById("randomBtn").addEventListener("click", random);






//Token
var i = 0;

//Display List Name and Length
document.getElementById("listName").innerHTML = "nounArray";
document.getElementById("listLength").innerHTML = tArray.length;

	

//Define 'next' function()
function next() {
		if (i>=tArray.length) {

		}else{i++;}

	if(i >= tArray.length) {
		document.getElementById("enText_1").innerHTML = "End of List";
		document.getElementById("deText_1").innerHTML = "End of List";
		document.getElementById("deText_2").innerHTML = "End of List";
		document.getElementById("deText_3").innerHTML = "End of List";

	} else {
		document.getElementById("enText_1").innerHTML = nounArray[i].en;
		document.getElementById("deText_1").innerHTML = nounArray[i].de_g;
		document.getElementById("deText_2").innerHTML = nounArray[i].de_s;
		document.getElementById("deText_3").innerHTML = nounArray[i].de_p;
	}
	

}

//Define 'back' function()
function back() {
	if(i < 0){
		
	} else{i--;}

	if (i >= 0) {
		document.getElementById("enText_1").innerHTML = nounArray[i].en;
		document.getElementById("deText_1").innerHTML = nounArray[i].de_g;
		document.getElementById("deText_2").innerHTML = nounArray[i].de_s;
		document.getElementById("deText_3").innerHTML = nounArray[i].de_p;
	} else {
		document.getElementById("enText_1").innerHTML = "End of List";
		document.getElementById("deText_1").innerHTML = "End of List";
		document.getElementById("deText_2").innerHTML = "End of List";
		document.getElementById("deText_3").innerHTML = "End of List";
	}



}


//Define 'random' function()
function random() {
	r = Math.floor(Math.random() * tArray.length);
		//Prevents random word being selected twice
		while(i===r) {
			r = Math.floor(Math.random() * tArray.length);
		}
	i = r;


	document.getElementById("enText_1").innerHTML = i;
	document.getElementById("enText_1").innerHTML = nounArray[i].en;
	document.getElementById("deText_1").innerHTML = nounArray[i].de_g;
	document.getElementById("deText_2").innerHTML = nounArray[i].de_s;
	document.getElementById("deText_3").innerHTML = nounArray[i].de_p;
		
}

