import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Title from "../components/title";
import Card from "../components/card";
import AddTaskButton from "../components/addTaskButton";
import AddTaskModal from "../components/addTaskModal";

export default function Home(){
    const [cards, setCards] = useState([]);

    const addCard = (text) => {
        const newCards = [...cards];
        newCards.push({key: cards.length+1, text: 'teste', finished: false});
        setCards(newCards);
    };

    return (
        <View>
            <Title>ToDo List</Title>
            <View style={styles.card}>
                {cards.map((card) => (<Card key={card.key} text={card.text} finished={card.finished}/>))}
            </View>
            <AddTaskButton/>
            <AddTaskModal add={addCard}/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 50,
        alignItems: 'center'
    }
});