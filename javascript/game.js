
$(document).ready(function() { 

// Global Variables 
var wins = 0;
var losses = 0;
var boxesOnShip = 0;
// Store the displayed random number in a variable. The random number should be between 19 - 120.
var boxesShipCanHold;
var boxesInEachCrate = [];


function startGame() {

	// Create a random number between 19 and 120 at the beginning of each game and store it in a variable.
	// This random number signifies the number of boxes the ship can hold. 
	boxesShipCanHold = Math.floor((Math.random() * 101) + 19);
	// The player will be shown the number of boxes the cargo ship can hold at the start of the game.
	$(".boxes-ship-can-hold").html(boxesShipCanHold); 


	// Create a random number between 1 and 12 and assign the number to each of the four crate values.
	// Each crate will hold a hidden value of boxes that it has.  	
	var crateValue1 = Math.floor((Math.random() * 12) + 1); 
	var crateValue2 = Math.floor((Math.random() * 12) + 1); 
	var crateValue3 = Math.floor((Math.random() * 12) + 1); 
	var crateValue4 = Math.floor((Math.random() * 12) + 1); 
	boxesInEachCrate.push(crateValue1);
	boxesInEachCrate.push(crateValue2);
	boxesInEachCrate.push(crateValue3);
	boxesInEachCrate.push(crateValue4);

	// Each crate will be targeted by their ID name and given a data attribute called data-cratevalue.
	// This data attribute will be set equal to a random crate value assigned above.
	$("#crate-1").attr("data-cratevalue", crateValue1);
	$("#crate-2").attr("data-cratevalue", crateValue2);
	$("#crate-3").attr("data-cratevalue", crateValue3);
	$("#crate-4").attr("data-cratevalue", crateValue4);

}

startGame();


function createBoxes() { 
	// Create boxes to load on to ship when a specific crate is clicked.
	// Create red boxes when first crate is clicked.
	$("#crate-1").on("click", function () { 
		for (var i = 0; i < boxesInEachCrate[0]; i++) {
			var box = $("<img>");

			box.addClass("box");

			box.attr("src", "images/red-crate.png");
			box.attr("data-iceCreamScoopNumber", boxesInEachCrate[i]);

			$(".boxes").append(box);
		}
	});
	// Create brown boxes when second crate is clicked.
	$("#crate-2").on("click", function () { 
		for (var i = 0; i < boxesInEachCrate[1]; i++) {
			var box = $("<img>");

			box.addClass("box");

			box.attr("src", "images/brown-crate.png");
			box.attr("data-iceCreamScoopNumber", boxesInEachCrate[i]);

			$(".boxes").append(box);
		}
	});
	// Create orange boxes when third crate is clicked.
	$("#crate-3").on("click", function () { 
		for (var i = 0; i < boxesInEachCrate[2]; i++) {
			var box = $("<img>");

			box.addClass("box");

			box.attr("src", "images/orange-crate.png");
			box.attr("data-iceCreamScoopNumber", boxesInEachCrate[i]);

			$(".boxes").append(box);
		}
	});
	// Create green boxes when fourth crate is clicked.
	$("#crate-4").on("click", function () { 
		for (var i = 0; i < boxesInEachCrate[3]; i++) {
			var box = $("<img>");

			box.addClass("box");

			box.attr("src", "images/green-crate.png");
			box.attr("data-iceCreamScoopNumber", boxesInEachCrate[i]);

			$(".boxes").append(box);
		}
	});
}

createBoxes();

	// The click event applies to every single crate on the page.
	$(".crate").on("click", function() {
	  	// Determining the crate's value requires us to extract the value from the data attribute.
	    // Using the $(this) keyword specifies that we should be extracting the crate value of the clicked crate.
	    // Using the .attr("data-cratevalue") allows us to grab the value out of the "data-cratevalue" attribute.
	    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the totalScore.  
		var crateValue = ($(this).attr("data-cratevalue"));
		crateValue= parseInt(crateValue);
	    // We then add the crateValue to the boxesOnShip which is a global variable.
	    // Every click from every crate adds to the global boxesOnShip.
		boxesOnShip += crateValue;
	    // The boxes on ship number is updated on the screen for the user to see.  
		$("#users-score").html(boxesOnShip);


		// Compare the current value of the boxesOnShip variable with the boxesShipCanHold variable. 
		// If the boxesOnShip variable matches the boxesShipCanHold variable, the player wins and wins increases by 1. 
		if (boxesOnShip === boxesShipCanHold) {
			$("#win-or-lose").html("You win!");
			wins++;
			$("#wins").html(wins);
			// Reset values and start the game again. 
			boxesOnShip = 0;
			boxesInEachCrate = [];
			$("#users-score").empty();
			$(".boxes").empty();
			startGame();
		}

		// If the boxesOnShip variable is greater than the boxesShipCanHold variable, the player loses and losses increases by 1. 
		else if (boxesOnShip > boxesShipCanHold) {
			$("#win-or-lose").html("You sunk the cargo ship!");
			losses++;
			$("#losses").html(losses);
			// Reset values and start the game again. 
			boxesOnShip = 0;
			boxesInEachCrate = [];
			$("#users-score").empty();
			$(".boxes").empty();
			startGame();
		}

	}); // end the onclick function


}); // end document.ready function









