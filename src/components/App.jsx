import ContactForm from './FormFolder/Form';
import Filter from './FilterFolder/Filter';
import ContactList from './ContactListFolder/ContactList';
import { Wrap } from 'Global.Styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingSelector, errorSelector } from '../redux/selectors';
import { FetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    dispatch(FetchContacts());
  }, [dispatch]);

  return (
    <>
      <Wrap>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList />
        {isLoading && !error && <p>Loading progress...</p>}
        <Filter />
      </Wrap>
    </>
  );
}
