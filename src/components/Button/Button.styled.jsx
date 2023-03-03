import styled from '@emotion/styled';

export const Btn = styled.button`
  padding: 4px 10px 5px 10px;
  font-family: 'Segoe UI';
  font-size: 10px;
  font-weight: 600;
  border-radius: 5px;
  background: #faebd7;
  margin-left: auto;
  margin-right: auto;
  border: none;
  color: black;
  box-shadow: 1px 2px 3px #000000;
  transition: background 0.45s linear;
  @media (min-width: 768px) {
    padding: 6px 16px 7px 16px;
    font-size: 18px;
    font-weight: 600;
  }
  @media (min-width: 1200px) {
    padding: 8px 20px 10px 20px;
    font-size: 20px;
    font-weight: 600;
  }
  &:hover,
  :focus {
    background: #f4a460;
    transition: background 0.45s linear;
  }
`;
