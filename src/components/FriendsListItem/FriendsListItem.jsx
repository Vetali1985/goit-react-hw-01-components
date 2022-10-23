import propTypes from 'prop-types';
import { Avatar, Item, Name, Status } from './Friends.styled';

export const FriendsItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name isOnline={isOnline}>{name}</Name>
    </Item>
  );
};
FriendsItem.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
