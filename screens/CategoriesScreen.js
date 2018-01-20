import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    ListView,
    ActivityIndicator,
    FlatList,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";
import { Repository } from "../Repository";


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
                    data={this.state.categories}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                        let name = this._formatCategoryName(item);
                        return (
                            <TouchableOpacity onPress={() => navigate("Random", {
                                categoryKey: item,
                                categoryName: name
                            })}>
                                <Text style={styles.listItem}>{name}</Text>
                            </TouchableOpacity>
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
    listItem: {
        padding: 10
    }
})