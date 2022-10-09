import styled from 'styled-components';
export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  /* border: 1px solid; */
  width: 360px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
}
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: center;
`;
export const Avatar = styled.img`
  margin-bottom: 0;
  border-radius: 50%;
  background-color: aqua;
  width: 150px;
`;
export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
export const Stats = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  background-color: lightcyan;
  justify-content: space-around;
  margin-top: 50px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 3);
  height: 80px;
  padding: 10px;
  border-right: 1px solid grey;
  &:last-child{
    border-right: none; 
  }
  }
`;
export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
