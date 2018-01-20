import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    ActivityIndicator
} from "react-native";
import { Repository } from "../Repository";

export class RandomFactScreen extends Component {

    static navigationOptions = {
        title: "Random fact"
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this._loadFact();
    }

    _loadFact() {
        this.setState({ isLoading: true })

        Repository.getRandomFact()
            .then(fact => {
                this.setState({
                    isLoading: false,
                    fact: fact
                })
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.state.fact.value}
                </Text>
                <Button style={styles.button}
                    title="One more"
                    onPress={() => {
                        this._loadFact();
                    }} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    text: {
        marginBottom: 30,
        textAlign: "center"
    },
    button: {

    }
})