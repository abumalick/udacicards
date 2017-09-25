// @flow
/* eslint no-underscore-dangle: 0 */
import React from 'react'
import {connect} from 'react-redux'
import {KeyboardAvoidingView, View} from 'react-native'
import {Button, Form, Item, Input, Label, Text} from 'native-base'
import {createCard} from '../actions/decks'
import s from '../styles'

class AddCards extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: <View />,
    headerTitle: `Add cards to ${navigation.state.params.deckName}`,
  })
  state: {answer: string, question: string} = {
    answer: '',
    question: '',
  }
  props: {
    deck: Array<Object>,
    deckName: string,
    dispatch: Function,
  }
  questionInput: any
  answerInput: any

  handleSubmit = () => {
    const {deckName, dispatch} = this.props
    const {answer, question} = this.state
    if (question === '') {
      this.questionInput._root.focus()
    } else if (answer === '') {
      this.answerInput._root.focus()
    } else {
      dispatch(createCard({answer, deckName, question}))
      this.setState({answer: '', question: ''})
      this.questionInput._root.focus()
    }
  }
  render() {
    const {deck, deckName} = this.props
    const {answer, question} = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={[s.flex1, s.ph10]}>
        <Text
          style={[s.gray, s.mt10]}
        >{`"${deckName}" contains ${deck.length} cards`}</Text>
        <Form>
          <Item floatingLabel>
            <Label>The question</Label>
            <Input
              autoFocus
              getRef={input => {
                this.questionInput = input
              }}
              onChangeText={text => this.setState({question: text})}
              onSubmitEditing={this.handleSubmit}
              returnKeyType="next"
              value={question}
            />
          </Item>
          {/* TODO: Avoid keyboard */}
          <Item floatingLabel>
            <Label>The answer</Label>
            <Input
              getRef={input => {
                this.answerInput = input
              }}
              onChangeText={text => this.setState({answer: text})}
              onSubmitEditing={this.handleSubmit}
              value={answer}
            />
          </Item>
          <Button
            block
            disabled={answer === '' || question === ''}
            onPress={this.handleSubmit}
            style={[s.mt10]}
          >
            <Text>Submit the question</Text>
          </Button>
        </Form>
      </KeyboardAvoidingView>
    )
  }
}

export default connect(
  ({decks}, {navigation: {state: {params: {deckName}}}}) => ({
    deck: decks[deckName],
    deckName,
  }),
)(AddCards)
