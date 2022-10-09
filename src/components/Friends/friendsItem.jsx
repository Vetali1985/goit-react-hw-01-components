import propTypes from 'prop-types';

export const FriendsItem = ({ isOnline, avatar, name }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
FriendsItem.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
