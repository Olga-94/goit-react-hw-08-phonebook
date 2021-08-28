import styled from '@emotion/styled/macro';

export const Form = styled.form`

  margin: 0 auto;
  @media screen and (max-width: 767px) {
    max-width: 480px;
    justify-content: center;
    align-items: center;
    top: 50%; left: 50%;
  }
@media screen and (min-width: 768px) {
    max-width: 600px;
   
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-bottom: 25px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin: 20px auto;
  }
`; 

export const Input = styled.input`
  border: 1px solid lightblue;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border: 1px solid #8a2154;
  }

  @media screen and (min-width: 768px) {
    min-width: 400px;
    font-size: 18px;
    margin: 6px auto;
  }

  @media screen and (max-width: 767px) {
    max-width: 380px;
    margin-top: 6px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  padding: 2px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: #cf2d7b;

  & svg {
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    min-width: 200px;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
