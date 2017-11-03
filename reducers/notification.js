const notification = (state = {}, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION_COMPLETE':
      return {
        ...state,
        isSet: true,
      }
    case 'CLEAR_NOTIFICATIONS_COMPLETE':
      return {
        ...state,
        isSet: false,
      }
    default:
      return state
  }
}

export default notification
