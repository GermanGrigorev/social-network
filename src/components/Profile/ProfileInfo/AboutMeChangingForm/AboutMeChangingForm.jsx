import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControls";

const AboutMeChangingForm = (props) => {
    return (
        <form >
            <Field
                component={Input}
                name='fullName'
                placeholder='Full Name:'
            />
        </form>
    )
};

export default reduxForm({form: 'aboutMeChanging'})(AboutMeChangingForm);
