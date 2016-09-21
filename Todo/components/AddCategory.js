/**
 * Created by mercedes on 2016-09-15.
 */
import React, {Component} from 'react';
import {Alert, Dimensions, Text, View, TouchableHighlight, StyleSheet} from 'react-native';

import Button from 'react-native-button';

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

export default class AddCategory extends Component {

    static defaultProps = {

    }


    constructor(props) {
        super(props);
        this.state = {category: ''};
    }

    addNewCategory(category) {
        this.setState({category: category});
    }

    addCategory(){
        this.props.onChange(this.state.category);
    }


    //not done yet, trying to separate into child components

    render() {
        return
        <View>
            <Text>Please enter a Category</Text>
            <TextInput style={styles.input}  
                       onChangeText={(text) => this.addNewCategory(text)}/>
            <Button onPress={() => this.addCategory()}> Add </Button>
        </View>
    }
}/**
 * Created by mercedes on 2016-09-20.
 */
