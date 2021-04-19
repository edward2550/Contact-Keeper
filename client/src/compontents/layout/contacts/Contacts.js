import React, { Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../Spinner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please Add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contacts => (
                <CSSTransition
                  key={contacts._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contacts} />
                </CSSTransition>
              ))
            : contacts.map(contacts => (
                <CSSTransition
                  key={contacts._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contacts} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
