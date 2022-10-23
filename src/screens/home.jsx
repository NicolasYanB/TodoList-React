import { View, Text, StyleSheet } from "react-native";
import Title from "../components/title";
import Card from "../components/card";

export default function Home(){
    return (
        <View>
            <Title>ToDo List</Title>
            <View style={styles.card}>
                <Card>Resolver exercicios de matemática</Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 50,
        alignItems: 'center'
    }
});