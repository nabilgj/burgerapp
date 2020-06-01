import React from 'react';
import classes from './Order.module.css';

const order = props => {
    const ingredients = [];
    for(let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span 
            key={ig.name}
            style={{
                textTransform: 'capitalize',
                border: '1px solid #eee',
                display: 'inline-block',
                margin: '0 8px',
                padding: '5px'
            }}>{ig.name} ({ig.amount}) </span>
    })

    return (
        <div className={classes.Order}>
            <p> Ingredients: {ingredientOutput} </p>
            <p>Price: <strong> US {Number.parseFloat(props.price).toFixed(2)} </strong></p>
        </div>
    );
}

// will go into Orders cointainer
export default order;