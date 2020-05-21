import {maxLengthCreator, required} from "../../../utils/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls";
import React from "react";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name='newPostText'
                    component={Textarea}
                    placeholder='Enter new post text'
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Post</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'profileAddPostForm',
})(AddPostForm)
