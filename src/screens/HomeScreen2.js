import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

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

                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => console.log('s')}>
                        <Text style={styles.buttonText}>More</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => console.log('s')}>
                        <Text style={styles.buttonText}>Random</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => console.log('s')}>
                        <Text style={styles.buttonText}>Share</Text>
                    </TouchableHighlight>

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
        justifyContent: 'center',
    },
    button: {
        alignSelf: 'baseline',
        margin: 10,
        padding: 20,
        borderRadius: 40,
        backgroundColor: '#20232c',
        elevation: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});