import { StyleSheet, Dimensions } from 'react-native';

export const PRIMARY_COLOR = '#7444C0';
export const SECONDARY_COLOR = '#5636B8';
export const WHITE = '#FFFFFF';
export const GRAY = '#757E90';
export const DARK_GRAY = '#363636';
export const BLACK = '#000000';

export const ONLINE_STATUS = '#46A575';
export const OFFLINE_STATUS = '#D04949';

export const STAR_ACTIONS = '#FFA200';
export const LIKE_ACTIONS = '#B644B2';
export const DISLIKE_ACTIONS = '#363636';
export const FLASH_ACTIONS = '#5028D7';
export const THEME_PURPLE = '#5e17eb';

export const DIMENSION_WIDTH = Dimensions.get('window').width;
export const DIMENSION_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  // COMPONENT - CARD ITEM
  containerCardItem: {
    backgroundColor: THEME_PURPLE,
    borderRadius: 34,
    alignItems: 'center',
    marginVertical: 5,
    elevation: 0,
    width: DIMENSION_WIDTH - 16,
    height: DIMENSION_HEIGHT - 10 - 16 - 180,
  },
  containerCardInfo: {
    height: DIMENSION_HEIGHT - 10 - 16 - 180 - 280,
    width: DIMENSION_WIDTH - 16 - 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
    marginTop: -30,
    paddingTop: 20,
    padding: 20,
    zIndex: 0,
    borderRadius: 20,
  },
  containerNameSocial: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  containerHomeSocial: {
    marginHorizontal: 4,
  },
  matchesCardItem: {
    marginTop: -35,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  matchesTextCardItem: {
    color: WHITE,
  },
  descriptionCardItem: {
    marginVertical: 8,
  },
  status: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: GRAY,
    fontSize: 12,
  },
  online: {
    width: 6,
    height: 6,
    backgroundColor: ONLINE_STATUS,
    borderRadius: 3,
    marginRight: 4,
  },
  offline: {
    width: 6,
    height: 6,
    backgroundColor: OFFLINE_STATUS,
    borderRadius: 3,
    marginRight: 4,
  },
  actionsCardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  waveButton: {
    borderRadius: 90,
    backgroundColor: '#79c5d1',
    elevation: 1,
    padding: 20,
  },
  miniButton: {
    borderRadius: 90,
    backgroundColor: DARK_GRAY,
    marginHorizontal: 20,
    padding: 5,
  },

  // COMPONENT - CITY
  city: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 100,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  cityText: {
    color: DARK_GRAY,
    fontSize: 13,
    textAlign: 'center',
  },

  // COMPONENT - FILTERS
  filters: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 90,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  filtersText: {
    color: DARK_GRAY,
    fontSize: 13,
    textAlign: 'center',
  },

  // COMPONENT - MESSAGE
  containerMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: DIMENSION_WIDTH - 100,
  },
  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginRight: 20,
    marginVertical: 15,
  },
  message: {
    color: GRAY,
    fontSize: 12,
    paddingTop: 5,
  },

  // COMPONENT - PROFILE ITEM
  containerProfileItem: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    paddingBottom: 25,
    margin: 20,
    borderRadius: 8,
    marginTop: -65,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  matchesProfileItem: {
    width: 135,
    marginTop: -15,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
  },
  matchesTextProfileItem: {
    color: WHITE,
    textAlign: 'center',
  },
  name: {
    paddingTop: 25,
    paddingBottom: 5,
    color: DARK_GRAY,
    fontSize: 15,
    textAlign: 'center',
  },
  descriptionProfileItem: {
    color: GRAY,
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 13,
  },
  info: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconProfile: {
    fontSize: 12,
    color: DARK_GRAY,
    paddingHorizontal: 10,
  },
  infoContent: {
    color: GRAY,
    fontSize: 13,
  },

  // CONTAINER - GENERAL
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { paddingBottom: 10, fontSize: 22, color: DARK_GRAY },

  // CONTAINER - HOME
  containerHome: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: DIMENSION_HEIGHT,
  },

  // CONTAINER - MATCHES
  containerMatches: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },

  // CONTAINER - MESSAGES
  containerMessages: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },

  // CONTAINER - PROFILE
  containerProfile: { marginHorizontal: 0 },
  photo: {
    width: DIMENSION_WIDTH,
    height: 450,
  },
  topIconLeft: {
    paddingLeft: 20,
  },
  topIconRight: {
    paddingRight: 20,
  },
  actionsProfile: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 15,
    color: WHITE,
    paddingLeft: 5,
  },
  circledButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  roundedButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 20,
  },

  // MENU
  tabButtonText: {
    textTransform: 'uppercase',
  },
  iconMenu: {
    alignItems: 'center',
  },
});
