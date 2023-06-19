import axios from "axios"
import { Alert } from "react-native"

export const LoginService = async ({ credentials }) => {

    const request = await axios
        .post(`http://10.0.2.2:8005/login`, credentials)
        .then((res) => {
            if(res.status === 200) {
                Alert.alert(`Welcome in ${res.data}`)
                return res.data
            }
        })
        .catch((error) => {
            console.log(error)
        })
        return request;
}