import { View, Text } from 'react-native';
import globalStyle from '../../styles/global.style';
import SignIn from '../../components/login/signIn-component';
import SignUp from '../../components/login/signUp-component';

const Login = ({navigation}) => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                Welcome in Gest-Events
            </Text>

            <View>
                <SignIn onCred={(login) => navigation.navigate("Home", {login})}/>
            </View>

            <View>
                <SignUp onReach={() => navigation.navigate("Registering")}/>
            </View>
        </View>
    )
}

export default Login
