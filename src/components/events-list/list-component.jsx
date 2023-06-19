import { FlatList, StyleSheet, Text, View } from "react-native";
import { EventsServiceList } from "../../services/events-service";
import { useEffect, useState } from "react";

const EventsList = () => {

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

    // Faire un onPress qui amène aux détails!
    const Item = ({ name, date }) => (
        <View style={styles.item}>
            <Text style={styles.title}> {name} - {date} </Text>
        </View>
    )

    const KeyExtractor = (item) => item.id


    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item name={item.name} date={item.date} />}
                KeyExtractor={KeyExtractor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 50,
        backgroundColor: "lightblue"
    }
})


export default EventsList