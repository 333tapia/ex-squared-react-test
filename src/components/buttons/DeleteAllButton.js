import styled from 'styled-components';
import BaseButton from './BaseButton';

const DeleteAllButton = styled(BaseButton)`
  background-color: #f44336;
  color: white;
  margin-left: 5px;

  &:hover {
    background-color: #c82333;
  }
`;

export default DeleteAllButton;
