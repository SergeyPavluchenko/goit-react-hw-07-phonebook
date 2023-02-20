import ContactElement from '../ContactElementFolder/ContactElement';
import { List } from './List.Styled';
import { useSelector } from 'react-redux';
import { contactSelector, filterSelector } from 'redux/selectors';

const ContactList = () => {
  const filter = useSelector(filterSelector);
  const contacts = useSelector(contactSelector);
  const filtredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      if (contacts.length !== 0) {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      }
    }
    return contacts;
  };
  const contactsFiltred = filtredContacts();
  return (
    <List>
      {contactsFiltred &&
        contactsFiltred.map(({ id, name, phone }) => {
          return <ContactElement key={id} name={name} id={id} phone={phone} />;
        })}
    </List>
  );
};

export default ContactList;
