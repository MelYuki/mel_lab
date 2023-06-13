import axios from "axios";

export const RegisteringService = async ({infos}) => {
    // console.log(infos)
    const request = await axios
        .post(`http://10.0.2.2:8005/register`, infos)
        .then((res) => {
            if(res.status === 200) {
                console.log("REGISTRED")
                return true;
            }
        })
        .catch((error) => {
            console.log(error)
        })
        return request;
    }
