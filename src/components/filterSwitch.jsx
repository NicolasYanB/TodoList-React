import { useState } from "react";
import { View, Switch,  StyleSheet } from "react-native";

function FilterSwitch(){
    const [value, setValue] = useState(false);

    return (
        <View>
            <Switch style={styles.switch} value={value} onValueChange={(v) => setValue(v)}/>
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