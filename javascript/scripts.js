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
    showCard(0)
    $(".mark-as").hide()
    // console.log("Document Ready")
    // for (i = 0; i < deck.length; i++) {
    //     $(".card").append("<div class='.card'></div>")
    // }

})

$(".card dt, .card dd").on("click", function(event){
    $(".definition").toggle()
    $("dt").toggle()
    $(".mark-as").toggle()
    // console.log("works")
})

$(".js-skip").on("click", function(event) {
    console.log("here")
    event.preventDefault()
    var index = $(".card").attr("data-index")
    showCard(parseInt(index)+1)
    console.log(index)
})

function showCard(index){
    // debugger
    $(".definition").html(deck.cards[index].definition).hide()
    $("dt").html(deck.cards[index].term)
    $(".card").attr("data-index", index)
    $(".card-number").html(index+1)
}