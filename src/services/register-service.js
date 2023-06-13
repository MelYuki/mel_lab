import axios from "axios";

export const RegisteringService = async ({ infos }) => {
    // console.log(infos)

    const request = await axios
        .post(`http://10.0.2.2:8005/register`, infos)
        .then((res) => {
            if(res.ok) {
                // console.log(res)
                res.send("REGISTRED").status(200)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
