import axios from "axios"

export const LoginService = async ({ credentials }) => {

    const request = await axios
        .post(`http://10.0.2.2:8005/login`, credentials)
        .then((res) => {
            if(res.status === 200) {
                console.log("You're logIn")
                return res.data
            }
        })
        .catch((error) => {
            console.log(error)
        })
        return request;
}