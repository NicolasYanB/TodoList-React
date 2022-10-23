import { View, Text, StyleSheet } from "react-native";
import Title from "../components/title";
import Card from "../components/card";
import AddTaskButton from "../components/addTaskButton";

export default function Home(){
    return (
        <View>
            <Title>ToDo List</Title>
            <View style={styles.card}>
                <Card>Resolver exercícios de matemática</Card>
            </View>
            <AddTaskButton/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 50,
        alignItems: 'center'
    }
});