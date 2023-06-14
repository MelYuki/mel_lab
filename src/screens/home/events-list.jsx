import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";

const List = () => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                {`Gest-Events:
                List`}
            </Text>
        </View>
    )
}

export default List
