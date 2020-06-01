import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, TextArea} from "../../../common/FormsControls";
import {compose} from "redux";
import {connect} from "react-redux";

const AboutMeChangingForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Input}
                name='fullName'
                placeholder='Full Name:'
            />
            <Field
                component={TextArea}
                name='aboutMe'
                placeholder='Tell something about yourself:'
            />
            <Field
                component={Input}
                name='lookingForAJob'
                type='checkbox'
            />
            <button>save</button>
        </form>
    )
};

export default compose(
    connect(state => ({
        initialValues: state.profilePage
    }), {}),
    reduxForm({form: 'aboutMeChanging'}),
)(AboutMeChangingForm);
