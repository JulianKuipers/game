$(document).ready(function(){

    var playerID, file;
    
    var socket = new WebSocket("ws://localhost:3000");

    socket.onmessage = function (event) {
        console.log("working on it");
        playerID = event.data; 
        console.log(playerID);
        socket.OPEN();
    };

    function sendJSON() {
        socket.send(file);
    }


    let selectedColor = '';
    let guess = 0;

    let temp = $('.g');
    let guessBox = [];
    for(let i = 9; i >= 0; i--){
        guessBox.push(temp[i]);
    }

   
    // Need to make a submit button for the nails, and alos change the ids for the nails so that this exact button fucntion can be impmented for that one
    $('.Button').click(function(){
        let cur = 10 - guess;
        var row = [];
        for (var i = 0; i < 4; i++) {
            row[i] =  $(`#${cur}-${i + 1}`);
        }
        if (guess == 0) {
            file = JSON.stringify(row);
        }
        else {
            var json = JSON.parse(file);
            file = file.append(row);
            file = JSON.stringify(file);
        }

        sendJSON();


        $('.active').removeClass('active');
        guess++;
        cur = 10 - guess;
        for(let i = 0; i <= 4; i++){
            $(`#${cur}-${i}`).addClass('active');
            $(`#${cur}-${i}`).addClass('active');
        }
    });


    $('.c').click(function(){
        let peg = ($(this).parent())[0];
        selectedColor = 
        $(this).css('background-color');
        console.log(selectedColor);
        $(peg).css('background-color', selectedColor)
    });


    $('.g').click(function(){

        if($(this).hasClass('active')){
            // let c = $(this).css('background-color: blue');
            $(this).css('background-color', selectedColor)
            // selectedColor = c;
        }
    })

    let clickcount = 0;
    let c = 'red';
    $('.n').click(function(){

        if($(this).hasClass('active')){
            if(clickcount == 0){
                c = 'red';
            }
            if(clickcount == 1){
                c = 'black';
            }
            if(clickcount == 2){
                c = 'white';
            }
            clickcount++;
            if(clickcount >= 3){
                clickcount = 0;
            }
            $(this).css('background-color', c)
        }
        
    })
});