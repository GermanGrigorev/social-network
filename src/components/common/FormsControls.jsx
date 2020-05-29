import React from "react";
import './FormsControl.css'

export const FormControl = ({input, meta, ...props}) => {
    let elementClassName = meta.touched && meta.error ? 'FormError-Input' : null;
    return (
        <div className='FormError'>
            <props.element {...input} {...props}
                           className={elementClassName}
            />
            {meta.touched && meta.error && <span className='FormError-Text'>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    return (
        <FormControl {...props} element='textarea'/>
    )
};

export const Input = (props) => {
    return (
        <FormControl {...props} element='input'/>
    )
};
