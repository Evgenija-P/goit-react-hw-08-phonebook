import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { IoPeopleCircleOutline } from 'react-icons/io5';

import { deleteContact } from 'redux/contacts/operations';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const telNumber = 'tel:' + number;

  return (
    <Flex align="center" justify="space-between">
      <Flex align="center" gap={4}>
        <Icon as={IoPeopleCircleOutline} w={12} h={12}></Icon>

        <div>
          <Text fontSize="18px" as="i">
            Name: {name} <p>Phone number: {number}</p>
          </Text>
        </div>
      </Flex>

      <Flex gap={5}>
        <a href={telNumber}>
          <PhoneIcon w={6} h={6} />
        </a>

        <button type="button" onClick={handleDelete}>
          <DeleteIcon w={6} h={6} />
        </button>
      </Flex>
    </Flex>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
