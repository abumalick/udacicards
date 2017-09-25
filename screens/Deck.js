// @flow
import React from 'react'
import {connect} from 'react-redux'
import {Button, Content, H1, H2, Text, View} from 'native-base'
import s from '../styles'
import {cardNumberText} from '../utils'

const Deck = ({
  deck,
  deckName,
  navigation,
}: {
  deck: Array<Object>,
  deckName: String,
  navigation: Object,
}) => (
  <Content padder styles={[s.flex1, s.justifyAround]}>
    <H1 style={[s.mt20, s.tc]}>{deckName}</H1>
    <H2 style={[s.mt20, s.tc]}>{cardNumberText(deck.length)}</H2>
    <Button
      block
      onPress={() => navigation.navigate('AddCards', {deckName})}
      style={s.mt10}
    >
      <Text>Add Card</Text>
    </Button>
    <Button
      block
      disabled={deck.length === 0}
      onPress={() => navigation.navigate('Quiz', {deckName})}
      style={s.mt10}
    >
      <Text>Quiz</Text>
    </Button>
  </Content>
)
Deck.navigationOptions = ({navigation}) => ({
  headerRight: <View />,
  headerTitle: `Deck: ${navigation.state.params.deckName}`,
})

export default connect(
  ({decks}, {navigation: {state: {params: {deckName}}}}) => ({
    deck: decks[deckName],
    deckName,
  }),
)(Deck)
