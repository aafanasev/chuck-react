import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Category from "../category/Category";
import { CATEGORIES } from "../../api/Constants";

export default class Categories extends React.PureComponent {

    _onPressItem = (categoryId) => {
        this.props.onSelectCategory(categoryId);
    }

    _keyExtractor = (item, index) => item.id

    _renderItem = ({ item }) => (
        <Category
            id={item.id}
            icon={item.icon}
            selected={item.id == this.props.selected}
            onPress={this._onPressItem}
        />
    )

    render() {
        return (
            <FlatList
                data={CATEGORIES}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                extraData={this.props.selected}
                horizontal={true}
            />
        );
    }

}