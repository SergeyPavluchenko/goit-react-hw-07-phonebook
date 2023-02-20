import { useState } from 'react';
import { Form, Label, Input, Button } from './Form.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactSelector } from 'redux/selectors';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
// import { Notify } from 'notiflix';
import { addContacts } from '../../redux/operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelector);
  const nameId = nanoid();
  const phoneId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} is already in contact`);
      return;
    } else if (contacts.find(contact => contact.phone === phone)) {
      toast.error(`${phone} is already in contact`);
      return;
    }
    dispatch(addContacts({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="fname">Name</Label>
        <Input
          id={nameId}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />

        <Label htmlFor="fname">Number </Label>
        <Input
          id={phoneId}
          onChange={handleChange}
          value={phone}
          type="tel"
          name="phone"
        />

        <Button type="submit">add contact</Button>
        <Toaster position="top-right" reverseOrder={false} />
      </Form>
    </>
  );
}
