import React from 'react';
import {titles} from './directory.data'
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = () => {



  return (
    <div className='directory-menu'>
      {titles.map(({ id, ...otherSectionProps }) => <MenuItem key={id} { ...otherSectionProps } />)}
    </div>
  );
}

export default Directory;
