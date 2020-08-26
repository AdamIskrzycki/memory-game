import React, { Component } from 'react';
import classes from './HomePage.module.css';
import Rules from './Rules/Rules';
import RepresentativeBox from './RepresentativeBox/RepresentativeBox';

class HomePage extends Component {
    render() {
        return (
            <main className={classes.HomePageContainer}>
                <RepresentativeBox />
                <Rules />
            </main>
        )
    }
}

export default HomePage;