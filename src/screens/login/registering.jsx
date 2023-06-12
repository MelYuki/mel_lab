import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";
import Form from "../../components/registering/form-component";
import RegisteringService from "../../services/register-service";

const Registering = () => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
            {`Registering
            Formular :`}
            </Text>

            <Form onSend={(infos) => RegisteringService({infos})} />

        </View>
    )
}

export default Registering