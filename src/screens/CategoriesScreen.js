import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    ListView,
    ActivityIndicator,
    FlatList,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";
import { Repository } from "../api/Repository";


export class CategoriesScreen extends Component {

    static navigationOptions = {
        title: "Categories"
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this._loadCategories();
    }

    _loadCategories() {
        this.setState({ isLoading: true });

        Repository.getCategories()
            .then(categories => {
                this.setState({
                    isLoading: false,
                    categories: categories
                });
            })
    }

    _formatCategoryName(categoryName) {
        return categoryName.charAt(0).toUpperCase() + categoryName.substr(1);
    }

    _getBackgroundImageUrl(categoryKey) {
        // TODO: random images for now
        return {
            uri: "https://picsum.photos/200?random"
        };
    }

    render() {
        const { navigate } = this.props.navigation;

        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    numColumns="2"
                    data={this.state.categories}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                        let name = this._formatCategoryName(item);
                        return (
                            <View style={styles.item}>
                                <TouchableOpacity
                                    style={styles.itemTouch}
                                    onPress={() => navigate("Random", {
                                        categoryKey: item,
                                        categoryName: name
                                    })}>
                                    <ImageBackground
                                        style={styles.itemImage}
                                        source={this._getBackgroundImageUrl(item)} >
                                        <Text style={styles.itemText}>
                                            {name}
                                        </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
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

    },
    list: {
        padding: 10
    },
    item: {
        width: "50%",
        aspectRatio: 1,
    },
    itemTouch: {
        flex: 1,
        margin: 10,
        borderRadius: 5,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOffset: { height: 5, width: 0 },
        elevation: 5,
    },
    itemImage: {
        flex: 1,
        alignItems: "center",
        borderRadius: 5,
        overflow: "hidden",
    },
    itemText: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 10,
        backgroundColor: "#0006",
        textAlign: "center",
        color: "#fff"
    }
})