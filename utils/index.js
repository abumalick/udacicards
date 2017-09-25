import {AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo'

export const cardNumberText = (num: number) => {
  switch (num) {
    case 0:
      return 'No card in this deck'
    case 1:
      return '1 card'
    default:
      return `${num} cards`
  }
}

export default cardNumberText

// Notification code copied from UdaciFitness (Tyler McGinnis)

const NOTIFICATION_KEY = 'udacicards:notifications'

export const clearLocalNotification = () =>
  AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync,
  )

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

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            const tomorrow = new Date()
            tomorrow.setDate(new Date().getDate() + 1)
            tomorrow.setHours(20)
            tomorrow.setMinutes(0)

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            })
            // console.log('Notification set')
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}
