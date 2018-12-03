import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableHighlight
} from "react-native";

export class HomeScreen2 extends Component {

    render() {

        return (
            <View>
                <Button title="Random" onPress={() => console.log("TODO")} />
            </View>
        );

    }

}