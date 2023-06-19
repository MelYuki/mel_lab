import axios from "axios"

export const EventsServiceDetails = async ({id}) => {

    const request = await axios
        .get(`http://10.0.2.2:8005/details/${id}`)
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

export const EventsServiceAdd = async ({infos}) => {

    const request = await axios
        .post(`http://10.0.2.2:8005/add`, infos)
        .then((res) => {
            if(res.status === 200) {
                console.log("ADD")
                return true
            }
        })
        .catch((error) => {
            console.log(error)
        })
        return request
}