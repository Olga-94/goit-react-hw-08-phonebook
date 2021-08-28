import styled from '@emotion/styled/macro';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  
`;

export const ListItem = styled.li`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  font-weight:600;
  
  
  & svg {
    width: 18px;
    height: 18px;
    margin-right: 20px;
  }
 @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 25px;
    
  }

`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 15px;
  box-shadow: 0px 4px 4px #d2c3d4;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: #ad7892;
  margin-left: auto;
  & svg {
    color: #fff;
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }

    @media screen and (min-width: 768px) {
    min-width: 200px;
    font-size: 18px;
    // margin-bottom: 20px;
  }
`;
