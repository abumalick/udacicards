// @flow
export const createDeck = ({deckName}: {deckName: string}) => ({
  type: 'CREATE_DECK',
  deckName,
})

export const createCard = ({
  answer,
  deckName,
  question,
}: {
  answer: string,
  deckName: string,
  question: string,
}) => ({
  type: 'CREATE_CARD',
  answer,
  deckName,
  question,
})

export default createDeck
