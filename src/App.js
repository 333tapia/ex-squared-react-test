import React, { useState, useEffect, useRef } from 'react';

import TodoList from './components/list/TodoList';
import AppTitle from './components/AppTitle';
import AddButton from './components/buttons/AddButton';
import DeleteAllButton from './components/buttons/DeleteAllButton';
import FormContainer from './components/containers/FormContainer';
import ButtonsContainer from './components/containers/ButtonsContainer';

const TodoApp = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems.length > 0) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      text: text,
      done: false,
    };
    setItems((prevItems) =>
      [...prevItems, newItem].sort((a, b) => a.text.localeCompare(b.text))
    );
    setText('');
  };

  const markItemCompleted = (itemId) => {
    const updatedItems = items.map((item) => {
      if (itemId === item.id) item.done = !item.done;
      return item;
    });
    setItems(updatedItems);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleDeleteAllSelectedItems = () => {
    const updatedItems = items.filter((item) => item.done !== true);
    setItems(updatedItems);
  };
  const handleDeleteAllItems = () => {
    setItems([]);
  };

  return (
    <>
      <AppTitle>TO DO LIST</AppTitle>
      <FormContainer onSubmit={handleAddItem}>
        <input
          type="text"
          size="30"
          maxlength="50"
          ref={inputRef}
          placeholder="Add task (50 characters max)"
          onChange={handleTextChange}
          value={text}
        />
        <AddButton
          type="submit"
          disabled={!text}
          onClick={() => inputRef.current.focus()}
        >
          {'Add #' + (items.length + 1)}
        </AddButton>
      </FormContainer>
      <ButtonsContainer>
        {items.filter((item) => item.done).length >= 1 && (
          <DeleteAllButton onClick={handleDeleteAllSelectedItems}>
            Delete selected items
          </DeleteAllButton>
        )}
        {items.length >= 1 && (
          <DeleteAllButton onClick={handleDeleteAllItems}>
            Delete all items
          </DeleteAllButton>
        )}
      </ButtonsContainer>
      <TodoList
        items={items}
        onItemCompleted={markItemCompleted}
        onDeleteItem={handleDeleteItem}
      />
    </>
  );
};

export default TodoApp;
