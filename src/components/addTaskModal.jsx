import {View, Modal, TextInput, StyleSheet} from 'react-native';

function AddTaskModal(){
    return(
        <View>
            <Modal transparent={true}>
                <View style={styles.modalView}>
                    <TextInput style={styles.input} placeholder={'Add a task'}/>
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