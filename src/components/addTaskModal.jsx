import {View, Modal, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';

function AddTaskModal(props){
    const [value, onChangeText] = useState('');

    const {add} = props;
    const {visible} = props;
    const {hideModal} = props;

    return(
        <View>
            <Modal transparent={true} visible={visible}>
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Add a task'}
                        value={value}
                        onChangeText={onChangeText}
                        returnKeyType='Done'
                        onSubmitEditing={() => {
                            add(value);
                            onChangeText('');
                            hideModal();
                        }}
                    />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'lightblue',
        position: 'relative',
        top: '87%'
    },
    input: {
        fontSize: 17,
        margin: '3%'
    }
});

export default AddTaskModal;