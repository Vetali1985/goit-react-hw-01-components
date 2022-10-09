import styled from 'styled-components';
export const Table = styled.table`
  margin: 16px auto;
  width: 360px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
export const Thead = styled.tr`
  border-bottom: 2px solid;
`;
export const Header = styled.thead`
  text-transform: uppercase;
  color: #fff;
  background-color: cadetblue;
`;
export const Row = styled.tr`
  text-align: center;
  border-radius: 10px;
  &:nth-child(even) {
    background: darkgray;
  }
  &:nth-child(odd) {
    background: #fff;
  }
`;
export const FirstColumn = styled.td`
  text-align: start;
`;
