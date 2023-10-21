// General
import React, { FC, useEffect, useState } from "react";
import style from "./index.module.scss";
import { NavLink, Link } from "react-router-dom";
// Slice
import { useAppSelector } from "app/model";
import {
  selectCartClothingItems,
  selectCartTotalItems,
} from "widgets/cart-section";
import { SearchInput, selectSearchString } from "features/search";
// Images
import cart from "../img/cart.svg";
import search2 from "../img/search2.svg";

export const Header: FC = (props) => {
  const totalItems = useAppSelector(selectCartTotalItems);
  const clothingItems = useAppSelector(selectCartClothingItems);
  const searchStr = useAppSelector(selectSearchString);

  useEffect(() => {
    const clothingItemsJson = JSON.stringify(clothingItems);
    const searchStrJson = JSON.stringify(searchStr);
    window.localStorage.setItem("basket", clothingItemsJson);
    window.localStorage.setItem("search", searchStrJson);
  }, [clothingItems, searchStr]); // Setting data in local storage

  const [isBurgerActive, changeBurgerActive] = useState<boolean>(false);
  const [isSearchActive, changeSearchActive] = useState<boolean>(false);

  const handleBurgerClick = () => {
    changeBurgerActive(!isBurgerActive);
    document.body.classList.toggle("_lock");
  };

  return (
    <header className={style.block}>
      <div className={style.body}>
        <div className={style.burger} onClick={handleBurgerClick}>
          <span></span>
        </div>
        <Link to="/" className={style.logo}>
          Logo
        </Link>
        <nav
          className={
            isBurgerActive
              ? `${style.menu} ${style.activeMenu}`
              : `${style.menu}`
          }
        >
          <div className={style.menuCloseBtn}>
            <div className={style.logo}>Logo</div>
            <span onClick={handleBurgerClick}></span>
          </div>
          <ul className={style.list}>
            <HeaderLink path={"/"} text={"Главная"} />
            <HeaderLink path={"/category/1"} text={"Деловая"} />
            <HeaderLink path={"/category/2"} text={"Повседневная"} />
            <HeaderLink path={"/category/3"} text={"На вечеринку"} />
            {/* <HeaderLink path={"/category/4"} text={"Для зала"} /> */}
          </ul>
        </nav>

        <SearchInput isSearchActive={isSearchActive} />

        <div
          className={style.searchIcon}
          onClick={() => changeSearchActive(!isSearchActive)}
        >
          <img src={search2} alt="search2" />
        </div>
        <Link to="/cart" className={style.cart}>
          <img src={cart} alt="cart" />
          <span>{totalItems}</span>
        </Link>
      </div>
    </header>
  );
};

interface HeaderLinkProps {
  path: string;
  text: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ path, text }) => {
  return (
    <li className={style.item}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.activeLink}` : `${style.link}`
        }
      >
        {text}
      </NavLink>
    </li>
  );
};
