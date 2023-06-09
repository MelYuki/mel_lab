import { View, TextInput, Button } from "react-native";
import globalStyle from "../../styles/global.style";
import { useState } from "react";
// import PhoneInput from "react-native-phone-input"

const Form = ({onSend}) => {

    const [ infos, setInfos ] = useState({
        firstname: "",
        lastname: "",
        phoneNumber: null,
        email: "",
        username: "",
        password: "" 
    })

    // Utiliser le même handle... pour tous les inputs!

    const handleSubmit = () => {
        onSend(infos)
    }

    return (
        <View style={globalStyle.screen}>
            <View style={globalStyle.login}>
                <TextInput
                    placeholder="Firstname"
                    inputMode="text"
                    value={infos.firstname}
                    // onChangeText={}
                />
                <TextInput
                    placeholder="Lastname"
                    inputMode="text"
                    value={infos.lastname}
                    // onChangeText={}
                />
                <TextInput
                    placeholder="Phone number"
                    inputMode="tel"
                    value={infos.phoneNumber}
                    // onChangeText={}
                />
                <TextInput
                    placeholder="Email"
                    inputMode="email"
                    value={infos.email}
                    // onChangeText={}
                />
                <TextInput
                    placeholder="Username"
                    inputMode="text"
                    value={infos.username}
                    // onChangeText={}
                />
                <TextInput
                    placeholder="Password"
                    inputMode="text"
                    value={infos.password}
                    // onChangeText={}
                />
                <Button
                    title="send"
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}

export default Form