import { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';
import {
  FormSearchbar,
  BtnSearchbar,
  InputSearchbar,
  SearchbarConteiner,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query);
    e.currentTarget.reset();
  };
  return (
    <SearchbarConteiner>
      <FormSearchbar onSubmit={handleSubmit}>
        <BtnSearchbar type="submit">
          <SlMagnifier style={{ width: 25, height: 25 }} />
        </BtnSearchbar>
        <InputSearchbar
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </FormSearchbar>
    </SearchbarConteiner>
  );
};

export default Searchbar;
