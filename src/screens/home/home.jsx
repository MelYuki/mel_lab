import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";

const Home = ({route}) => {

    const { name } = route.params
    // console.log(login) => return new objet with objet user inside
    // console.log(name)

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                Home Page
            </Text>
                <View>
                    <Text> !You're now connected! </Text>
                    <Text> Welcome {name}</Text>
                </View>
        </View>
    )
}

export default Home