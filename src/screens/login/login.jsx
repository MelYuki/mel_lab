import { View, Text } from 'react-native';
import globalStyle from '../../styles/global.style';
import SignIn from '../../components/login/signIn-component';
import SignUp from '../../components/login/signUp-component';

const Login = ({navigation}, name) => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                Welcome in Gest-Events
            </Text>

            <View>
                { name ? (
                    <SignIn onLog={(name) => navigation.navigate("Home", {name})}/>
                ) : (
                    <SignIn onLog={(login) => navigation.navigate("Login", {login})}/>
                )}
            </View>

            <View>
                <SignUp onReach={() => navigation.navigate("Registering")}/>
            </View>
        </View>
    )
}

export default Login
