import styled from 'styled-components';
import BaseButton from './BaseButton';

const AddButton = styled(BaseButton)`
  background-color: #4caf50;
  color: white;
  margin-left: 5px;

  &:hover {
    background-color: #218838;
  }
`;

export default AddButton;
