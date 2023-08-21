import React, { FC, useState } from 'react'
import style from './index.module.scss'
import { Link } from 'react-router-dom'
// Images
import logo from '../img/logo.svg'
import search1 from '../img/search1.svg'
import cart from '../img/cart.svg'
import search2 from '../img/search2.svg'

export const Header: FC = (props) => {
  const [isBurgerActive, changeBurgerActive] = useState(false);

  const handleBurgerClick = () => {
    changeBurgerActive(!isBurgerActive);
    document.body.classList.toggle('_lock');
  }

  return (
    <header className={style.block}>
      <div className={style.body}>
        <div className={style.burger} onClick={handleBurgerClick}><span></span></div>
        <Link to="/" className={style.logo}><img src={logo} alt="logo" /></Link>
        <nav className={isBurgerActive ? `${style.menu} ${style.activeMenu}` : `${style.menu}`}>
          <div className={style.menuCloseBtn}><img src={logo} alt="logo" /><span onClick={handleBurgerClick}></span></div>
          <ul className={style.list}>
            <li className={style.item}><Link to="#" className={style.link}>Shop</Link></li>
            <li className={style.item}><Link to="#" className={style.link}>On Sale</Link></li>
            <li className={style.item}><Link to="#" className={style.link}>New Arrivals</Link></li>
            <li className={style.item}><Link to="#" className={style.link}>Brands</Link></li>
          </ul>
        </nav>
        <div className={style.searchInput}><img src={search1} alt="search1" /><input type="text" placeholder="Search for products..." /></div>
        <div className={style.searchIcon}><img src={search2} alt="search2" /></div>
        <Link to="#" className={style.cart}><img src={cart} alt="cart" /></Link>
      </div>
    </header>
  );
};