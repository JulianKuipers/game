var main = function () {
    "use strict";
    var currentGuesser, currrentChecker, statisticsFile, userId, guesser, gameId;

    // TO decide roles: Every user gets a userID assigned by serever. If ID is odd, user starts as guesser and of even, starts as checker.


    // Initiate userId
    userId = 1;

    // Read the JSON file for the game state
    statisticsFile = gameId + "-gamestatistics.json";
    $.getJSON(statisticsFile, funtion () {
        if (statisticsFile.currentGuesser == userId) {
            guesser = true;
        else {
            guesser = false;
        }
    });


    // Generate the HTML for the current game state

    // Let the guesser make his move and check the validity

    var activeRow = 10; // this needs to eventually get the value from gamestate file

    if (activeRow = 10) {
        $("div#" + activeRow + ".GuessColor.flex").addClass("activeRow");
    }
    else if (activeRow < 10 && activeRow > 0) {
        $("div#" + (activeRow - 1) + ".guesscolor.flex").removeClass("activeRow");
        $("div#" + activeRow + ".guesscolor.flex").addClass("activeRow");
    }
    else {
        // game ends
    }

    var currentColor;

    $(".c .blue").on("click", function () {
        currentColor = ".blue";
    });

    $(".c .red").on("click", function () {
        currentColor = ".red";
    });

    $(".c .white").on("click", function () {
        currentColor = ".white";
    });

    $(".c .black").on("click", function () {
        currentColor = ".black";
    });

    $(".c .green").on("click", function () {
        currentColor = ".green";
    });

    $(".c .orange").on("click", function () {
        currentColor = ".orange";
    });

    $(".c .yellow").on("click", function () {
        currentColor = ".yellow";
    });

    $(".c .purple").on("click", function () {
        currentColor = ".purple";
        console.log("purple");
    });
console.log(currentColor);

    $(".activeRow .g").on("click", function () {
        $(".g").addClass(currentColor);
    });

    // Modify the JSON file and send to other player

    // Let the checker make his moves

    // Switch the roles of the player

    // Update JSON file with game statistics
}

$(document).ready(main);