import { Component } from 'react';
import { SlMagnifier } from 'react-icons/sl';
import {
  FormSearchbar,
  BtnSearchbar,
  InputSearchbar,
  SearchbarConteiner,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = { query: '' };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value });
  };

  handleSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    if (!query.trim()) return;
    this.props.onSubmit(query);
    e.currentTarget.reset();
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarConteiner>
        <FormSearchbar onSubmit={this.handleSubmit}>
          <BtnSearchbar type="submit">
            <SlMagnifier style={{ width: 25, height: 25 }} />
          </BtnSearchbar>
          <InputSearchbar
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </FormSearchbar>
      </SearchbarConteiner>
    );
  }
}

export default Searchbar;
