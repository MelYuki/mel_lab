import { View, Text, Button, TextInput } from "react-native"
import { useState } from "react"
import globalStyle from "../../styles/global.style"

const SignIn = ({onCred}) => {

    const [ credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleUserChange = (text) => {
        setCredentials({...credentials, username: text})
        // console.log(text)
        // console.log(credentials)
    }
    const handlePwdChange = (text) => {
        setCredentials({...credentials, password: text})
        // console.log(text)
        // console.log(credentials)
    }

    const handleSubmit = () => {
        onCred(credentials)
    }

    return (
        <View style={globalStyle.login}>
            <Text style={globalStyle.subTitle}>SignIn</Text>
            <View>
                <TextInput
                    placeholder="Username"
                    inputMode="text"
                    value={credentials.username}
                    onChangeText={handleUserChange} />
                <TextInput
                    placeholder="Password"
                    inputMode="text"
                    secureTextEntry={true}
                    value={credentials.password}
                    onChangeText={handlePwdChange} />
                <Button
                    title="submit"
                    onPress={handleSubmit} />
                {/* <Text> {credentials.username} {credentials.password} </Text> */}
            </View>
        </View>
    )
}

export default SignIn