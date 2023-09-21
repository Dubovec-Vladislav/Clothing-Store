import React, { FC, useState } from 'react'
import style from './index.module.scss'
import { Link } from 'react-router-dom'
// Images
import search1 from '../img/search1.svg'
import cart from '../img/cart.svg'
import search2 from '../img/search2.svg'
import { NavLink } from 'react-router-dom'

export const Header: FC = (props) => {
  const [isBurgerActive, changeBurgerActive] = useState<boolean>(false);
  const [isSearchActive, changeSearchActive] = useState<boolean>(false);

  const handleBurgerClick = () => {
    changeBurgerActive(!isBurgerActive);
    document.body.classList.toggle('_lock');
  }

  return (
    <header className={style.block}>
      <div className={style.body}>
        <div className={style.burger} onClick={handleBurgerClick}><span></span></div>
        <Link to="/" className={style.logo}>Logo</Link>
        <nav className={isBurgerActive ? `${style.menu} ${style.activeMenu}` : `${style.menu}`}>
          <div className={style.menuCloseBtn}><div className={style.logo}>Logo</div><span onClick={handleBurgerClick}></span></div>
          <ul className={style.list}>
            <li className={style.item}><NavLink to="/" className={({ isActive }) => isActive ? `${style.link} ${style.activeLink}` : `${style.link}`}>Главная</NavLink></li>
            <li className={style.item}><NavLink to="/category/1" className={({ isActive }) => isActive ? `${style.link} ${style.activeLink}` : `${style.link}`}>Деловая</NavLink></li>
            <li className={style.item}><NavLink to="/category/2" className={({ isActive }) => isActive ? `${style.link} ${style.activeLink}` : `${style.link}`}>Повседневная</NavLink></li>
            <li className={style.item}><NavLink to="/category/3" className={({ isActive }) => isActive ? `${style.link} ${style.activeLink}` : `${style.link}`}>Для развлечений</NavLink></li>
            <li className={style.item}><NavLink to="/category/4" className={({ isActive }) => isActive ? `${style.link} ${style.activeLink}` : `${style.link}`}>Для зала</NavLink></li>
          </ul>
        </nav>
        <div className={isSearchActive ? `${style.searchInput} ${style.activeSearchInput}` : `${style.searchInput}`}>
          <img src={search1} alt="search1" /><input type="text" placeholder="Search for products..." />
        </div>
        <div className={style.searchIcon} onClick={() => changeSearchActive(!isSearchActive)}><img src={search2} alt="search2" /></div>
        <Link to="/cart" className={style.cart}><img src={cart} alt="cart" /></Link>
      </div>
    </header>
  );
};