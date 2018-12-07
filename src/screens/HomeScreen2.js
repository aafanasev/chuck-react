import React, { Component } from "react";
import {
    Alert,
    ActivityIndicator,
    Share,
    StyleSheet,
    View,
    Text,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Repository from '../api/Repository';
import Categories from "../components/categories/Categories";
import Button from "../components/button/Button";

export class HomeScreen2 extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            category: 'random',
            isLoading: true
        };
    }

    componentDidMount() {
        this._loadFact();
    }

    _loadFact() {
        this.setState({ isLoading: true });

        Repository
            .getRandomFact(this.state.category)
            .then(fact => {
                this.setState({
                    isLoading: false,
                    fact: fact
                });
            })
            .catch(e => {
                Alert.alert("Oops! Something went wrong", "Please try again");
            });
    }

    _onSelectCategory = (categoryId) => {
        this.setState({ category: categoryId });
        this._loadFact();
    }

    _onClickShare() {
        if (this.state.isLoading) {
            return;
        }

        const message = {
            message: this.state.fact.value,
            url: this.state.fact.url,
        };

        const title = {
            subject: 'Chuck Norris fact',
            dialogTitle: 'Share Chuck Norris fact'
        };

        Share.share(message, title);
    }

    _renderContent() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator
                        size="large"
                        color="#fff"
                    />
                    <Text style={styles.loadingText}>
                        Loading a joke from <Text style={{ fontWeight: 'bold' }}>{this.state.category}</Text>...
                    </Text>
                </View>
            );
        } else {
            return (
                <Text style={styles.text}>
                    {this.state.fact.value}
                </Text>
            );
        }
    }

    render() {
        return (
            <LinearGradient
                colors={['#383e4b', '#3d434f', '#383e4b']}
                style={styles.container}>

                <Categories
                    style={styles.categories}
                    selected={this.state.category}
                    onSelectCategory={this._onSelectCategory}
                />

                <View style={styles.content}>
                    {this._renderContent()}
                </View>

                <View style={styles.buttons}>

                    <Button
                        icon="search"
                        onPress={() => window.alert("search")}
                    />

                    <Button
                        icon="repeat"
                        main={true}
                        onPress={() => this._loadFact()}
                    />

                    <Button
                        icon="upload"
                        onPress={() => this._onClickShare()}
                    />

                </View>

            </LinearGradient>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categories: {
        flex: 1,
    },
    content: {
        flex: 7,
        justifyContent: 'center',
        padding: 20,
    },
    loading: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        padding: 20,
        color: '#fff',
        fontSize: 20,
    },
    text: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 24,
    },
    buttons: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});