import { View, Text, Button, TextInput } from "react-native"
import { useState } from "react"

const SignUp = ({onCred}) => {

    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")

    const handleSubmit = () => {
        onCred({username, password})
    }

    return (
        <View>
            <Text>Sign Up</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername} />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword} />
            <Button
                title="Sign Up"
                onPress={handleSubmit} />
        </View>
    )
}

export default SignUp