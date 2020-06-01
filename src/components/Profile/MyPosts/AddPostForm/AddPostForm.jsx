import {maxLengthCreator, required} from "../../../../utils/validators";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../../common/FormsControls";
import React from "react";

const maxLength200 = maxLengthCreator(200);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name='newPostText'
                    component={TextArea}
                    placeholder='Enter new post text'
                    validate={[required, maxLength200]}
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
