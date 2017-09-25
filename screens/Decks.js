// @flow
import React from 'react'
import {connect} from 'react-redux'
import {ScrollView, TouchableOpacity, View} from 'react-native'
import {
  Body,
  Button,
  Card,
  CardItem,
  Fab,
  H1,
  H3,
  Right,
  Text,
} from 'native-base'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import s from '../styles'
import {cardNumberText} from '../utils'

const Decks = ({
  decks,
  navigation,
}: {
  decks: {[deckName: string]: Array<Object>},
  navigation: Object,
}) => {
  const hasCards = Object.keys(decks).length > 0
  return (
    <View style={s.flex1}>
      {hasCards ? (
        <ScrollView contentContainerStyle={[s.pa10]} style={s.flex1}>
          <H1 style={[s.mb20, s.tc]}>
            Welcome back ! Choose a deck below to start !
          </H1>
          {Object.entries(
            decks,
          ).map(([deckName: string, deck: Array<Object>]) => (
            <TouchableOpacity
              key={deckName}
              onPress={() => {
                navigation.navigate('Deck', {deckName})
              }}
            >
              <Card pointerEvents="none">
                <CardItem>
                  <MaterialCommunityIcons
                    color={'#ccc'}
                    name="cards"
                    size={32}
                  />
                  <Body style={s.ml10}>
                    <Text>{deckName}</Text>
                    {/*  $FlowBug: length: Property cannot be accessed on mixed */}
                    <Text note>{cardNumberText(deck.length)}</Text>
                  </Body>
                  <Right>
                    <MaterialCommunityIcons
                      color={'#ccc'}
                      name="arrow-right"
                      size={32}
                    />
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View style={[s.flex1, s.ph10]}>
          <View style={[s.flex1, s.justifyCenter]}>
            <H1 style={[s.fw6, s.tc]}>Welcome in UdaciCards !</H1>
            <H3 style={[s.mt20, s.mb20, s.tc]}>
              To start playing you must create your first Deck
            </H3>
          </View>
          <View style={[s.flex1]}>
            <Button
              block
              onPress={() => navigation.navigate('NewDeck')}
              style={s.mt20}
            >
              <Text>Create a new Deck</Text>
            </Button>
          </View>
        </View>
      )}
      <Fab
        onPress={() => navigation.navigate('NewDeck')}
        position="bottomRight"
        style={s.bgBlue}
      >
        <MaterialCommunityIcons color="white" name="library-plus" size={32} />
      </Fab>
    </View>
  )
}

export default connect(({decks}) => ({decks}))(Decks)
