import styled from '@emotion/styled';

export const ItemContainer = styled.li``;
export const ImageGallery = styled.img`
  width: 90px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
  box-shadow: 2px 2px 4px #000000;
  transition: scale 0.25s linear, box-shadow 0.25s linear;
  @media (min-width: 768px) {
    width: 160px;
    height: 108px;
  }
  @media (min-width: 1200px) {
    width: 280px;
    height: 188px;
  }
  &:hover {
    scale: 1.02;
    box-shadow: 0px 0px 8px #000000;
    transition: scale 0.4s linear, box-shadow 0.25s linear;
  }
`;
