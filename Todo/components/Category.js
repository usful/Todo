/**
 * Created by mercedes on 2016-09-15.
 */
import React, {Component} from 'react';
import {Alert, Dimensions, Text, View, TouchableHighlight, StyleSheet} from 'react-native';

let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
        width: width

    },
    text: {
        fontSize: 18,
        color: '#333'

    },
    containerDone: {
        padding:10,
        borderRadius: 17,
        borderStyle: 'solid',
        borderColor: '#69c25b',
        borderWidth: 4

    },
    textDone:{
        fontSize: 18,
        color: '#333',
        textDecorationLine: 'line-through',
        color: '#999'
    }
});

export default class Category extends Component {

    static defaultProps = {
        text: '',
        done:false,
        onPress: (e)=> {}
    }




    constructor(props) {
        super(props);
    }

    //not done yet, trying to separate into child components

    render() {
        return <TouchableHighlight onPress={(e)=> this.props.onPress()}>
            <View style={this.props.done? styles.containerDone: styles.container }>
                <Text style={this.props.done? styles.textDone: styles.text}>{this.props.text}</Text>
            </View>


        </TouchableHighlight>
    }
}