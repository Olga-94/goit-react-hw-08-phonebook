import React from "react";
import { Container } from 'App.styled';
import Title from 'Title/Title';
import ContactList from 'Components/Contacts/List/List';
import ContactForm from 'Components/Contacts/Form/Form';
import Filter from 'Components/Filter/Filter';

function ContactsView() {
      return (
    <Container>
        <Title title={"Phonebook"} />
        <ContactForm />
        <Filter/>
        <Title title={"Contacts"} />
    <ContactList/>  
    </Container>
  )
}

export default ContactsView;