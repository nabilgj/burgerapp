import React from 'react';

import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/original.png';

const logo = props => (
    <div 
        className={classes.Logo} 
        style={{height: props.height}}>

        <img src={burgerLogo} alt="burger logo" />
        
    </div>
);

// will go into Toolbar
export default logo;