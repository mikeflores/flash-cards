# Flash Cards for Learning

- a collection of subjects in sets of flash-cards (deck)
- in each subject there are cards
- in each card there is a term or topic paired with a definition (use HTML's definition elements)

- MVP What the user sees and what he/she can do: !denotes not MVP
    - mobile first
    - sees the sets of cards (decks)
    - clicks into the cards
        - ! set timer
        - options: begin or 'x' close
    - user sees term
    - user has option to flip to check the definition or answer
    - ! timer begins counting down from 30 seconds, user can flip before timer is done
    - when flipped;
        - definition is displayed
        - user has option to 'mark' as correct or wrong
            - if correct, 1 point is added to the score
            - if wrong, 0 points added and "error will print with grade"
    - at the end of the cards: user sees their grade e.g. "You got 7/10 or 70% corect, here's what you need to work on:" and what they got wrong

    - ! if timer runs out { display: "Time up!" }
    - number of cards in a set is unlimited
    - * the user can make his/her own cards, use JSON to load different answers and questions

