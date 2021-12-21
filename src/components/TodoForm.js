import React from 'react'

export default props =>
  <form>
    <input
      type='text'
      autoFocus
      onChange={props.handleNewTodoChange}
      className="new-todo"
      value={props.currentTodo}
      placeholder="What needs to be done?"/>
  </form>
