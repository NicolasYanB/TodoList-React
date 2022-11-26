import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function AddTaskButton(props){
    return (
        <View style={styles.button}>
            <TouchableOpacity>
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
        top: 760,
        right: 20
    }
});