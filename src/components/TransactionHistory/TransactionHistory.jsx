import PropTypes from 'prop-types';
import { Table, Header, Row, FirstColumn } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Header>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Header>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <FirstColumn>{type}</FirstColumn>
            <FirstColumn>{amount}</FirstColumn>
            <FirstColumn>{currency}</FirstColumn>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
