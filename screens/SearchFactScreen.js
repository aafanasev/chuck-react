import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    ActivityIndicator,
    Button,
    FlatList,
    Alert
} from "react-native";
import { Repository } from "../Repository";

export class SearchFactScreen extends Component {

    static navigationOptions = {
        title: "Search a fact"
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            query: "",
            results: {
                total: 0,
                result: []
            },
        };
    }

    _search() {
        if (this.state.query.length < 4) {
            Alert.alert("Query string is too short (< 4)")
            return;
        }

        this.setState({ isLoading: true });

        Repository.findFacts(this.state.query)
            .then(results => {
                this.setState({
                    isLoading: false,
                    results: results
                });
            })

    }

    _getFoundView() {
        if (this.state.results.total > 0) {
            return (
                <Text style={styles.total}>
                    Found: {this.state.results.total}
                </Text>
            );
        }
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
                <TextInput
                    style={styles.input}
                    placeholder="Choose your destiny"
                    value={this.state.query}
                    onChangeText={text => this.setState({ query: text })}
                    onSubmitEditing={() => this._search()}
                />
                {this._getFoundView()}
                <FlatList
                    style={styles.list}
                    data={this.state.results.result}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                        return (
                            <Text style={styles.listItem}>{item.value}</Text>
                        );
                    }}
                />
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
        flex: 1
    },
    input: {
        backgroundColor: "#eeeeee",
        padding: 10,
        margin: 20,
    },
    total: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        fontWeight: "bold"
    },
    list: {

    },
    listItem: {
        padding: 20
    },
})