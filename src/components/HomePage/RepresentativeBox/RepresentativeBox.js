import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Title from '../Title/Title';
import classes from './RepresentativeBox.module.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const RepresentativeBox = () => {

    const iconStyles = {
        fontSize: '150px',
        cursor: 'pointer',
    }

    return (
        <article className={classes.RepresentativeBox}>
            <Title />
            <PlayCircleFilledIcon style={iconStyles} ></PlayCircleFilledIcon>
        </article>
    )
}

export default RepresentativeBox;