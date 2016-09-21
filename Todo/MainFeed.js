/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Dimensions,

    Item,
    ListView,
    Picker,
    Text,

    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import Button from 'react-native-button';



export default class MainFeed extends Component {

    constructor(props){
        super(props)
    }


    //MainFeed in progress

    render() {
        return <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
        />
    }




}





/**
 * Created by mercedes on 2016-09-20.
 */
