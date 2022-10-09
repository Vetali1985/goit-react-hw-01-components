import PropTypes from 'prop-types';

import {
  UserCard,
  Description,
  Avatar,
  UserName,
  Stats,
  StatsItem,
  Quantity,
} from 'components/Profile/Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats>
        <StatsItem>
          <span className="label">Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </UserCard>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
