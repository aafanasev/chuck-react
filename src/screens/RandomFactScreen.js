import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    Share,
    ActivityIndicator,
    Alert
} from "react-native";
import { Repository } from "../api/Repository";

export class RandomFactScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        let title = "Random fact";
        if (typeof params !== "undefined"
            && typeof params.categoryName !== "undefined") {
            title += ": " + params.categoryName;
        }

        return { title: title };
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
        const { params } = this.props.navigation.state;

        this.setState({ isLoading: true })

        let key;
        if (typeof params !== "undefined") {
            key = params.categoryKey;
        }

        Repository.getRandomFact(key)
            .then(fact => {
                this.setState({
                    isLoading: false,
                    fact: fact
                })
            })
    }

    _showShareDialog() {
        Share.share(
            {
                message: this.state.fact.value,
                url: this.state.fact.url
            }, {
                subject: "Share Chuck Norris fact",
                dialogTitle: "Share Chuck Norris fact"
            }
        );
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
                <View style={styles.card}>
                    <Text style={styles.text}>
                        {this.state.fact.value}
                    </Text>
                </View>

                <View style={styles.actions}>
                    <Button style={styles.favorite}
                        title="Favorite"
                        onPress={() => {
                            Alert.alert("Not implemented yet")
                        }} />
                    <Button style={styles.random}
                        title="One more"
                        onPress={() => {
                            this._loadFact();
                        }} />
                    <Button style={styles.share}
                        title="Share"
                        onPress={() => {
                            this._showShareDialog();
                        }} />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#eee",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#eee",
        padding: 20,
    },
    card: {
        width: "100%",
        borderRadius: 5,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOffset: { height: 5, width: 0 },
        elevation: 5,
    },
    cardBackground: {
        width: "100%",
        padding: 30,
        aspectRatio: 1,
        borderRadius: 5,
        overflow: "hidden",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 24,
        textShadowColor: "#000",
        textShadowRadius: 20,
        textShadowOffset: { width: 0, height: 1 }
    },
    actions: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    random: {

    },
    favorite: {

    },
    share: {

    }
})