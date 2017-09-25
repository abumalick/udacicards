// @flow
import React from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity} from 'react-native'
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Fab,
  H1,
  Right,
  Text,
  View,
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
    <Container>
      <View style={[s.flex1, s.mt20]}>
        {hasCards ? (
          <Content padder>
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
          </Content>
        ) : (
          <Content padder style={s.flex1}>
            <H1 style={s.tc}>Welcome in UdaciCards !</H1>
            <Text style={[s.mt20, s.mb20, s.tc]}>
              To start playing you must create your first Deck
            </Text>
            <Button
              block
              onPress={() => navigation.navigate('NewDeck')}
              style={s.mt20}
            >
              <Text>Create a new Deck</Text>
            </Button>
          </Content>
        )}
        <Fab
          onPress={() => navigation.navigate('NewDeck')}
          position="bottomRight"
          style={s.bgBlue}
        >
          <MaterialCommunityIcons color="white" name="library-plus" size={32} />
        </Fab>
      </View>
    </Container>
  )
}

export default connect(({decks}) => ({decks}))(Decks)
