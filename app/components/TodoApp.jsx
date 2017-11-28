var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'take a shower'
                },
                {
                    id: 4,
                    text: 'make breakfast'
                }
            ]
        };
    },
    handleAddToDo: function (text) {
        alert('New todo: ' + text);
        this.state.todos.push({
            id: this.state.todos.length,
            text: text
        });
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function() {
        var {todos} = this.state;
        return (<div>
            <h1>To-Do App</h1>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddToDo}/>
            </div>)
    }
});

module.exports = TodoApp;