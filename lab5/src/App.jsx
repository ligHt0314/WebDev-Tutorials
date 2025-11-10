import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/ToDoItem';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: '',
      currentPriority: 'medium'
    };

    this.handleInput = this.handleInput.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  handleInput(e) { 
    this.setState({ currentItem: e.target.value }); 
  }

  handlePriorityChange(priority) {
    this.setState({ currentPriority: priority });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem.trim();
    if (newItem !== "") {
      this.setState(prevState => ({
        items: [...prevState.items, { 
          text: newItem, 
          priority: prevState.currentPriority 
        }],
        currentItem: '',
        currentPriority: 'medium'
      }));
    }
  }

  deleteItem(indexToDelete) {
    const filteredItems = this.state.items.filter((item, index) => index !== indexToDelete);
    this.setState({ items: filteredItems });
  }

  updateItem(indexToUpdate, newText, newPriority) {
    const updatedItems = this.state.items.map((item, index) => {
      if (index === indexToUpdate) {
        return { text: newText, priority: newPriority };
      }
      return item;
    });
    this.setState({ items: updatedItems });
  }

  render() {
    return (
      <div className="app-container">
        <TodoInput
          currentItem={this.state.currentItem}
          currentPriority={this.state.currentPriority}
          addItem={this.addItem}
          handleInput={this.handleInput}
          handlePriorityChange={this.handlePriorityChange}
        />
        <ul className="todo-list">
          {this.state.items.map((item, index) => (
            <TodoItem
              key={index}
              text={item.text}
              priority={item.priority}
              onDelete={() => this.deleteItem(index)}
              onUpdate={(newText, newPriority) => this.updateItem(index, newText, newPriority)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;