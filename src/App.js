import React, {Component} from 'react';
import './App.css';
import ToDoList from './components/todo-list';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      thingsToDo: [
        'clean the dishes', 'wash the table'
      ],
      newThingToDo: ""
    }

    this.removePeople = this
      .removePeople
      .bind(this)

    this.addItem = this
      .addItem
      .bind(this)
    this.handleChange = this
      .handleChange
      .bind(this)
  }
  removePeople(e) {

    var array = this.state.thingsToDo;
    var index = array.indexOf(e)
    array.splice(index, 1);
    this.setState({thingsToDo: array});
  }
  addItem() {
    let {thingsToDo, newThingToDo} = this.state

    thingsToDo.push(newThingToDo)

    this.setState({thingsToDo, newThingToDo: ''})
    

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    
  }

  render() {
    return (
      <div className="App">
        <input
          value={this.state.newThingToDo}
          name='newThingToDo'
          onChange={this.handleChange}/>
          <button onClick={this.addItem}>Add Item </button>
        <ToDoList handleDelete={this.removePeople} thingsToDo={this.state.thingsToDo}/>
      </div>
    );
  }
}

export default App;
