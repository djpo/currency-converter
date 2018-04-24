import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(204,229,211,0.3)',
  },
  header: {
    marginBottom: 30,
    paddingTop: 20,
    backgroundColor: 'rgb(124,165,184)',
  },
  headerText: {
    margin: 15,
    marginLeft: 20,
    fontSize: 25,
    color: 'white',
  },
  body: {},
  rowLabel: {
    marginBottom: 10,
    marginLeft: 30,
    fontSize: 12,
    color: 'rgb(39,65,94)',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  currencySelector: {
    marginRight: 30,
    width: 70,
    height: 50,
    backgroundColor: 'rgb(174,209,167)',
    borderWidth: 0,
    borderRadius: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyLabel: {
    fontSize: 18,
    color: 'white',
  },
  amountInput: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 2,
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: 'right',
  },
  amountOutputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 2,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  amountOutputText: {
    fontSize: 18,
    color: 'rgb(39,65,94)',
  },
  goButton: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginBottom: 0,
    marginRight: 30,
    width: 50,
    height: 50,
    backgroundColor: 'rgb(124,165,184)',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goButtonText: {
    fontSize: 25,
    color: 'white',
  },
});

export default AppStyles;
