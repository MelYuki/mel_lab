import { View, Text } from 'react-native';
import globalStyle from '../../styles/global.style';
import SignUp from '../../components/home/login-component';

const Home = ({navigation}) => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                Welcome in Gest-Events
            </Text>

            <View>
                <SignUp onCred={(username, password) => navigation.navigate("Login", username, password)}/>
            </View>
        </View>
    )
}

export default Home