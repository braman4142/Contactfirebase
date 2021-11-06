import ContactList from "./ContactList";
import "../App.css";
import { connect } from "react-redux";


function Contact(props) {
  const contacts = props.addcontact;

  return contacts.map((contact, index) => {
    return (
        <div key={index} className="list-box">
          <ContactList
            contact={contact}
            key={contact.id}
            deletecontact={props.deletecontact}
            editcontact={props.editcontact}
          />
        </div>
    );
  });
}

const mapStateToProps = (state) => {
  return {
    addContact: state.contacts
  }
}

export default connect(mapStateToProps) (Contact);