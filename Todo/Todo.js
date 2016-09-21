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
    Picker,
    Item,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import Button from 'react-native-button';

import TodoItem from './components/TodoItem';


let {width, height} = Dimensions.get('window');
let count = 3;

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state= {
            newTodo: '',
            newCategoryName:'',
            currentCategories: ['all','category1','category2','category3'],
            toDos: [{key: 1, text: '1121', done: false, category:'category1'},
                    {key: 2, text: '2222', done: false, category: 'category2'},
                    {key: 3, text: '3333', done: false,category: 'category2'}],
            newTaskCategoryName: 'category1',
            selectedCategory : 'all'
        };
    }


    addNewCategory() {
        this.state.currentCategories.push(this.state.newCategoryName);
        this.setState({addNewCategories: this.state.addNewCategories});
    }

    chooseFilter(category) {
        return this.setState({selectedCategory: category});
    }

    categoryChosen(category) {
        if (this.state.selectedCategory == 'all') {
            return true;
        } else {
            return category == this.state.selectedCategory;
        }
    }

    todoPressed(todo) {
        todo.done = !todo.done;
        this.setState({toDos: this.state.toDos});
    }

    submitNewTodo(){
        this.state.toDos.push({ key: ++count,
                                text: this.state.newTodo,
                                done: false,
                                category: this.state.newTaskCategoryName
                                });
        this.setState({toDos: this.state.toDos, category: 'all'})
    }



    render() {
        return (
            <View style={styles.container}>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.selectedCategory}
                    onValueChange={(categoryChosen) => this.chooseFilter(categoryChosen)}
                    >
                    {this.state.currentCategories.map((category) => <Item label={category} value={category}></Item>)}
                </Picker>

                {this.state.toDos.filter((todo) => (this.categoryChosen(todo.category))).map((todo) => <TodoItem key={todo.key}
                                                                                                                 text={todo.text}
                                                                                                                 done={todo.done}
                                                                                                                 category={todo.category}
                                                                                                                 onPress={() => this.todoPressed(todo)}/>)}





            <Text>Add a category</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState({newCategoryName:text})}></TextInput>
                <Button style={styles.button} 
                        styleDisabled={{color: 'red'}} 
                        onPress={() => this.addNewCategory()}>Add A New Category</Button>

                <Text style={styles.instructionsTask}>Enter a task and choose a category below for it</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({newTodo:text})}></TextInput>

                <Button style={styles.button}
                        styleDisabled={{color: 'red'}}
                        onPress={() => this.submitNewTodo()}>Add A New Task</Button>

                <Picker
                    style={styles.picker2}
                    selectedValue={this.state.newTaskCategoryName}
                    onValueChange={(category) => this.setState({newTaskCategoryName: category})}
                >
                    {this.state.currentCategories.map((category) => <Item label={category} value={category}></Item>)}
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addButton: {
        paddingTop: 10,
        paddingLeft: 10,
        width: 130,
        fontSize: 20,
        color: 'green'
    },
    button: {
        fontSize: 20,
        color: 'green',
        alignItems: 'center',
        backgroundColor: '#f9f9a4'
    },
    input: {

        bottom: 0,
        margin: 10,
        height: 40,
        width: 350,
        backgroundColor: '#F5FCFF',
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 2

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'left',
        color: '#333333',
        marginLeft: 10,
        marginTop: 10,
    },
    instructionsTask: {
        textAlign: 'left',
        color: '#333333',
        marginLeft: 10,
        marginTop: 20,
    },
    picker:{

        width: width
    },
    picker2:{
        width: width,
        bottom: 0,
        top: 0
    }
});


