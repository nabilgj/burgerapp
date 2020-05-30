import React from 'react';
import classes from './Layout.module.css';

import Auxiliary from '../../hoc/Auxiliary';

const layout = props => (

    <Auxiliary>
        <div> toolbar, sidedrawer, backdrop </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
    
);

// will go into App
export default layout;