import React, { useEffect, useRef } from 'react';
import DeleteButton from '../buttons/DeleteButton';
import styled, { css } from 'styled-components';

const TodoItem = ({ id, text, completed, onItemCompleted, onDeleteItem }) => {
  const listItemRef = useRef(null);

  const markCompleted = () => {
    onItemCompleted(id);
  };

  const deleteItem = () => {
    onDeleteItem(id);
  };

  useEffect(() => {
    if (listItemRef.current) {
      listItemRef.current.classList.add('highlight');
      const timeout = setTimeout(() => {
        listItemRef.current.classList.remove('highlight');
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <Item ref={listItemRef}>
      <ItemLabel completed={completed}>
        <ItemCheckbox
          type="checkbox"
          onChange={markCompleted}
          checked={completed}
        />
        {text}
      </ItemLabel>
      <DeleteButton onClick={deleteItem}>x</DeleteButton>
    </Item>
  );
};

const completedStyles = css`
  color: #999;
  text-decoration: line-through;
`;

const ItemLabel = styled.label`
  width: 100%;
  ${({ completed }) => (completed ? completedStyles : '')}
`;

const ItemCheckbox = styled.input`
  margin-right: 1rem;
`;

const Item = styled.li`
  position: relative;
  margin-bottom: 0.25rem;
  margin-left: 2rem;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  border-top: 1px solid #ccc;

  &.highlight {
    border-color: #ff2968;
    background-color: #ff8fb0;

    &:last-child {
      border-color: #ff2968;
    }
  }

  &:last-child {
    border-bottom: 1px solid #ccc;
  }
`;

export default TodoItem;
