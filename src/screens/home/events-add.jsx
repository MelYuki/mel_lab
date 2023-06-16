import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";
import EventsAdd from "../../components/events-add/add-component";

const Add = ({navigation}) => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                {`Gest-Events:
                Add`}
            </Text>

            <View>
                <EventsAdd onSend={(infos) => navigation.navigate("List", {infos})}/>
            </View>
        </View>
    )
}

export default Add
