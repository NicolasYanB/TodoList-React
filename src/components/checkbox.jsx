import { View, StyleSheet } from "react-native";

export default function CheckBox(props){
    const {state} = props;
    const style = {
        backgroundColor: state ? 'midnightblue' : 'azure'
    };

    return (
        <View style={[styles.box, style]}></View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: '8%',
        padding: 12,
        borderRadius: 22,
        borderWidth: 3
    }
});