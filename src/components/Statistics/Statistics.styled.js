import styled from 'styled-components';
export const StatisticsSect = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  width: 360px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 1), 0px 1px 1px rgba(0, 0, 0, 0.8),
    0px 2px 1px rgba(0, 0, 0, 0.9);
`;
export const Title = styled.h2`
  text-align: center;
  border-bottom: 1px solid;
  padding: 20px;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: aqua;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightcyan;
  padding: 8px;
  flex-basis: calc(100% / 5);
  align-items: center;
`;
