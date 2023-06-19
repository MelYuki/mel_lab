import { Text, View } from "react-native";
import globalStyle from "../../styles/global.style";
import { useState, useEffect } from "react";
import { EventsServiceDetails } from "../../services/events-service";

const Details = ({route}) => {

    const { id } = route.params
    // console.log(id)

    const [ details, setDetails ] = useState([])
    // const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            const getDetails = await EventsServiceDetails({id})
            setDetails(getDetails)
        }
        fetch()
    }, [])
    // console.log(details)

    // const data = details.map((item) => (
    //     [{
    //         info: item.event_name,
    //         label: 'Name: '
    //     },
    //     {
    //         info: item.date_in,
    //         label: 'Start Date: '
    //     },
    //     {
    //         info: item.date_out,
    //         label: 'End Date: '
    //     },
    //     {
    //         info: item.duration,
    //         label: 'Duration: '
    //     },
    //     {
    //         info: item.description,
    //         label: 'Description: '
    //     }]
    // ))
    // console.log('BIJOUR', '-------------', details)
    // console.log('COUCOU', '-------------', data)
    // console.log('HIBOU', '-------------', details.map(i => i.event_name))

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                {`Gest-Events:
                Details`}
            </Text>

            { details && details.map((item) => (
                <View key={id} style={globalStyle.item}>
                    <Text style={globalStyle.listTitle}>Name: {item.event_name}</Text>
                    <Text style={globalStyle.listTitle}>Start Date: {item.date_in}</Text>
                    <Text style={globalStyle.listTitle}>End Date: {item.date_out}</Text>
                    <Text style={globalStyle.listTitle}>Duration: {item.duration}</Text>
                    <Text style={globalStyle.listTitle}>Description: {item.description}</Text>
                </View>
            ))}


                {/* {data && data.map((items) => (
                    items.map(event => (
                        <Text key={id+1} style={globalStyle.listTitle}>{event.label}
                            <Text>{event.info}</Text>
                        </Text>
                    ))
                ))}
                {console.log(data)} */}
                {/* <Text style={globalStyle.listTitle}>Name: {data.name}</Text>
                <Text style={globalStyle.listTitle}>Start Date: {data.date}</Text>
                <Text style={globalStyle.listTitle}>End Date: {data.date_out}</Text>
                <Text style={globalStyle.listTitle}>Duration: {data.duration}</Text>
                <Text style={globalStyle.listTitle}>Description: {data.desc}</Text> */}
        </View>
    )
}

export default Details
