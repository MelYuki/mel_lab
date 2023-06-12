import { View, TextInput, Button } from "react-native";
import globalStyle from "../../styles/global.style";
import { useState } from "react";
// import PhoneInput from "react-native-phone-input"

const Form = ({onSend}) => {

    const [ infos, setInfos ] = useState({
        email: "",
        username: "",
        password: "" 
    })

    const handleChangeForm = (name, value) => {
        // console.log(name, value)
        setInfos({
            ...infos,
            [name]: value
        })
        // console.log(infos)
    }

    const handleSubmit = () => {
        onSend(infos)
    }

    return (
        <View style={globalStyle.screen}>
            <View style={globalStyle.login}>
                <TextInput
                    style={globalStyle.input}
                    placeholder="Email"
                    inputMode="email"
                    value={infos.email}
                    onChangeText={(value) => handleChangeForm("email", value)}
                />
                <TextInput
                    style={globalStyle.input}
                    placeholder="Username"
                    inputMode="text"
                    value={infos.username}
                    onChangeText={(value) => handleChangeForm("username", value)}
                />
                <TextInput
                    style={globalStyle.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    inputMode="text"
                    value={infos.password}
                    onChangeText={(value) => handleChangeForm("password", value)}
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