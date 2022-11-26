import {View, Modal, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';

function AddTaskModal(props){
    const [value, onChangeText] = useState('');

    const {add} = props;

    return(
        <View>
            <Modal transparent={true}>
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Add a task'}
                        value={value}
                        onChangeText={onChangeText}
                        returnKeyType='Done'
                        onSubmitEditing={() => add(value)}
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