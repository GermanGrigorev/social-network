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
            <label>
                Are you looking for a job?
            <Field
                component={Input}
                name='lookingForAJob'
                type='checkbox'
            />
            </label>
            <Field
                component={Input}
                name='lookingForAJobDescription'
                placeholder='Why are you looking for a job?:'
            />
            <b>Contacts</b>
            <div>
                {Object.keys(props.initialValues.contacts).map((name, id) => {
                    return (
                        <Contact key={id} contactName={name}/>
                    )
                })}
            </div>
            <button>save</button>
        </form>
    )
};

const Contact = (props) => {
    return (
        <>
            {props.contactName}:
            <Field
                component={Input}
                name={`contacts.${props.contactName}`}
            />
        </>
    )
};

export default compose(
    connect(state => ({
        initialValues: state.profilePage
    }), {}),
    reduxForm({form: 'aboutMeChanging'}),
)(AboutMeChangingForm);
