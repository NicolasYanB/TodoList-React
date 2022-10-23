import { View, Text, StyleSheet } from "react-native";

export default function Title(props){
    return (
        <View>
            <Text style={styles.title}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginTop: '10%',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'darkblue'
    }
});