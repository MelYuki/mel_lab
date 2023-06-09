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

    const handleChangeForm = (input) => {

        const { name, value } = input.target
        setInfos({
            ...infos,
            [name]: value
        })
        console.log(input)
        console.log(infos)
    }

    const handleSubmit = () => {
        onSend(infos)
    }

    return (
        <View style={globalStyle.screen}>
            <View style={globalStyle.login}>
                <TextInput
                    style={globalStyle.input}
                    placeholder="Firstname"
                    inputMode="text"
                    name="firstname"
                    value={infos.firstname}
                    onChangeText={handleChangeForm}
                />
                <TextInput
                    style={globalStyle.input}
                    placeholder="Lastname"
                    inputMode="text"
                    name="lastname"
                    value={infos.lastname}
                    onChangeText={handleChangeForm}
                />
                <TextInput
                    style={globalStyle.input}
                    placeholder="Phone number"
                    inputMode="tel"
                    name="phoneNumber"
                    value={infos.phoneNumber}
                    onChangeText={handleChangeForm}
                />
                <TextInput
                    style={globalStyle.input}
                    placeholder="Email"
                    inputMode="email"
                    name="email"
                    value={infos.email}
                    onChangeText={handleChangeForm}
                />
                <TextInput
                    style={globalStyle.input}
                    placeholder="Username"
                    inputMode="text"
                    name="username"
                    value={infos.username}
                    onChangeText={handleChangeForm}
                />
                <TextInput
                    style={globalStyle.input}
                    placeholder="Password"
                    inputMode="text"
                    name="password"
                    value={infos.password}
                    onChangeText={handleChangeForm}
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