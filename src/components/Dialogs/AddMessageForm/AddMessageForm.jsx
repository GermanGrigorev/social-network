import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators";
import React from "react";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field
                component={Textarea}
                name={'newMessageText'}
                placeholder={'Enter new message:'}
                validate={[required, maxLength100]}
            />
            <div>
                <button>add</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
