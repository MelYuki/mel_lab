import axios from "axios";

export const RegisteringService = async ({navigation, infos}) => {

       const request = await axios
            .post(`10.0.2.2:8005/register`, infos)
            .then((res) => {
                if(res.ok) {
                    navigation.navigate("Login", alert("Registred"))
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
