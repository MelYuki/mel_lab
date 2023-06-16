import { FlatList, StyleSheet, Text, View } from "react-native";
import { EventsServiceList } from "../../services/events-service";
import { useEffect, useState } from "react";

const EventsList = () => {

    const [ event, setEvent ] = useState([])

    useEffect(() => {
        EventsServiceList()
    }, [])

    // const datas = {
    //     name: content.event_name,
    //     day: content.date_in
    // }

    // const Item = ({name}) => (
    //     <View style={styles.item}>
    //         <Text style={styles.title}>{name}</Text>
    //     </View>
    // )

    // const KeyExtractor = (item) => item.id + item

    return (
        <View style={styles.container}>
            <View>
                <Text>TEST</Text>
                {/* <FlatList
                data={datas}
                renderItem={({item}) => <Item title={item.name}/>}
                KeyExtractor={KeyExtractor}
                /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    }
})


export default EventsList