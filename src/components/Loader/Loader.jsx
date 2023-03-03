import { Component } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

class Loader extends Component {
  render() {
    return (
      <LoaderContainer>
        <ThreeCircles
          height="150"
          width="150"
          color="#ffa500"
          visible={true}
          ariaLabel="three-circles-rotating"
        />
      </LoaderContainer>
    );
  }
}
export default Loader;
