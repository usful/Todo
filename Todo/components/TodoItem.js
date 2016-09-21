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
        padding:10 ,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#69c25b',
        borderWidth: 4

    },
    textDone:{
        fontSize: 18,
        color: '#333',
        textDecorationLine: 'line-through',
        color: '#999'
    },
    categoryText: {
        color: '#a2a2a2',
        fontSize: 16
    }
});

export default class TodoItem extends Component {

    static defaultProps = {
        text: '',
        done:false,
        onPress: (e)=> {},
        category: 'erer'
    }




    constructor(props) {
        super(props);
    }

    render() {
        return <TouchableHighlight onPress={(e)=> this.props.onPress()}>
                <View style={this.props.done? styles.containerDone: styles.container }>
                    <Text style={this.props.done? styles.textDone: styles.text}>{this.props.text} of {this.props.category} </Text>


                </View>

        </TouchableHighlight>
    }
}