import PropTypes from 'prop-types';
import { FriendList } from 'components/FriendList/FriendsList.styled.js';
import { FriendsItem } from 'components/Friends/friendsItem';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendsItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
