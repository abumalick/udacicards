// @flow
import React from 'react'
import {connect} from 'react-redux'
import {View} from 'react-native'
import {Button, H1, H3, Text} from 'native-base'
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
  <View style={[s.flex1, s.justifyAround, s.ph10]}>
    <View style={[s.flex1, s.justifyCenter]}>
      <H1 style={[s.f30, s.fw6, s.tc]}>{deckName}</H1>
      <H3 style={[s.gray, s.mt20, s.tc]}>{`(${cardNumberText(
        deck.length,
      )})`}</H3>
    </View>
    <View style={[s.flex1]}>
      <Button block onPress={() => navigation.navigate('AddCards', {deckName})}>
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
    </View>
  </View>
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
