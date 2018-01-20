import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button
} from "react-native";

export class HomeScreen extends Component {

    static navigationOptions = {
        title: "Chuck Norris Facts"
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button title="Random" onPress={() => navigate('Random')} />
                <Button title="Search" onPress={() => navigate('Search')} />
                <Button title="Categories" onPress={() => navigate('Categories')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})