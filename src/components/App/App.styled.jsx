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
  color: #2f4f4f;
`;
export const ArrowUP = styled.button`
  position: fixed;
  bottom: 35px;
  right: 35px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  background: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 1px 2px 4px 1px #72695a;
  transition: box-shadow 0.45s linear;
  &:hover {
    box-shadow: 0px 2px 6px 2px #72695a;
    transition: box-shadow 0.45s linear;
  }
`;
export const ArrowUPLink = styled.a`
  text-decoration: none;
  color: black;
`;
