import React, { Component } from 'react';
import {
    Alert,
    ActivityIndicator,
    FlatList,
    View,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import Repository from '../api/Repository';
import FactCard from '../components/factCard/FactCard';

export class SearchScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            query: '',
            results: {
                total: 0,
                result: []
            },
        };
    }

    _search() {
        if (this.state.query.length < 4) {
            Alert.alert('Query string is too short (< 4)')
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
            .catch(e => {
                Alert.alert('Oops! Something went wrong', 'Please try again');
            });
    }

    _renderContent() {
        if (this.state.isLoading) {
            return (
                <View style={STYLES.loading}>
                    <ActivityIndicator
                        size='large'
                        color='#fff'
                    />
                </View>
            );
        } else if (this.state.results.total > 0) {
            return (
                <FlatList
                    style={STYLES.list}
                    data={this.state.results.result}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this._renderItem}
                />
            );
        } else {
            return (
                <View style={STYLES.empty}>
                    <Icon
                        name='search'
                        style={STYLES.emptyIcon}
                        size={60}
                    />
                </View>
            );
        }
    }

    _renderItem = ({ item }) => {
        return (
            <FactCard
                text={item.value}
            />
        );
    }

    render() {
        return (
            <LinearGradient
                colors={['#383e4b', '#3d434f', '#383e4b']}
                style={STYLES.container}>

                <View backgroundColor='#333'>
                    <TextInput
                        style={STYLES.input}
                        placeholder='Search...'
                        value={this.state.query}
                        onChangeText={text => this.setState({ query: text })}
                        onSubmitEditing={() => this._search()}
                    />
                </View>

                {this._renderContent()}

            </LinearGradient>
        );

    }

}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        margin: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 18,
        color: '#333',
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    empty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyIcon: {
        color: '#fff'
    },
    list: {
        paddingTop: 20,
    },
})