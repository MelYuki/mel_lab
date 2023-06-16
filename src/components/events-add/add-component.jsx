import { View, TextInput, Button, SafeAreaView } from "react-native";
import globalStyle from "../../styles/global.style";
import { useState } from "react";
import { EventsServiceAdd } from "../../services/events-service";

const EventsAdd = ({onSend}) => {

    const [ infos, setInfos ] = useState({
        name: "",
        day_in: "",
        day_out: "",
        duration: "",
        desc: ""
    })

    const handleChangeForm = (name, value) => {
        setInfos({
            ...infos,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        const add = await EventsServiceAdd({infos})
        if(add) {
            onSend()
        }
    }

    return (
        <SafeAreaView>
            <View style={globalStyle.login}>
                <TextInput
                    style={globalStyle.input}
                    placeholder="Event Name"
                    inputMode="text"
                    value={infos.name}
                    onChangeText={(value) => handleChangeForm("name", value)}
                />
                <TextInput
                    style={globalStyle.input}
                    placeholder="Start Date"
                    inputMode="text"
                    value={infos.day_in}
                    onChangeText={(value) => handleChangeForm("day_in", value)}
                />
                <TextInput
                    style={globalStyle.input}
                    placeholder="End Date"
                    inputMode="text"
                    value={infos.day_out}
                    onChangeText={(value) => handleChangeForm("day_out", value)}
                />
                <TextInput
                    style={globalStyle.input}
                    placeholder="Event Duration"
                    inputMode="text"
                    value={infos.duration}
                    onChangeText={(value) => handleChangeForm("duration", value)}
                />
                <TextInput
                    style={globalStyle.input}
                    placeholder="Description"
                    inputMode="text"
                    value={infos.desc}
                    onChangeText={(value) => handleChangeForm("desc", value)}
                />
                <Button
                    title="Add"
                    onPress={handleSubmit}
                />
            </View>
        </SafeAreaView>
    )
}

export default EventsAdd