import React from 'react';
import { Dialog, DialogContent, DialogActions, DialogTitle, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    congratulations: {
        fontSize: '20px'
    },
}));

const Modal = (props) => {

    const classes = useStyles();

    return <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.openModal}>
        <DialogTitle id="customized-dialog-title">
            Game summary
        </DialogTitle>
        <DialogContent dividers>
            <p className={classes.congratulations}>Congratulations, you won!</p>
            <p>It took you {props.time/1000} seconds</p>
        </DialogContent>
        <DialogActions>
            <Button autoFocus color="primary" onClick={props.handleClose}>
                Go again!
            </Button>
        </DialogActions>
    </Dialog>
}

export default Modal;