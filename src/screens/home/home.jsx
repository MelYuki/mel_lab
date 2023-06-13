import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";

const Home = ({route}) => {

    const { login } = route.params

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                Home Page
            </Text>
                <View>
                    <Text> !You're now connected! </Text>
                    <Text> Welcome {login.username}</Text>
                </View>
        </View>
    )
}

export default Home