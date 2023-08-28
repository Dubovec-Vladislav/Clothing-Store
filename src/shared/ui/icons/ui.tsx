import React, { FC } from 'react'
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export const TwitterIcon: FC = () => <Link to="#"><FontAwesomeIcon icon={faTwitter} className={style.icon}/></Link>;
export const FacebookIcon: FC = () => <Link to="#"><FontAwesomeIcon icon={faFacebook} className={style.icon} /></Link>;
export const InstagramIcon: FC = () => <Link to="#"><FontAwesomeIcon icon={faInstagram} className={style.icon} /></Link>;
export const GithubIcon: FC = () => <Link to="#"><FontAwesomeIcon icon={faGithub} className={style.icon} /></Link>;