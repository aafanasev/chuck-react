import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

export class CategoriesScreen extends Component {

    static navigationOptions = {
        title: "Categories"
    };

    render() {
        return (<FlatList />);
    }

}