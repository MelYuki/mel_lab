import axios from "axios"

export const EventsServiceList = async () => {

    const request = await axios
        .get(`http://10.0.2.2:8005/list`)
        .then((res) => {
            if(res.status === 200) {
                // console.log(res.data)
                return res.data.content
            }
        })
        .catch((error) => {
            console.log(error)
        })
        return request
}