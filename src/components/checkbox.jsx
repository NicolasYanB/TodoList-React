import { View, StyleSheet } from "react-native";

export default function CheckBox(props){
    const {finished} = props.state;
    const style = {
        backgroundColor: finished ? 'midnightblue' : 'azure'
    };

    return (
        <View style={[styles.box, style]}></View>
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