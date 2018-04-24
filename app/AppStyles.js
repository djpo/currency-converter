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
    marginBottom: 5,
    marginLeft: 20,
    fontSize: 12,
    color: 'rgb(39,65,94)',
  },
  row: {
    marginBottom: 30,
    flexDirection: 'row',
  },
  currencySelector: {
    marginLeft: 20,
    marginRight: 30,
    backgroundColor: 'rgb(174,209,167)',
    padding: 10,
  },
  currencyLabel: {
    fontSize: 18,
    color: 'white',
  },
  amountInput: {
    width: 120,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgb(39,65,94)',
    fontSize: 18,
    padding: 10,
    textAlign: 'right',
  },
  goButton: {
    marginLeft: 30,
    width: 40,
    height: 40,
    backgroundColor: 'rgb(124,165,184)',
    borderWidth: 1,
    borderColor: 'rgb(39,65,94)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goButtonText: {
    fontSize: 25,
    color: 'white',
  },
  amountOutput: {
    width: 120,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'right',
    fontSize: 18,
    color: 'rgb(39,65,94)',
  },
});

export default AppStyles;
