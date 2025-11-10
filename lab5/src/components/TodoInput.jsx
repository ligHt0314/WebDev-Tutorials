import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    const { currentItem, currentPriority, handleInput, addItem, handlePriorityChange } = this.props;

    return (
      <header>
        <h1>To-Do List</h1>
        <form onSubmit={addItem} className="todo-form">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={currentItem}
            onChange={handleInput}
          />
          <div className="priority-buttons">
            <button
              type="button"
              className={`priority-btn priority-high ${currentPriority === 'high' ? 'active' : ''}`}
              onClick={() => handlePriorityChange('high')}
              title="High Priority"
            >
              High
            </button>
            <button
              type="button"
              className={`priority-btn priority-medium ${currentPriority === 'medium' ? 'active' : ''}`}
              onClick={() => handlePriorityChange('medium')}
              title="Medium Priority"
            >
              Med
            </button>
            <button
              type="button"
              className={`priority-btn priority-low ${currentPriority === 'low' ? 'active' : ''}`}
              onClick={() => handlePriorityChange('low')}
              title="Low Priority"
            >
              Low
            </button>
          </div>
          <button type="submit" className="add-btn">Add Task</button>
        </form>
      </header>
    );
  }
}

export default TodoInput;