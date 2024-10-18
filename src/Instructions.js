import React from 'react';
import styled from 'styled-components';

const Instructions = () => {
  const instructions = [
    'Convert this TODO application from a class component into a function component using es6 and react hooks.',
    'Use styled-components library for all styles',
    'Create a way to delete multiple selected items',
    'Create a way to save the lists you have created in an organized fashion. The ability to resume editing or delete a whole saved list is required.',
    'Bonus put your own design flair on this application!',
    'Have fun!',
  ];
  return (
    <>
      <InstructionsContainer>
        <h1>React Class Conversion</h1>
        <ul>
          {instructions.map((instruction) => (
            <li>{instruction}</li>
          ))}
        </ul>
      </InstructionsContainer>
    </>
  );
};

const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Instructions;
