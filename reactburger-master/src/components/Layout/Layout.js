import React from 'react';
import ReactAux from '../../hoc/ReactAux';
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