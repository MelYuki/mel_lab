import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";

const Shared = () => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                {`Gest-Events:
                Shared`}
            </Text>
        </View>
    )
}

export default Shared
