import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

import Card from './Card';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header>
                <h2 className={classes.header}>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>

    )
}

export default ErrorModal;

/*
What is the problem that we are trying to solve with portals?
--> we are trying to attach the ovarlay elements to body.

What features does React- DOM  library get us.What does adapter mean?
--> React-DOM library provides some features to use in React.
--> React-DOM acts as an adapter here.

What does React.createPortal() take as input. What is the second argument?
--> It takes two arguments
--> 2nd argument is the place in the DOM, where the element is supposed to be render.
*/