export const cardNumberText = (num: number) => {
  switch (num) {
    case 0:
      return 'No card in this deck'
    case 1:
      return '1 card'
    default:
      return `${num} cards`
  }
}

export default cardNumberText
