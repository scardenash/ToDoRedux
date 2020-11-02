import React from 'react';

// Styles
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// Redux
import { useStoreActions } from 'easy-peasy';

const TodoItem = ({ todo }) => {
  //Get Actions
  const { remove, toggle } = useStoreActions((actions) => ({
    remove: actions.remove,
    toggle: actions.toggle,
  }));

  return (
    <Button
      fullWidth
      variant='contained'
      color='secondary'
      onClick={() => toggle(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        marginBottom: '0.5rem',
        padding: '0.5rem 2rem',
      }}>
      <TodoItemLabel>{todo.title}</TodoItemLabel>
      <DeleteForeverIcon
        alt=''
        style={{ position: 'absolute', right: '1em', cursor: 'pointer' }}
        onClick={() => remove(todo.id)}
      />
    </Button>
  );
};

export default TodoItem;

// Styling
const TodoItemLabel = styled.li`
  list-style: none;
  cursor: pointer;
`;
