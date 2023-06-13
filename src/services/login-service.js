import axios from "axios"

export const LoginService = async ({ credentials }) => {

    const request = await axios
        .post(`http://10.0.2.2:8005/login`, credentials)
        .then((res) => {
            if(res.ok) {
                // console.log(res)
                res.send("VERIFIED").status(200)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}