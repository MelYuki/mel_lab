import { View, Text, Button, TextInput } from "react-native"
import { useState } from "react"
import globalStyle from "../../styles/global.style"
import { LoginService } from "../../services/login-service"

const SignIn = ({onLog}) => {

    const [ credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleUserChange = (text) => {
        setCredentials({...credentials, email: text})
        // console.log(text)
        // console.log(credentials)
    }
    const handlePwdChange = (text) => {
        setCredentials({...credentials, password: text})
        // console.log(text)
        // console.log(credentials)
    }

    const handleSubmit = async () => {
        const login = await LoginService({credentials})
        console.log(login)
        // console.log(login.user)
        // console.log(login.user.username)
        if(login != "") {
            const name =  login.length != 0 ? login.user.username : null
            // console.log(name)
    
            if(name != null) { // => OK
                console.log(name)
                onLog({name})
            }
        }
        else {
            console.log(login)
            onLog({login})
        }
    }

    return (
        <View style={globalStyle.login}>
            <Text style={globalStyle.subTitle}>SignIn</Text>
            <View>
                <TextInput
                    placeholder="Email"
                    inputMode="text"
                    value={credentials.email}
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
                {/* <Text> {credentials.email} {credentials.password} </Text> */}
            </View>
        </View>
    )
}

export default SignIn