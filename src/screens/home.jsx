import { View, Text, StyleSheet } from "react-native";
import Title from "../components/title";

export default function Home(){
    return (
        <View>
            <Title>ToDo List</Title>
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