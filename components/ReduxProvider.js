import React from 'react'
import PropTypes from 'prop-types'
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import {setNotification} from '../actions/notification'
import reducer from '../reducers'

const middlewares = [thunk]
if (__DEV__ === true) {
  middlewares.push(
    createLogger({
      colors: {},
    }),
  )
}

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(...middlewares),
    autoRehydrate(), // https://github.com/rt2zz/redux-persist#basic-usage
  ),
)

persistStore(store, {storage: AsyncStorage}, () => {
  store.dispatch(setNotification())
})

const ReduxProvider = ({children}) => (
  <Provider store={store}>{children}</Provider>
)
ReduxProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ReduxProvider
