// Star Wars Object
var deck = {
    deckName: "Star Wars",
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
    $(".deckName").html(deck.deckName)
    showCard(0)
    $(".mark-as").hide()
})

$(".card dt, .card dd").on("click", function(event){
    $("dd").toggle()
    $("dt").toggle()
    $(".mark-as").toggle()
    // console.log("works")
})

// this skips to the next card
$(".js-skip").on("click", function(event) {
    event.preventDefault()
    var index = $(".card").attr("data-index")
    showCard(parseInt(index)+1)
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
    $(".definition").html(deck.cards[index].definition).hide()
    $("dt").html(deck.cards[index].term)
    $(".card").attr("data-index", index)
    $(".card-number").html(index+1)
}

// at the end viewScore