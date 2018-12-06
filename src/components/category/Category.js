import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default class Category extends React.PureComponent {

    _onPress = () => {
        this.props.onPress(this.props.id);
    }

    render() {
        let styles = [STYLES.category];
        if (this.props.selected) {
            styles.push(STYLES.selected);
        }

        return (
            <TouchableOpacity onPress={this._onPress}>
                <Icon
                    name={this.props.icon}
                    style={styles}
                    size={20}
                />
            </TouchableOpacity>
        );
    }

}

const STYLES = StyleSheet.create({
    category: {
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#999',
    },
    selected: {
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        color: '#fff',
        backgroundColor: '#aaaaaaaa',
    },
});