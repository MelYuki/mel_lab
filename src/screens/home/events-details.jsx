import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";
import { useState, useEffect } from "react";
import { EventsServiceDetails } from "../../services/events-service";

const Details = ({route}) => {

    const { id } = route.params
    // console.log(id)

    const [ details, setDetails ] = useState({})
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            const getDetails = await EventsServiceDetails({id});
            setDetails(getDetails);
        }
        fetch()
    }, [])
    // console.log(details)

    if(details.length > 0) {
        const data = details.map(item => ({
            name: item.event_name,
            date: item.date_in,
            date_out: item.date_out,
            duration: item.duration,
            desc: item.desc
        }))
        setLoading(true)
        return data
    }

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                {`Gest-Events:
                Details`}
            </Text>
            { loading ? (
                <View style={globalStyle.item}>
                    <Text style={globalStyle.listTitle}>Name: {data.name}</Text>
                    <Text style={globalStyle.listTitle}>Start Date: {data.date}</Text>
                    <Text style={globalStyle.listTitle}>End Date: {data.date_out}</Text>
                    <Text style={globalStyle.listTitle}>Duration: {data.duration}</Text>
                    <Text style={globalStyle.listTitle}>Description: {data.desc}</Text>
                </View>
            ) : (
                <View>
                    <Text style={globalStyle.listTitle}> ...LOADING... </Text>
                </View>
            )}
        </View>
    )
}

export default Details
