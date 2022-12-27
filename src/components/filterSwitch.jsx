import { View, Switch,  StyleSheet } from "react-native";

function FilterSwitch(props){
    const {onChange, filterOn} = props;

    return (
        <View>
            <Switch style={styles.switch} value={filterOn} onValueChange={(v) => {onChange(v)}}/>
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