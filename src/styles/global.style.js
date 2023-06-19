import { StyleSheet } from 'react-native'

const globalStyle = StyleSheet.create({
  statusBar: {
    backgroundColor: 'lightblue',
  },
  title : {
    fontSize: 42,
    color: 'navy',
    textAlign: 'center',
    marginVertical: 20
  },
  subTitle : {
    fontSize: 26,
    color: "navy",
    textAlign: 'center',
    marginBottom: 20
  },
  screen : {
    flex: 1,
    // justifyContent: "flex-start"
  },
  login : {
    alignItems: "center",
    marginHorizontal: 30,
    backgroundColor: "lightblue",
    borderRadius: 50,
    paddingTop: 50,
    paddingBottom: 50,
    marginTop: 20
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: "center"
  },
  listTitle: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold",
  },
  item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 50,
      backgroundColor: "lightblue"
  }
})

export default globalStyle