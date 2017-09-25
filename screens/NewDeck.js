// @flow
import React from 'react'
import {connect} from 'react-redux'
import {KeyboardAvoidingView, View} from 'react-native'
import {Button, Form, H1, Item, Input, Label, Text} from 'native-base'
import {NavigationActions} from 'react-navigation'
import {createDeck} from '../actions/decks'
import s from '../styles'

class NewDeck extends React.Component {
  static navigationOptions = () => ({
    headerRight: <View />,
    headerTitle: `Create a new deck`,
  })
  state: {deckName: string, submitted: boolean} = {
    deckName: '',
    submitted: false,
  }
  props: {
    deckNames: Array<string>,
    dispatch: Function,
    navigation: Object,
  }

  handleSubmit = () => {
    const {dispatch, navigation} = this.props
    const {deckName} = this.state
    if (deckName) {
      this.setState({submitted: true})
      dispatch(createDeck({deckName}))

      // Redirect to Deck view
      navigation.dispatch(
        NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({routeName: 'Decks'}),
            NavigationActions.navigate({routeName: 'Deck', params: {deckName}}),
          ],
        }),
      )
    }
  }
  render() {
    const {deckNames} = this.props
    const {deckName, submitted} = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={[s.flex1, s.ph10]}>
        <H1 style={[s.mt20, s.tc]}>What is the name of your new Deck ?</H1>
        <Form>
          <Item
            error={!submitted && deckNames.includes(deckName)}
            floatingLabel
          >
            <Label>Deck Name</Label>
            <Input
              autoFocus
              onChangeText={text => this.setState({deckName: text})}
              onSubmitEditing={this.handleSubmit}
            />
          </Item>
          <Button
            disabled={deckName === '' || deckNames.includes(deckName)}
            block
            onPress={this.handleSubmit}
            style={s.mt10}
          >
            <Text>Create a new deck</Text>
          </Button>
        </Form>
      </KeyboardAvoidingView>
    )
  }
}

export default connect(({decks}) => ({deckNames: Object.keys(decks)}))(NewDeck)
