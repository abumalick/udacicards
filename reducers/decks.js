// Decks have this structure:
// { MyDeckName: [{question: 'My Question', answer: 'My Answer'}]}

const deck = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      return [
        ...state,
        {
          question: action.question,
          answer: action.answer,
        },
      ]
    default:
      return state
  }
}

const decks = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_DECK':
      return {
        ...state,
        [action.deckName]: [],
      }
    case 'CREATE_CARD':
      return {
        ...state,
        [action.deckName]: deck(state[action.deckName], action),
      }
    default:
      return state
  }
}

export default decks
