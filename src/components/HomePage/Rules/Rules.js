import React from 'react';
import classes from './Rules.module.css';

const Rules = () => {
    return (
        <>
            <article className={classes.RulesContainer}>
                <header className={classes.Header}>RULES</header>
                <section className={classes.Rules}>The rules are pretty simple.
                     The board consists of boxes. As you hit 'play' some of them will change their color.
                      After that, your job is to mark which of the boxes changed their color.<br /> Good luck! </section>
            </article>
        </>
    )
}

export default Rules;