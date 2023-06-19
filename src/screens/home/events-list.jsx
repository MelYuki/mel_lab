import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";
import EventsList from "../../components/events-list/list-component";

const List = () => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                {`Gest-Events:
                List`}
            </Text>
            <EventsList/>
        </View>
    )
}

export default List
