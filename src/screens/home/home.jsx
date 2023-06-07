import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";

const Home = ({route}) => {

    const { credentials } = route.params

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                Home Page
            </Text>
            <Text> Welcome {credentials.username}</Text>
            <Text> Your password is : {credentials.password}</Text>
        </View>
    )
}

export default Home