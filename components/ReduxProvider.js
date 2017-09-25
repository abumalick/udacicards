import React from 'react'
import PropTypes from 'prop-types'
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import reducer from '../reducers'

const middlewares = []
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

persistStore(store, {storage: AsyncStorage})

const ReduxProvider = ({children}) => (
  <Provider store={store}>{children}</Provider>
)
ReduxProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ReduxProvider
