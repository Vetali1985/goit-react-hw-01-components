import PropTypes from 'prop-types';

import { StatisticsSect, Title, StatList, Item } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSect>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <Item key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </Item>
        ))}
      </StatList>
    </StatisticsSect>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
};
