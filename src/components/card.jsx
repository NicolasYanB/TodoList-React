import { View, Text, StyleSheet } from "react-native";
import CheckBox from "./checkbox";

export default function Card(props){
    const {cardKey, text, finishCard, finished} = props

    return (
        <View style={styles.container} onStartShouldSetResponder={() => {
            finishCard(cardKey);
        }}>
            <CheckBox state={finished}/>
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