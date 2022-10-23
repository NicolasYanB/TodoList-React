import { View, StyleSheet } from "react-native";

export default function CheckBox(){
    return (
        <View style={styles.box}></View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'azure', //darkslategray
        width: '8%',
        padding: 12,
        borderRadius: 22,
        borderWidth: 3
    }
});