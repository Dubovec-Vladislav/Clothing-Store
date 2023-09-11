import React, { FC } from 'react'
import style from './index.module.scss'
import ContentLoader from 'react-content-loader'

export const ClothingCardSkeleton: FC = (props) => {
  return (
    <div className={style.skeleton}>
      <ContentLoader
        speed={2}
        width={"100%"}
        height={570}
        // viewBox="0 0 294 570"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="0" rx="20" ry="20" width="100%" height="426" />
        <rect x="0" y="444" rx="10" ry="10" width="100%" height="24" />
        <rect x="0" y="476" rx="10" ry="10" width="154" height="22" />
        <rect x="0" y="514" rx="10" ry="10" width="210" height="32" />
      </ContentLoader>
    </div>
  );
};
