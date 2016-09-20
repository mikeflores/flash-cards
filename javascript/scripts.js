// Objects
var deck = {
    deckName: "Star Wars Characters",
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
        }
    ]
}
var vader =  deck.cards[0]
// =====================================


$(document).ready(function(){
    $("h1").html(deck.deckName)
    $("dt").html(deck.cards[1].term)
    $(".definition").html(deck.cards[2].definition).hide()
    console.log("Document Ready")
})

$(".card").on("click", function(event){
    $(".definition").toggle()
    console.log("works")
})