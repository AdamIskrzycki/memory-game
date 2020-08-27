import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { IconButton } from '@material-ui/core';
import Title from '../Title/Title';
import classes from './RepresentativeBox.module.css';
import { Link } from 'react-router-dom';

const RepresentativeBox = () => {

    const iconStyles = {
        fontSize: '150px',
        cursor: 'pointer',
        color: 'white',
    }

    return (
        <article className={classes.RepresentativeBox}>
            <Title />
            <IconButton component={Link} to='/game'>
                <PlayCircleFilledIcon style={iconStyles} />
            </IconButton>
        </article>
    )
}

export default RepresentativeBox;