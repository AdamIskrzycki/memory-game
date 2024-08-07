import React from 'react';
import classes from './Rules.module.css';

const Rules: React.FC = () => {
    return (
        <>
            <article className={classes.RulesContainer}>
                <header className={classes.Header}>RULES</header>
                <section className={classes.Rules}>The rules are pretty simple.
                     The board consists of boxes. As soon as you hit 'play' some of them will change their color.
                      After that, your job is to mark the boxes which changed their color.<br /> Good luck! </section>
            </article>
        </>
    )
}

export default Rules;