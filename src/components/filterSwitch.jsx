import { View, Switch,  StyleSheet } from "react-native";

function FilterSwitch(){
    return (
        <View>
            <Switch style={styles.switch}/>
        </View>
    );
}

const switchSize = 1.6;

const styles = StyleSheet.create({
    switch: {
        transform: [
            {scaleX: switchSize},
            {scaleY: switchSize}
        ]
    }
});

export default FilterSwitch