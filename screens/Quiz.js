// @flow
import React from 'react'
import {connect} from 'react-redux'
import {TouchableOpacity, View} from 'react-native'
import {Body, Button, Card, CardItem, Content, H1, H2, Text} from 'native-base'
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
          <Text style={s.mt10}>{`${position + 1} / ${deck.length}`}</Text>
          <TouchableOpacity onPress={this.flipCard}>
            <Card pointerEvents="none">
              <CardItem>
                <Body style={[s.pa10, s.itemsCenter]}>
                  <MaterialCommunityIcons
                    color={'#ccc'}
                    name={
                      questionSide
                        ? 'comment-question-outline'
                        : 'information-outline'
                    }
                    size={40}
                  />
                  <Text style={[s.pv10, s.f30, s.fw6]}>
                    {questionSide
                      ? deck[position].question
                      : deck[position].answer}
                  </Text>
                  <Text style={[s.mt10, s.lightGray]}>
                    {questionSide
                      ? 'Click to show Answer'
                      : 'Click to show Question'}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
          <Button block onPress={() => this.next(true)} style={s.mt20} success>
            <Text>Correct</Text>
          </Button>
          <Button block danger onPress={() => this.next(false)} style={s.mt10}>
            <Text>Incorrect</Text>
          </Button>
        </Content>
      )
    return (
      <View style={[s.ph10, s.flex1]}>
        <View style={[s.flex1, s.justifyCenter]}>
          <H1 style={[s.pv10, s.tc, s.f30, s.fw6]}>
            {correctCount >= deck.length / 2
              ? 'Congratulation you won !'
              : 'Too bad, maybe next time !'}
          </H1>
          <H2 style={[s.mb20, s.tc]}>
            {`Your score is ${correctCount} / ${deck.length}`}
          </H2>
        </View>
        <View style={s.flex1}>
          <Button block onPress={this.restart} style={s.mt10} warning>
            <Text>
              {correctCount >= deck.length / 2 ? 'Restart' : 'Try again'}
            </Text>
          </Button>
          <Button block onPress={() => navigation.goBack()} style={s.mt10}>
            <Text>Back to Deck</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default connect(
  ({decks}, {navigation: {state: {params: {deckName}}}}) => ({
    deck: decks[deckName],
  }),
)(Quiz)
