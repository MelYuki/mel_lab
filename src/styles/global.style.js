import { StyleSheet } from 'react-native'

const globalStyle = StyleSheet.create({
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
  }
})

export default globalStyle