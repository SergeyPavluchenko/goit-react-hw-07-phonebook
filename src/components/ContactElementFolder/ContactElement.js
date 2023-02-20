import { ListEl, Text, TextEl, Button } from './ContactElement.Styled';
import { deleteContacts } from '../../redux/operations';
import { useDispatch } from 'react-redux';

const ContactElement = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <ListEl key={id}>
      <Text>
        <TextEl>{name}:</TextEl>
        <TextEl> {phone}</TextEl>
      </Text>
      <Button onClick={() => dispatch(deleteContacts(id))} type="button">
        Delete
      </Button>
    </ListEl>
  );
};

export default ContactElement;
