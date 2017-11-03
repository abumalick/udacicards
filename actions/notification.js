import {Notifications, Permissions} from 'expo'

async function clearNotifications({callback, dispatch}) {
  dispatch({type: 'CLEAR_NOTIFICATIONS_START'})
  await Notifications.cancelAllScheduledNotificationsAsync()
  dispatch({type: 'CLEAR_NOTIFICATIONS_COMPLETE'})
  if (typeof callback === 'function') callback()
}

export const createNotification = () => ({
  title: 'Take a quiz!',
  body: "👋 don't forget to take a card quiz today!",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
})

export const setNotification = ({force} = {}) => (dispatch, getState) => {
  if (force || !getState().notification.isSet) {
    dispatch({
      type: 'SET_NOTIFICATION_START',
    })
    Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
      dispatch({type: 'SET_NOTIFICATION_ASKED_PERMISSION', status})
      if (status === 'granted') {
        clearNotifications({
          callback: () => {
            const tomorrow = new Date()
            tomorrow.setDate(new Date().getDate() + 1)
            tomorrow.setHours(20)
            tomorrow.setMinutes(0)

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            }).then(() => {
              dispatch({type: 'SET_NOTIFICATION_COMPLETE'})
            })
          },
          dispatch,
        })
      }
    })
  } else {
    dispatch({
      type: 'SET_NOTIFICATION_NOT NEEDED',
    })
  }
}
