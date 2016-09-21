$(document).ready(function(){
    $(".deckName").html(deck.deckName) // fills in the name of the deck for this page
    showCard(0) // starts the deck at card number 1
})

$(".card dt, .card dd").on("click", function(event){
    $("dd, dt, .grade").toggle() // event that allows for toggling
})

// event listener to go to the previous card
$(".previous").on("click", function(event) {
    event.preventDefault()
    var index = $(".card").attr("data-index")
    showCard(parseInt(index)-1) // still vague on what this does
})

// event listener to go to the next card
$(".next").on("click", function(event) {
    next()
})


var numRight = 0
$(".right").on("click", function(event) {
    numRight++
    next()
})

var numWrong = 0
$(".wrong").on("click", function(event) {
    event.preventDefault()
    numWrong++
    next()
})


// Functions
function showCard(index){

    if (deck.cards[index]){
        var definition = deck.cards[index].definition
        var term = deck.cards[index].term
    } else {
        var term = "You got " + numRight + " correct " + "and " + numWrong + " wrong!"
        index = -1
        $(".next").html("start over")
        $(".status, .previous").hide()
        var definition = message
    }
    $("dd").html(definition).hide() // fills in the definition and hides it
    $("dt").html(term).show() // fills in the term
    $(".grade").hide()
    $(".card").attr("data-index", index)
    $(".card-number").html(index+1) // fills in the card order
    $(".number-of-cards").html(deck.cards.length) // fills in the total number of cards in the deck
}

function next() {
    event.preventDefault()
    var index = $(".card").attr("data-index")
    showCard(parseInt(index)+1)
}

// at the end viewScore