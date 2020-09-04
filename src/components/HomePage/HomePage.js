import React, { Component } from 'react';
import classes from './HomePage.module.css';
import Rules from './Rules/Rules';
import TitleBox from './TitleBox/TitleBox';

class HomePage extends Component {
    render() {
        return (
            <main className={classes.HomePageContainer}>
                <TitleBox />
                <Rules />
            </main>
        )
    }
}

export default HomePage;