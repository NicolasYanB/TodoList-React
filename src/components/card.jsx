import { View, Text, StyleSheet } from "react-native";
import CheckBox from "./checkbox";
import { useState } from "react";

export default function Card(props){
    const [boxState, setBoxState] = useState({finished: false});

    const finishTask = () => {
        setBoxState(boxState.finished ? {...boxState, finished: false} : {...boxState, finished: true});
    };

    return (
        <View style={styles.container}>
            <CheckBox state={boxState} toggle={finishTask}/>
            <Text style={styles.text}>{props.children}</Text>
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
        flexDirection: 'row'
    },
    text: {
        fontSize: 17,
        textAlign: 'right',
        marginLeft: 25,
    }
});