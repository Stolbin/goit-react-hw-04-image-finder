import styled from '@emotion/styled';

export const ConteinerImgGallery = styled.ul`
  max-width: 400px;
  padding: 10px 0px;
  margin: 0px auto 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  @media (min-width: 768px) {
    max-width: 800px;
    padding: 15px 0px;
    gap: 15px;
  }
  @media (min-width: 1200px) {
    max-width: 1400px;
    padding: 20px 0px;
    gap: 20px;
  }
`;
export const ImgGalleryItem = styled.li``;
