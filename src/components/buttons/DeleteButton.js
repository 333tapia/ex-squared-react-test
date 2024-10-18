import styled from 'styled-components';
import DeleteAllButton from './DeleteAllButton';

const DeleteButton = styled(DeleteAllButton)`
  position: absolute;
  top: 0.4rem;
  right: 0.6rem;
  padding: 0.25rem 0.5rem;

  &:hover {
    background-color: #c82333;
  }
`;

export default DeleteButton;
