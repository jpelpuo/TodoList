import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from "./components/Todos"
import Header from './components/layout/Header'
import AddToDo from './components/AddToDo'
import './App.css';
import About from "./components/pages/About";

class App extends Component{
  state = {
    todos : []
  }

  toggleComplete = id => {
    const {todos} = this.state;

    this.setState({
      todos: todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  };

  deleteTodo = id => {
    const {todos} = this.state;
    this.setState({
      todos : [...todos.filter(todo => todo.id !== id)]
    })
  };

  addTodo = (title) => {
    const {todos} = this.state
    this.setState({todos : [...todos, {
      id : todos.length + 1, title, completed : false
      }]
    })
  };

  render() {
    return (
        <Router>
          <div className="App">
            <div className="container">
              <Header/>
              <Route exact path="/" render={props => (
                  <React.Fragment>
                    <AddToDo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
                  </React.Fragment>

              )}/>
              <Route path="/about" component={About}/>
            </div>
          </div>
        </Router>
  );
  }
}

export default App;
