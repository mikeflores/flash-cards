# Flash Cards for Learning
a mobile friendly collection of flash cards for learning.

## MVP Alpha Release
- a collection of flash-card decks of various topics
    - in each deck there are cards
        - in each card there is a term or topic & a definition (use HTML's definition elements)        
- number of cards in a deck is unlimited
- the user can make his/her own cards using data from a JSON file to load 

    ```javascript
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
    ```

## Not MVP Beta Release
- a Timer Feature

## Pseudocode
```
    User sees the sets of cards (decks)
    click/touch deck -> user has 2 options (3 if I can implement Timer Feature):
        ===
        1. Start Learning
        2. 'X' to Close
        ===
        3. Timer Feature, see below
    
    ===
    1: click Start Learning ->
    if start learning {
        default state, display side 1 or "term"
            show first card's "term"
            & show user 2 options:
                1. flip to see definition or answer
                    if flip 
                        state changes to display side 2 or "definition"
                        & user has two options: 
                            1. mark as correct
                                if correct {
                                    1 point is added to the score
                                    & display to the next card
                                }
                            2. mark as wrong 
                                if wrong { 
                                    0 points and added to missed log
                                    & move to the next card
                                }
                    }
                2. skip to next card
                    - if skip {
                        first card moves to the back of the order
                        & moeve to the next card
                    }
    } else (there are no more cards in the deck because all the cards have been marked wrong or right) {  
            user sees their grade e.g. "You got 7/10 or 70% right"
            & "here are the list of terms you should brush up on."
            display cards marked wrong.
        }
    }   
    ===
    2. click "X" to Close
        exits deck
    ===
```

```
    3 Timer Feature:
        user has the option to be timed 30 seconds
        timer begins for each card, counting down from 30 seconds
        if timer runs out { display: "Time up!" }
        user can flip before timer is done
```
