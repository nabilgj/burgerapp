import React from 'react';
import classes from './CheckoutSummary.module.css';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';


const checkoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it taste well</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                clicked={props.onCheckoutCanelled}
                btnType="Danger">
                CANCEL
            </Button>

            <Button 
                clicked={props.onCheckoutContinued}
                btnType="Success">
                CONTINUE
            </Button>

        </div>
    );
};

// will go into Checkout container
export default checkoutSummary;