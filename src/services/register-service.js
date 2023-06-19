import axios from "axios";
import { Alert } from "react-native";

export const RegisteringService = async ({infos}) => {
    // console.log(infos)
    const request = await axios
        .post(`http://10.0.2.2:8005/register`, infos)
        .then((res) => {
            if(res.status === 200) {
                Alert.alert("Registering Successful")
                return true;
            }
        })
        .catch((error) => {
            console.log(error)
        })
        return request;
    }
