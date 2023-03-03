import React, { Component } from 'react';
import Modal from 'components/Modal';
import { ItemContainer, ImageGallery } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = { showModal: false };
  showModalWindow = () => {
    this.setState({ showModal: true });
  };
  hideModalWindow = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { showModal } = this.state;
    const { id, webformatURL, tags, largeImageURL } = this.props;
    return (
      <>
        <ItemContainer key={id} onClick={this.showModalWindow}>
          <ImageGallery src={webformatURL} alt={tags} />
        </ItemContainer>
        {showModal && (
          <Modal onClose={this.hideModalWindow}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
