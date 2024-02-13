import Contact from 'components/Contact/Contact';
const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <Contact
          onRemove={() => {
            onRemoveContact(id);
          }}
          name={name}
          number={number}
          key={id}
        />
      ))}
    </ul>
  );
};
export default ContactList;
