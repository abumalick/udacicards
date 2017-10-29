import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  f30: {
    fontSize: 30,
  },
  f40: {
    fontSize: 40,
  },
  fw6: {
    fontWeight: '600',
  },
  w100: {
    width: '100%',
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  ml10: {
    marginLeft: 10,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  pa10: {
    padding: 10,
  },
  pa20: {
    padding: 20,
  },
  pb10: {
    paddingBottom: 10,
  },
  ph10: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  pv10: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  tc: {
    textAlign: 'center',
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  itemsStretch: {
    alignItems: 'stretch',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },

  // colors
  lightGray: {color: '#999'},
  gray: {color: '#333'},
  white: {color: 'white'},
  bgBlue: {backgroundColor: '#3d51b4'},

  card: {
    marginVertical: 5,
    marginHorizontal: 2,
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ccc',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
})

export default styles
