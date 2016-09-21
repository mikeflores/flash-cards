// Star Wars Object
var deck = {
    deckName: "Star Wars Universe",
    cards: [ 
        { 
            term: "Vader", 
            definition: "A whiny dude that's more machine than human." 
        },
        { 
            term: "Luke Skywalker",
            definition: "A whiny dude from Tatooine that becomes a Jedi." 
        },
        {
            term: "Rey", 
            definition: "A young girl with a mysterious past. She is not whiny." 
        },
        {
            term: "Obi Wan Kenobi", 
            definition: "Probably the most well written character in the Star Wars canon." 
        }
    ]
}
// =====================================

$(document).ready(function(){
    $(".deckName").html(deck.deckName) // fills in the name of the deck for this page
    showCard(0) // starts the deck at card number 1
    $(".mark-as").hide() // hides the grading system
})

$(".card dt, .card dd").on("click", function(event){
    $("dd").toggle() // event that allows for toggling
    $("dt").toggle()
    // $(".mark-as").toggle()
})

// event listener to get to the previous card
$(".previous").on("click", function(event) {
    event.preventDefault()
    var index = $(".card").attr("data-index")
    showCard(parseInt(index)-1) // not sure what this does
})

// event listener to get to the next card
$(".next").on("click", function(event) {
    event.preventDefault()
    var index = $(".card").attr("data-index")
    showCard(parseInt(index)+1) // not sure what this does
})


// if no more cards call myScore
    var numRight = 0
    $(".right").on("click", function(event) {
        event.preventDefault()
        numRight++
        console.log(numRight)
    })
    var numWrong = 0
    $(".right").on("click", function(event) {
        event.preventDefault()
        numWrong++
        console.log(numWrong)
    })

function showCard(index){
    // debugger
    $("dd").html(deck.cards[index].definition).hide() // fills in the definition and hides it
    $("dt").html(deck.cards[index].term) // fills in the term
    $(".card").attr("data-index", index)
    $(".card-number").html(index+1) // fills in the card order
    $(".number-of-cards").html(deck.cards.length) // fills in the total number of cards in the deck
}

// at the end viewScore