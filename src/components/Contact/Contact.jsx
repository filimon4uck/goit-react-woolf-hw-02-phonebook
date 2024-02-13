const Contact = ({ name, number, id, onRemove }) => {
  return (
    <li key={id}>
      {name} : {number}
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default Contact;
