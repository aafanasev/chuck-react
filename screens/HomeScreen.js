import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableHighlight
} from "react-native";

export class HomeScreen extends Component {

    static navigationOptions = {
        title: "Chuck Norris Facts"
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button title="Random" onPress={() => navigate('Random')} />
                </View>
                <View style={styles.button}>
                    <Button title="Search" onPress={() => navigate('Search')} />
                </View>
                <View style={styles.button}>
                    <Button title="Categories" onPress={() => navigate('Categories')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        padding: 10
    }
})