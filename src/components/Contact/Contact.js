import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BsTelephone, BsXCircle } from 'react-icons/bs';
import { IoPeopleCircleOutline } from 'react-icons/io5';

// import {
//   Item,
//   ContactWrapper,
//   ButtonWrapper,
//   TelNumber,
//   Button,
// } from './Contact.styled';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const telNumber = 'tel:' + number;

  return (
    <div>
      <div>
        <IoPeopleCircleOutline size={50} />
        <div>
          {name}: <p>{number}</p>
        </div>
      </div>

      <div>
        <a href={telNumber}>
          <BsTelephone size={33} />
        </a>

        <button type="button" onClick={handleDelete}>
          <BsXCircle size={33} />
        </button>
      </div>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
