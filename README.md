# Flashcards-api

## API Definition

### [GET] /api/flashcards
Returns a list of [Flashcard](#flashcard).

## Objects

### Flashcard
- _id: ObjectID
- topic: Array
- question: String
- answer: String
- counters: Object
    - show: Number
    - correct: Number
    - incorrect: Number