console.log('Ive hacked the main-frame');

$(document).ready(function(){

    let selectedColor = '';
    let guess = 0;

    let temp = $('.g');
    let guessBox = [];
    for(let i = 9; i >= 0; i--){
        guessBox.push(temp[i]);
    }

   
    // Need to make a submit button for the nails, and alos change the ids for the nails so that this exact button fucntion can be impmented for that one
    $('.Button').click(function(){

        $('.active').removeClass('active');
        guess++;
        let cur = 10 - guess;
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