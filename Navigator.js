// @flow
import {StackNavigator} from 'react-navigation'
import AddCards from './screens/AddCards'
import Deck from './screens/Deck'
import Decks from './screens/Decks'
import NewDeck from './screens/NewDeck'
import Quiz from './screens/Quiz'
import s from './styles'

const Navigator = StackNavigator(
  {
    Decks: {screen: Decks},
    Deck: {screen: Deck},
    AddCards: {screen: AddCards},
    NewDeck: {screen: NewDeck},
    Quiz: {screen: Quiz},
  },
  {
    // headerMode: 'none',
    navigationOptions: {
      // headerRight: <View />,
      headerStyle: s.bgBlue,
      headerTintColor: 'white',
      headerTitle: 'UdaciCards',
      headerTitleStyle: [s.alignSelfCenter],
    },
  },
)

export default Navigator
