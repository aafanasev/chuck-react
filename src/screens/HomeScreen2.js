import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    Alert,
    FlatList,
    TouchableHighlight
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Feather';
import { Repository } from '../api/Repository';
import { DEFAULT_CATEGORY } from "../api/Constants";

import Categories from "../components/categories/Categories";
import Button from "../components/button/Button";


export class HomeScreen2 extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            category: DEFAULT_CATEGORY,
            isLoading: true
        };
    }

    componentDidMount() {
        this._loadFact();
    }

    _loadFact() {
        this.setState({ isLoading: true });

        let category = DEFAULT_CATEGORY;

        Repository
            .getRandomFact()
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
        window.alert(categoryId);
    }

    render() {

        let content;
        if (this.state.isLoading) {
            content = (
                <View style={styles.loading}>
                    <ActivityIndicator
                        size="large"
                        color="#fff"
                    />
                </View>
            );
        } else {
            content = (
                <Text style={styles.text}>
                    {this.state.fact.value}
                </Text>
            );
        }

        return (
            <LinearGradient
                colors={['#383e4b', '#3d434f', '#383e4b']}
                style={styles.linearGradient}>

                <Categories
                    style={styles.categories}
                    onSelectCategory={this._onSelectCategory}
                />

                <View style={styles.content}>
                    {content}
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
                        onPress={() => window.alert("upload")}
                    />

                </View>

            </LinearGradient>
        );
    }

}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    categories: {
        flex: 1,
    },
    content: {
        flex: 3,
        justifyContent: 'center',
        padding: 20,
    },
    loading: {

    },
    text: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 24,
    },
    buttons: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});