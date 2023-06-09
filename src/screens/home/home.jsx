import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";

const Home = ({route}) => {

    const { credentials } = route.params

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                Home Page
            </Text>
            <View>
                <Text> Return of Login Inputs </Text>
                <Text> Welcome {credentials.username}</Text>
                <Text> Your password is : {credentials.password}</Text>
            </View>
            <View>
                <Text>Return of Registering Inputs</Text>
            </View>
        </View>
    )
}

export default Home