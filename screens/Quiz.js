// @flow
import React from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity} from 'react-native'
import {
  Body,
  Button,
  Card,
  CardItem,
  Content,
  H1,
  H2,
  Text,
  View,
} from 'native-base'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {clearLocalNotification, setLocalNotification} from '../utils'
import s from '../styles'

class Quiz extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: <View />,
    headerTitle: `Quiz: ${navigation.state.params.deckName}`,
  })
  state: {
    correctCount: number,
    position: number,
    questionSide: boolean,
  } = {
    correctCount: 0,
    position: 0,
    questionSide: true,
  }
  props: {
    deck: Array<Object>,
    navigation: Object,
  }
  changeNotificationForTomorrow = () => {
    clearLocalNotification().then(setLocalNotification)
  }
  flipCard = () => {
    this.setState(state => ({questionSide: !state.questionSide}))
  }
  next = success => {
    const {deck} = this.props
    const {position} = this.state
    if (position === deck.length - 1) {
      this.changeNotificationForTomorrow()
    }
    if (success) {
      this.setState(state => ({
        correctCount: state.correctCount + 1,
        position: state.position + 1,
        questionSide: true,
      }))
    } else {
      this.setState(state => ({
        position: state.position + 1,
        questionSide: true,
      }))
    }
  }
  restart = () => {
    this.setState({
      correctCount: 0,
      position: 0,
      questionSide: true,
    })
  }
  render() {
    const {deck, navigation} = this.props
    const {correctCount, position, questionSide} = this.state
    if (position < deck.length)
      return (
        <Content padder>
          <Text>{`${position + 1} / ${deck.length}`}</Text>
          <TouchableOpacity onPress={this.flipCard}>
            <Card pointerEvents="none">
              <CardItem>
                <Body style={s.ml10}>
                  <MaterialCommunityIcons
                    color={'#ccc'}
                    name={
                      questionSide
                        ? 'comment-question-outline'
                        : 'information-outline'
                    }
                    size={32}
                  />
                  <Text>
                    {questionSide
                      ? deck[position].question
                      : deck[position].answer}
                  </Text>
                  <Text style={s.gray}>
                    {questionSide
                      ? 'Click to show Answer'
                      : 'Click to show Question'}
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Text>Click the card to flip it</Text>
          </TouchableOpacity>
          <Button block onPress={() => this.next(true)} style={s.mt10} success>
            <Text>Correct</Text>
          </Button>
          <Button block danger onPress={() => this.next(false)} style={s.mt10}>
            <Text>Incorrect</Text>
          </Button>
        </Content>
      )
    return (
      <Content padder>
        <H1 style={[s.mb20, s.tc]}>
          {correctCount >= deck.length / 2
            ? 'Congratulation you won !'
            : 'Too bad, maybe next time !'}
        </H1>
        <H2 style={[s.mb20, s.tc]}>
          {`Your score is ${correctCount} / ${deck.length}`}
        </H2>
        <Button block onPress={this.restart} style={s.mt10} warning>
          <Text>
            {correctCount >= deck.length / 2 ? 'Restart' : 'Try again'}
          </Text>
        </Button>
        <Button block onPress={() => navigation.goBack()} style={s.mt10}>
          <Text>Back to Deck</Text>
        </Button>
      </Content>
    )
  }
}

export default connect(
  ({decks}, {navigation: {state: {params: {deckName}}}}) => ({
    deck: decks[deckName],
  }),
)(Quiz)
