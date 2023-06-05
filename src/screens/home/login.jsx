import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";

const Login = ({route}) => {

    const { username, password } = route.params

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                Login Page
            </Text>
            <Text> Welcome {username}</Text>
            <Text> Your password is : {password}</Text>
        </View>
    )
}

export default Login