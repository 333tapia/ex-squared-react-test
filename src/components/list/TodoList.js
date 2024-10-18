import React from 'react';
import TodoItem from './TodoItem';
import BaseContainer from '../containers/BaseContainer';
import styled from 'styled-components';

const TodoList = ({ items, onItemCompleted, onDeleteItem }) => {
  return (
    <BaseContainer>
      <List>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.done}
            item={item}
            onItemCompleted={onItemCompleted}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </List>
    </BaseContainer>
  );
};

const List = styled.ul`
  padding-left: 0;
`;

export default TodoList;
