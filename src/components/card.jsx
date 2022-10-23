import { View, Text, StyleSheet } from "react-native";

export default function Card(props){
    return (
        <View style={styles.container}>
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
        borderRadius: 5
    },
    text: {
        fontSize: 17,
        textAlign: 'right',
        paddingRight: 25
    }
});