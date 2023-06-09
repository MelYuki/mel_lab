import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";
import Form from "../../components/registering/form-component";

const Registering = ({navigation}) => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
            {`Registering
            Formular :`}
            </Text>

            <Form onSend={(infos) => navigation.navigate("Home", {infos})} />
        </View>
    )
}

export default Registering