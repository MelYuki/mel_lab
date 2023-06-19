import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";
import EventsList from "../../components/events-list/list-component";

const List = ({navigation}) => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                {`Gest-Events:
                List`}
            </Text>
            <EventsList onDetails={(id) => navigation.navigate("Details", {id})}/>
        </View>
    )
}

export default List
