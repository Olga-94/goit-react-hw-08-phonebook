import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #e3da8a;
  box-shadow: 0px 5px 8px #785c14;
  
  border-radius: 4px;
  margin: 0 auto;
  
  
  @media screen and (max-width: 767px) {
    max-width: 480px;
padding: 15px;
  }

   @media screen and (min-width: 768px) {
    max-width: 600px;
    // padding: 20px;
    padding: 15px;
  }
  
`;

export const SectionTitle = styled.h2`
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  background-color: #8a2154;
  color: #f7eed7;
  font-size: 26px;
  border-radius: 2px;
  box-shadow: 0 4px 0 4px #7f0048;
  margin: 20px auto;
 
  @media screen and (max-width: 767px) {
    max-width: 480px;
    font-size: 22px;
  }
`;
