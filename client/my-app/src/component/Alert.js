import React from 'react';
import BpAlert from 'react-bootstrap/Alert';

const Alert = (props) => (
    <BpAlert 
        varient = {props.alert.success ? 'success' : 'danger'}
        onClose = {props.onClose}
        dismissible
    >
        {props.alert.message}
    </BpAlert>
);

export default Alert;