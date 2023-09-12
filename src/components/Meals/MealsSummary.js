import React from 'react'
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <div>
            <section className={classes.summary}>
                <h2>Delicious Food, Delivered To You</h2>
                <p>
                    Choose your favorite meal from our board selection of available meals
                    and enjoy a delicious lunch or denner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients,
                    just-in-time and of course by experience chefs!
                </p>
            </section>
        </div>
    );
};

export default MealsSummary;
