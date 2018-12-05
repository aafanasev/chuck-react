import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default class Button extends React.PureComponent {

    _onPress = () => {
        this.props.onPress();
    }

    render() {
        let styles = [STYLES.button];
        let size = 40;

        if (this.props.main) {
            styles.push(STYLES.buttonMain);
            size = 50;
        }

        return (
            <TouchableOpacity
                style={styles}
                onPress={this._onPress}>
                <Icon
                    name={this.props.icon}
                    size={size}
                    color="#fff"
                />
            </TouchableOpacity>
        );
    }

}

const STYLES = StyleSheet.create({
    button: {
        aspectRatio: 1,
        padding: 20,
        borderRadius: 40,
        justifyContent: 'center',
        backgroundColor: '#20232c',
        elevation: 10,
    },
    buttonMain: {
        padding: 30,
        borderRadius: 60,
    },
});