import {View, Modal, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';

function AddTaskModal(props){
    const [value, onChangeText] = useState('');

    const {add} = props;
    const enterEvent = (ev) => {
        console.log(ev.nativeEvent.key);
    }

    return(
        <View>
            <Modal transparent={true}>
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Add a task'}
                        value={value}
                        onChangeText={onChangeText}
                        onKeyPress={enterEvent}
                    />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'lightblue'
    },
    input: {
        fontSize: 17,
        margin: '3%'
    }
});

export default AddTaskModal;