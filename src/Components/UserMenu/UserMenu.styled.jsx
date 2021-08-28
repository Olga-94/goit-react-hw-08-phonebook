import styled from "@emotion/styled/macro";

export const UserMenuContainer = styled.div`
display: flex;
align-items: center;
`;

export const UserMenuText = styled.span`
margin-right: 15px;
margin-left: 12px;
font-weight: 600;
  font-size: 14px;
  line-height: 1.88;
  letter-spacing: 0.06em;

  @media screen and (min-width: 768px) {
    max-width: 200px;
     font-size: 18px;

    
  }
`;


export const Button = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  // min-width: 120px;
  padding: 2px 12px;
  // margin-right: 12px;
  box-shadow: 0px 4px 4px #383838;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  // background-color: #cf2d7b;
  background-color: #a30a0a;
  font-weight: 600;

  @media screen and (max-width: 767px) {
    // max-width: 160px;
     font-size: 14px;
    
    
  }
   @media screen and (min-width: 768px) {
    max-width: 200px;
     font-size: 18px;

    
  }
`;