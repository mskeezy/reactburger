import React from 'react';
import reactAux from '../../hoc/reactAux';
import classes from './Layout.css';


const layout = (props)=> (
    <reactAux>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </reactAux>
);

export default layout;