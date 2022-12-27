import { View, StyleSheet } from "react-native";
import { useState } from "react";
import Title from "../components/title";
import Card from "../components/card";
import AddTaskButton from "../components/addTaskButton";
import AddTaskModal from "../components/addTaskModal";
import FilterSwitch from "../components/filterSwitch";

const allCards = [];

export default function Home(){
    const [cards, setCards] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const addCard = (text) => {
        const newCards = [...cards];
        const newCard = {key: cards.length+1, text, finished: false};
        newCards.push(newCard);
        allCards.push(newCard);
        setCards(newCards);
    };

    const filterCards = (value) => {
        if (value) {
            const unfinishedCards = allCards.filter((card) => !(card.finished));
            setCards(unfinishedCards);
            return;
        }
        setCards([...allCards]);
    }

    const finishCard = (key) => {
        const newCards = cards.map((card) => (card.key === key ? {...card, finished: !card.finished} : card));
        setCards(newCards);
    }

    return (
        <View>
            <Title>ToDo List</Title>
            <View style={styles.filterView}>
                <FilterSwitch onChange={filterCards}/>
            </View>
            <View style={styles.card}>
                {cards.map((card) => (<Card key={card.key} cardKey={card.key} text={card.text} finishCard={finishCard} finished={card.finished}/>))}
            </View>
            <AddTaskButton toggleModal={() => setIsVisible(true)}/>
            <AddTaskModal add={addCard} visible={isVisible} hideModal={() => setIsVisible(false)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 50,
        alignItems: 'center'
    },
    filterView: {
        flexDirection: 'row-reverse',
        marginLeft: 20
    }
});