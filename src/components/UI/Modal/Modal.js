import React, { Component } from 'react';

import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    };

    componentWillUpdate() {
        console.log('[Modal] componentWillUpdate');
    };

    render() {
        return (
            <Auxiliary>
    
            <Backdrop 
                show={this.props.show}
                clicked={this.props.modalClosed}
                />
            <div 
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
                className={classes.Modal}>
                {this.props.children}
            </div>
    
        </Auxiliary>
        );
    }
};

// will go into burger builder
export default Modal;