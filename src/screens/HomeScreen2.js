import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';

export class HomeScreen2 extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <LinearGradient
                colors={['#3f4551', '#383e4b', '#383e4b']}
                style={styles.linearGradient}>

                <View style={styles.top}>
                    <Text style={styles.text}>
                        Here will be text
                        </Text>
                </View>

                <View style={styles.bottom}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log('s')}>
                        <Icon
                            name="md-menu"
                            size={40}
                            color="#fff"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log('s')}>
                        <Icon
                            name="md-infinite"
                            size={80}
                            color="#fff"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log('s')}>
                        <Icon
                            name="md-share"
                            size={40}
                            color="#fff"
                        />
                    </TouchableOpacity>

                </View>

            </LinearGradient>
        );
    }

}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        padding: 15,
    },
    top: {
        flexGrow: 7,
        justifyContent: 'center',
    },
    text: {
        color: "#fff",
        textAlign: 'center',
    },
    bottom: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        aspectRatio: 1,
        padding: 20,
        borderRadius: 40,
        justifyContent: 'center',
        backgroundColor: '#20232c',
        elevation: 10,
    },
});