import { View, Switch,  StyleSheet } from "react-native";

function FilterSwitch(){
    return (
        <View style={styles.switch}>
            <Switch/>
        </View>
    );
}

const styles = StyleSheet.create({
    switch: {
        alignItems: 'flex-start'
    }
});

export default FilterSwitch