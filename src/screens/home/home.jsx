import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";

const Home = ({route}) => {

    const { credentials, infos } = route.params

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                Home Page
            </Text>
            { credentials ? 
                (<View>
                    <Text> !You're now conneted! </Text>
                    <Text> Welcome {credentials.email}</Text>
                </View>)
                :
                (<View>
                    <Text>Return of Registering Inputs</Text>
                    <Text>{infos.firstname}</Text>
                    <Text>{infos.lastname}</Text>
                    <Text>{infos.phoneNumber}</Text>
                    <Text>{infos.email}</Text>
                    <Text>{infos.username}</Text>
                    <Text>{infos.password}</Text>
                </View>)
            }
        </View>
    )
}

export default Home