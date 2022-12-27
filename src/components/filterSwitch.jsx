import { useState } from "react";
import { View, Switch,  StyleSheet } from "react-native";

function FilterSwitch(props){
    const [value, setValue] = useState(false);
    const {onChange} = props;

    return (
        <View>
            <Switch style={styles.switch} value={value} onValueChange={(v) => {setValue(v); onChange(v)}}/>
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