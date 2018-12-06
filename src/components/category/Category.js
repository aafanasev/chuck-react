import React from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const { width } = Dimensions.get('window');
const itemWidth = width / 5;

export default class Category extends React.PureComponent {

    _onPress = () => {
        this.props.onPress(this.props.id);
    }

    render() {
        let styles = [STYLES.icon];
        if (this.props.selected) {
            styles.push(STYLES.selected);
        }

        return (
            <View width={itemWidth} style={STYLES.item}>
                <TouchableOpacity onPress={this._onPress}>
                    <Icon
                        name={this.props.icon}
                        style={styles}
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        );
    }

}

const STYLES = StyleSheet.create({
    item: {
        flex: 1,
        alignItems: 'center'
    },
    icon: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#999',
    },
    selected: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        color: '#fff',
        backgroundColor: '#aaaaaaaa',
    },
});