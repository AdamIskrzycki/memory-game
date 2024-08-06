import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { IconButton } from '@material-ui/core';
import Title from './Title/Title';
import classes from './TitleBox.module.css';
import { Link } from 'react-router-dom';

const TitleBox = () => {

    const iconStyles = {
        fontSize: '150px',
        cursor: 'pointer',
        color: 'white',
    }

    return (
        <article className={classes.TitleBox}>
            <Title />
            <IconButton component={Link} to='/game'>
                <PlayCircleFilledIcon style={iconStyles} />
            </IconButton>
        </article>
    )
}

export default TitleBox;