import { useState } from 'react';
import Modal from 'components/Modal';
import { ItemContainer, ImageGallery } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
  const [showModalWindow, setShowModalWindow] = useState(false);

  const toggleModalWindow = () => {
    setShowModalWindow(!showModalWindow);
  };

  return (
    <>
      <ItemContainer key={id} onClick={toggleModalWindow}>
        <ImageGallery src={webformatURL} alt={tags} />
      </ItemContainer>
      {showModalWindow && (
        <Modal onClose={toggleModalWindow}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

export default ImageGalleryItem;

// class ImageGalleryItem extends Component {
//   state = { showModal: false };

//   toggleModalWindow = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   render() {
//     const { showModal } = this.state;
//     const { id, webformatURL, tags, largeImageURL } = this.props;
//     return (
//       <>
//         <ItemContainer key={id} onClick={this.toggleModalWindow}>
//           <ImageGallery src={webformatURL} alt={tags} />
//         </ItemContainer>
//         {showModal && (
//           <Modal onClose={this.toggleModalWindow}>
//             <img src={largeImageURL} alt={tags} />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }

// export default ImageGalleryItem;
