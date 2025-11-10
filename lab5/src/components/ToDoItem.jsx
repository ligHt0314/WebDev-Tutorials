import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editText: this.props.text,
      editPriority: this.props.priority
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
  }

  handleEditClick() {
    this.setState({ 
      isEditing: true, 
      editText: this.props.text,
      editPriority: this.props.priority
    });
  }

  handleSaveClick() {
    if (this.state.editText.trim() !== "") {
       this.props.onUpdate(this.state.editText, this.state.editPriority);
       this.setState({ isEditing: false });
    }
  }

  handleCancelClick() {
    this.setState({ 
      isEditing: false, 
      editText: this.props.text,
      editPriority: this.props.priority
    });
  }

  handleChange(e) {
    this.setState({ editText: e.target.value });
  }

  handlePriorityChange(priority) {
    this.setState({ editPriority: priority });
  }

  render() {
    const { text, priority, onDelete } = this.props;
    const { isEditing, editText, editPriority } = this.state;

    if (isEditing) {
      return (
        <li className="todo-item">
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={this.handleChange}
          />
          <div className="priority-edit-buttons">
            <button
              type="button"
              className={`priority-btn-small priority-high ${editPriority === 'high' ? 'active' : ''}`}
              onClick={() => this.handlePriorityChange('high')}
              title="High Priority"
            >
              H
            </button>
            <button
              type="button"
              className={`priority-btn-small priority-medium ${editPriority === 'medium' ? 'active' : ''}`}
              onClick={() => this.handlePriorityChange('medium')}
              title="Medium Priority"
            >
              M
            </button>
            <button
              type="button"
              className={`priority-btn-small priority-low ${editPriority === 'low' ? 'active' : ''}`}
              onClick={() => this.handlePriorityChange('low')}
              title="Low Priority"
            >
              L
            </button>
          </div>
          <div className="actions">
             <button className="btn btn-save" onClick={this.handleSaveClick}>Save</button>
             <button className="btn btn-cancel" onClick={this.handleCancelClick}>Cancel</button>
          </div>
        </li>
      );
    } else {
      return (
        <li className="todo-item">
          <span className={`priority-indicator priority-${priority}`}></span>
          <span className="todo-text">{text}</span>
          <div className="actions">
            <button className="btn btn-edit" onClick={this.handleEditClick}>Edit</button>
            <button className="btn btn-delete" onClick={onDelete}>Delete</button>
          </div>
        </li>
      );
    }
  }
}

export default TodoItem;