import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Status = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#069c06' : 'red')};
`;
export const Avatar = styled.img``;
export const Name = styled.p`
  font-weight: bold;
`;
