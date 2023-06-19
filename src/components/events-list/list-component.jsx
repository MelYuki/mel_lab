import { FlatList, Text, View } from "react-native";
import { EventsServiceList } from "../../services/events-service";
import { useEffect, useState } from "react";
import globalStyle from "../../styles/global.style";

const EventsList = ({onDetails}) => {

    const [event, setEvent] = useState([])

    useEffect(() => {

        const fetch = async () => {
            const getEvents = await EventsServiceList();
            setEvent(getEvents);
        }
        fetch()
    }, [])

    // if (event.length > 0) {
    //     console.log(event.map((item) => item.date_in))
    // }

    const data = event.map(item => ({
        name: item.event_name,
        date: item.date_in,
        id: item.id
    }))
    //console.log(data)

    const handleDetails = ({id}) => {
        // const id = data.id
        // console.log(data);
        // console.log(item.id); 
            // => Là j'ai compris qu'il fallait utiliser l'id dans Item
        // console.log(id);
        onDetails(id)
    }

    // Faire un onPress qui amène aux détails!
    const Item = ({ name, date, id}) => (
        <View style={globalStyle.item}>
            <Text
                style={globalStyle.listTitle}
                onPress={() => handleDetails({id})}>
                    {name} - {date}
            </Text>
        </View>
    )

    const KeyExtractor = (item) => item.id

    return (
        <View style={globalStyle.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item name={item.name} date={item.date} id={item.id}/>}
                KeyExtractor={KeyExtractor}
            />
        </View>
    )
}

export default EventsList