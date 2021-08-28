import React,  {useEffect} from 'react';
import { FiPhone } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { ListContainer, ListItem, Button } from './contactList.styled';
import { useSelector, useDispatch } from 'react-redux';
// import contactsActions from '../../../redux/actions';
import { operations, selectors } from '../../../redux/index-export';

 function ContactList(/*{ contacts, onDeleteContact }*/) {
 
  // const getVisibleContact = (allContacts, filter) => {
  //   const normalFilter = filter.toLowerCase();
  //   return allContacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalFilter)
  //   );
  // }
  const dispatch = useDispatch();
  
   useEffect(() => {
        dispatch(operations.fetchContacts());
   }, [dispatch]);
  
  const contacts = useSelector(selectors.getVisibleContacts);
  
  return (
    <ListContainer>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <FiPhone />
          {name}: +38 {number}
          <Button onClick={() => dispatch(operations.deleteContact(id))}>
            <AiFillDelete />
            Delete
          </Button>
        </ListItem>
      ))}
    </ListContainer>
  )
 }

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//   ),
//   onDeleteContact: PropTypes.func,
// };
