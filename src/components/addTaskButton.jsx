import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function AddTaskButton(){
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Image source={require('../../assets/add.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'midnightblue',
        alignItems: 'center',
        width: '12%',
        borderRadius: 25,
        position: 'absolute',
        top: 550,
        right: 20
    }
});