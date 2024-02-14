import { Component } from 'react';
import style from './ContactForm.module.css';
const INIT_STATE = {
  name: '',
  number: '',
};
class ContactForm extends Component {
  state = INIT_STATE;
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState(INIT_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <div className={style.field}>
          <label className={style.label} htmlFor="name">
            Name
          </label>
          <input
            value={name}
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </div>
        <div className={style.field}>
          <label className={style.label} htmlFor="number">
            Number
          </label>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </div>
        <button className={style.bth} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
