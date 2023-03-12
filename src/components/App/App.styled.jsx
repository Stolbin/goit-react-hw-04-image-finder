import styled from '@emotion/styled';

export const Anchor = styled.div`
  width: 0px;
  height: 0px;
`;
export const Conteiner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
export const ErrorText = styled.h2`
  margin-top: 50px;
  font-size: 20px;
  text-align: center;
`;
export const SpanText = styled.span`
  color: #b22222;
  font-size: 22px;
  text-decoration: underline;
`;
export const BuutonUP = styled.button`
`;
export const ArrowUP = styled.button`
  position: fixed;
  bottom: 35px;
  right: 35px;
  border: none;
  background: #FFEFD5;
  width: 32px;
  height: 32px;
  border-radius: 40%;
  box-shadow: 1px 2px 4px 1px #72695a;
  transition: box-shadow 0.45s linear;
  &:hover {
    box-shadow: 0px 2px 6px 2px #72695a;
    transition: box-shadow 0.45s linear;
  }
`;
export const ArrowUPLink = styled.a`
  text-decoration: none;
`;
