import { View, Text, Button } from "react-native"
import globalStyle from "../../styles/global.style"

const signUp = ({onReach}) => {

    const handleSignUp = () => {
        onReach()
    }

    return (
        <View style={globalStyle.login}>
            <Text style={globalStyle.subTitle}>
                Get registered?
            </Text>
            <Button
                title="SignUp"
                onPress={handleSignUp} />
        </View>
    )
}

export default signUp