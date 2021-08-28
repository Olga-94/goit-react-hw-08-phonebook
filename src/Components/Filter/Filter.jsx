import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector, useDispatch} from "react-redux";
// import contactsActions from '../../redux/actions';
import { Label, Input } from '../Contacts/Form/contactForm.styled';
import { selectors, actions } from '../../redux/index-export';

function Filter() {
const value = useSelector(selectors.getFilter);
    const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={value}
        onChange={(e) => dispatch(actions.changeFilter(e.target.value))} />
    </Label>
  )
}

export default Filter; 
// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };

// const mapStateToProps = (state) => ({
//     value: state.contacts.filter,
// })

// const mapDispatchToProps = dispatch => ({
//     onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);