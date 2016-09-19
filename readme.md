# Flash Cards for Learning
a mobile friendly collection of flash cards for learning.

## Pieces
===
MVP
- a collection of flash-card decks of various topics
    - in each deck there are cards
        - in each card there is a term or topic & a definition (use HTML's definition elements)
- number of cards in a deck is unlimited
- the user can make his/her own cards using data from a JSON file to load 
===
- there is a timer
    example
    var decks = {
        deckName : "Star Wars Characters",
        cards: { 
            cardOne: { 
                term: "Vader", 
                definition: "A whiny dude that's more machine than human." 
            },
            cardTwo: { 
                term: "Luke Skywalker",
                definition: "A whiny dude from Tatooine that becomes a Jedi." 
            },
            cardThree: { 
                term: "Rey", 
                definition: "A young girl with a mysterious past. She is not whiny." 
            }
        }
    }

## Draft of how this will work

- User sees the sets of cards (decks)
    click/touch deck -> user has 2 options (3 if I can implement Timer Feature):
        ===
        MVP
        1. Start Learning
        2. 'X' to Close
        ===
        3. ! Timer Feature, see below
    
    ===
    1: click Start Learning ->
    if start learning {
        - state: display side 1
            show card-1's "term"
            & user has 2 options:
                1. flip to check definition or answer
                    - if flipped / state: display side 2 {
                        first card-1's definition is displayed
                        & user has two options: 
                            1. mark as correct
                                - if correct {
                                    1 point is added to the score
                                    & display to the card-2
                                }
                            2. mark as wrong 
                                - if wrong { 
                                    0 points and added to missed log
                                    & display to the card-2
                                }
                    }
                2. user can skip card-1
                    - if skip {
                        card-2 moves to the back of the order
                        & display to the card-2
                    }
    } else there are no more cards? {  
            user sees their grade e.g. "You got 7/10 or 70% correct"
            $and what they got wrong
        }
    }   
    
    2. click "X" to Close
        exits deck
    
    3 Timer Feature:
        user chooses to be timed by 30 seconds
        timer begins for each card, counting down from 30 seconds
        if timer runs out { display: "Time up!" }
        user can flip before timer is done

