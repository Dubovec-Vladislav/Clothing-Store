// General
import React, { ChangeEvent, FC, useState, useEffect, useRef, useCallback } from 'react'
import style from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import debounce from 'lodash.debounce'
// Slice
import { selectSearchString, setSearchString } from '../model'
// Img
import search1 from '../img/search1.svg'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'app/model'

interface SearchInputProps {
  isSearchActive: boolean,
};

export const SearchInput: FC<SearchInputProps> = ({ isSearchActive }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchStr = useAppSelector(selectSearchString);
  const [value, setValue] = useState(searchStr);

  const updateSearchStr = useCallback(debounce((str: string) => {
    dispatch(setSearchString(str))
    navigate(`/search/${str}`);
  }, 400), [dispatch, navigate]);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchStr(e.target.value);
  }

  // const inputRef = useRef<HTMLInputElement>(null);
  // useEffect(() => inputRef.current?.focus(), []); // Autofocus when rendering page

  return (
    <div className={isSearchActive ? `${style.searchInput} ${style.activeSearchInput}` : `${style.searchInput}`}>
      <img src={search1} alt="search1" />
      <input
        // ref={inputRef}
        type="text"
        placeholder="Search for products..."
        value={value}
        onChange={handleSearchInput}
      />
    </div>
  );
};
