import { View, Text, StyleSheet } from "react-native";
import CheckBox from "./checkbox";
import { useState } from "react";

export default function Card(props){
    const {finished, text} = props

    const [boxState, setBoxState] = useState({finished});

    const finishTask = () => {
        setBoxState(boxState.finished ? {...boxState, finished: false} : {...boxState, finished: true});
    };

    return (
        <View style={styles.container} onStartShouldSetResponder={() => finishTask()}>
            <CheckBox state={boxState}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        padding: 15,
        width: '98%',
        borderWidth: 1,
        borderColor: "darkblue",
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 3
    },
    text: {
        fontSize: 17,
        textAlign: 'right',
        marginLeft: 25,
    }
});